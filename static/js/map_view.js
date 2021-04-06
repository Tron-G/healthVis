/**
 * @description 绘制系统首页地图以及四个医院的圆点，热力图层，职业相关坐标点集等
 * @param {object} hospital_data  四个医院的各个就诊总人数json数据
 * @param {object} category_data  地图图层数据，GDP，卫生院坐标等等
 */
function drawMap(hospital_data, category_data) {
    $("#map_view").empty();
    // $(".mapboxgl-ctrl").remove();
    // $(".mapboxgl-canvas").remove();
    // $(".mapboxgl-popup").remove();
    // $(".hospital_name").remove();
    //医院名称颜色
    const HOSPITAL_NAME_COLOR = "#ff0000";
    //医院圆点颜色
    const HOSPITAL_POINT_COLOR = "#120136";

    // 四个医院的总人数和坐标数据，日照人民，日照中医，岚山，五莲
    const point_data = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {
                "name": "日照市人民医院",
                "sum": hospital_data["日照市人民医院"],
            },
            "geometry": {
                "type": "Point",
                "coordinates": [119.512315, 35.410174]
            }
        },
            {
                "type": "Feature",
                "properties": {
                    "name": "日照市岚山区人民医院",
                    "sum": hospital_data["日照市岚山区人民医院"],
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [119.298383, 35.13066]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "日照市中医医院",
                    "sum": hospital_data["日照市中医医院"],
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [119.464697, 35.433448]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "五莲县人民医院",
                    "sum": hospital_data["五莲县人民医院"],
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [119.209408, 35.754765]
                }
            },
        ],
    };

    let temp_list = [];
    for (let each of point_data["features"]) {
        temp_list.push(each["properties"]["sum"])
    }

    let max_sum = Math.max.apply(null, temp_list);
    let min_sum = Math.min.apply(null, temp_list);

    //计算医院点动态半径 100, 400
    function calcRadius(sum) {
        return parseInt((sum - min_sum) / (max_sum - min_sum) * 400) + 100
    }


    //////////////////////////////////////////////////////////////////////
    // 地图初始化
    //////////////////////////////////////////////////////////////////////
    mapboxgl.accessToken =
        'pk.eyJ1IjoieGlhb2JpZSIsImEiOiJja2pndjRhMzQ1d2JvMnltMDE2dnlkMGhrIn0.bCKzSCs5tHTIYk4xQ65doA';

    let map = new mapboxgl.Map({
        container: 'map_view',
        style: 'mapbox://styles/xiaobie/ckjr35koy6b3t19pb3h5wlzs2',
        center: [119.442402, 35.45598],
        zoom: 9.2
    });

    // map.removeControl(navigation_control);
    // map.removeControl(draw);

    let navigation_control = new mapboxgl.NavigationControl();
    map.addControl(navigation_control, 'top-left');

    //添加刷选工具栏按钮绑定事件
    let draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }

    });
    window.Draw = draw;
    map.addControl(draw, "top-left");
    map.on("draw.create", updateArea);
    map.on("draw.update", updateArea);
    map.on("draw.delete", delArea);

    let words = "";

    //缓存饮食界面上一个选择的医院，用于移除layer
    let selected_hospital = [];
    //////////////////////////////////////////////////////////////////////
    // 四大医院坐标点动画图标生成
    //////////////////////////////////////////////////////////////////////
    let hospital_point = [];
    let coord = [];
    for (let i = 0; i < 4; i++) {

        let size = calcRadius(point_data["features"][i]["properties"]["sum"]);

        let pulsingDot = {
            name: point_data["features"][i]["properties"]["name"],
            width: size,
            height: size,
            data: new Uint8Array(size * size * 4),

            onAdd: function () {
                let canvas = document.createElement('canvas');
                canvas.width = this.width;
                canvas.height = this.height;
                this.context = canvas.getContext('2d');
            },

            render: function () {
                let duration = 1000;
                let t = (performance.now() % duration) / duration;

                let radius = size / 2 * 0.3;
                let outerRadius = size / 6 * 0.7 * t + radius;
                let context = this.context;

                // draw outer circle
                context.clearRect(0, 0, this.width, this.height);
                context.beginPath();
                context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
                context.fillStyle = 'rgba(3, 90, 166,' + (1 - t) + ')';
                context.fill();

                // draw inner circle
                context.beginPath();
                context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
                context.fillStyle = HOSPITAL_POINT_COLOR;
                context.strokeStyle = 'white';
                context.lineWidth = 2 + 4 * (1 - t);
                context.fill();
                // context.stroke();

                // update this image's data with data from the canvas
                this.data = context.getImageData(0, 0, this.width, this.height).data;

                // keep the map repainting
                map.triggerRepaint();

                // return `true` to let the map know that the image was updated
                return true;
            }
        };

        hospital_point.push(pulsingDot);
        coord.push(point_data["features"][i]["geometry"]["coordinates"])
    }


    map.on('load', function () {

        //////////////////////////////////////////////////////////////////////
        // 根据选择的种类的值绘制地图点集
        //////////////////////////////////////////////////////////////////////
        if (TRANSPORT_DATA["map_checked_type"] === "GDP" || TRANSPORT_DATA["map_checked_type"] === "pollution_company") {
            drawHeatMap(TRANSPORT_DATA["map_checked_type"], category_data);
        } else {
            drawCategoryPlace(TRANSPORT_DATA["map_checked_type"], category_data);
        }


        ////////////////////////////////////////////////////////////////////////////
        // //点击事件
        map.on('click', function (e) {
            // let coordinates = e.features[0].geometry.coordinates.slice();
            // let names = e.features[0].properties.name;
            //
            // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            // }
            // console.log(names);

            // 以此点*px范围内的正方形算为点击反应区
            let bbox = [
                [e.point.x - 1, e.point.y - 1],
                [e.point.x + 1, e.point.y + 1]
            ];
            // mapbox 返回查询要素的图层属性
            let features = map.queryRenderedFeatures(bbox, {
                layers: [TRANSPORT_DATA["map_checked_type"]]
            });
            let filter_hp = features.reduce(
                function (memo, feature) {
                    //console.log(feature);
                    let popup = new mapboxgl.Popup({
                        closeOnClick: false,
                        className: "popUp"
                    })
                        .setLngLat(feature.geometry["coordinates"])
                        .setText(feature.properties.name)
                        .addTo(map);
                    return memo;
                }, ['name']
            );
        });
        //
        // // Change the cursor to a pointer when the mouse is over the places layer.
        // map.on('mouseenter', 'hospital', function () {
        //     map.getCanvas().style.cursor = 'pointer';
        // });
        //
        // // Change it back to a pointer when it leaves.
        // map.on('mouseleave', 'hospital', function () {
        //     map.getCanvas().style.cursor = '';
        // });


        //添加医院圆点
        for (let index = 0; index < 4; index++) {

            //添加医院的名字
            let el = document.createElement("div");
            el.id = "hospital_name" + index;
            el.className = "hospital_name";
            el.innerHTML = hospital_point[index].name;

            el.style.color = HOSPITAL_NAME_COLOR;

            let currentMarkerTitle = new mapboxgl.Marker(el, {offset: [65, -5]})
                .setLngLat(coord[index])
                .addTo(map);


            let icon_id = "pulsing-dot" + index;

            map.addImage(icon_id, hospital_point[index], {
                pixelRatio: 2
            });

            map.addLayer({
                "id": "hospital_points" + index,
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "properties": {
                                "name": hospital_point[index].name,
                            },
                            "geometry": {
                                "type": "Point",
                                "coordinates": coord[index]
                            }
                        }]
                    }
                },
                // "icon-size"控制图标大小
                "layout": {
                    "icon-image": icon_id,
                    "icon-ignore-placement": true,
                    "icon-size": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        9, 0.3,
                        16, 1
                    ]
                }
            });
            // **********************************************************************
            //   点击事件
            // **********************************************************************
            map.on('click', "hospital_points" + index, function (e) {
                let coordinates = e.features[0].geometry.coordinates.slice();
                let hospital_name = e.features[0].properties.name;

                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 180 : -180;
                }

                //餐饮页面下选择医院
                if (TRANSPORT_DATA["map_checked_type"] === "restaurant") {
                    let last_select = "";
                    //首次选择医院点
                    if (selected_hospital.length === 0) {
                        selected_hospital.push(hospital_name);
                    }
                    //切换医院点
                    else {
                        $(".popUp").remove();
                        last_select = selected_hospital.pop();
                        map.removeLayer("polygon" + last_select);
                        map.removeSource("polygon" + last_select);
                        selected_hospital.push(hospital_name);
                        TRANSPORT_DATA["selected_restaurant_type"] = [];
                    }

                    // 圆圈半径
                    let radius = 3;
                    //显示范围内的地点弹窗
                    for (let i = 0; i < category_data["features"].length; i++) {
                        let coords = category_data["features"][i]["geometry"]["coordinates"];
                        if (calcDistance(coordinates, coords) <= radius) {
                            let popup = new mapboxgl.Popup({
                                closeOnClick: false,
                                className: "popUp"
                            })
                                .setLngLat(coords)
                                .setText(category_data["features"][i]["properties"]["name"])
                                .addTo(map);
                            let restaurant_type = category_data["features"][i]["properties"]["category"];
                            if (TRANSPORT_DATA["selected_restaurant_type"].indexOf(restaurant_type) === -1) {
                                TRANSPORT_DATA["selected_restaurant_type"].push(restaurant_type);
                            }
                        }
                    }
                    //点击医院显示半径3km的圆
                    map.addSource("polygon" + hospital_name, createGeoJSONCircle(coordinates, radius));
                    map.addLayer({
                        "id": "polygon" + hospital_name,
                        "type": "fill",
                        "source": "polygon" + hospital_name,
                        "layout": {},
                        "paint": {
                            "fill-color": "#393e46",
                            "fill-opacity": 0.4
                        }
                    });


                    redraw("/change_hospital_restaurant", "select_hospital_restaurant");
                }
                else {
                    TRANSPORT_DATA["hospital"] = hospital_name;
                    redraw("/change_hospital", "select_hospital");
                }

            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', "hospital_points" + index, function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', "hospital_points" + index, function () {
                map.getCanvas().style.cursor = '';
            });
        }

    });

    /**
     * @description 刷选地图显示弹窗同时触发词云
     */
    function updateArea(e) {
        let data = draw.getAll();
        if (data.features.length > 0) {

            //查询选中要素
            let draw_polygon = turf.bbox(e.features[0]);
            let southWest = [draw_polygon[0], draw_polygon[1]];
            let northEast = [draw_polygon[2], draw_polygon[3]];

            let northEastPointPixel = map.project(northEast);
            let southWestPointPixel = map.project(southWest);

            let features = map.queryRenderedFeatures([southWestPointPixel, northEastPointPixel], {
                layers: [TRANSPORT_DATA["map_checked_type"]]
            });
            //框选结果
            let filter_hp = features.reduce(
                function (memo, feature) {
                    //console.log(feature);
                    // if (feature.properties.hasOwnProperty("category")) {
                    //     console.log(feature.properties.category);
                    // }
                    if (TRANSPORT_DATA["map_checked_type"] === "restaurant" || TRANSPORT_DATA["map_checked_type"] === "pollution_company") {
                        words += "、" + feature.properties.category;
                    }

                    let popup = new mapboxgl.Popup({
                        closeOnClick: false,
                        className: "popUp"
                    })
                        .setLngLat(feature.geometry["coordinates"])
                        .setText(feature.properties.name)
                        .addTo(map);

                    return memo;
                }, ["name"]
            );
        } else {
            if (e.type !== 'draw.delete') alert("请用绘制工具绘制图形后再试!");
        }
        // console.log(words.split("、"));
        //展示词云图
        if (TRANSPORT_DATA["map_checked_type"] === "restaurant" || TRANSPORT_DATA["map_checked_type"] === "pollution_company") {
            if (echarts.getInstanceByDom(document.getElementById("word_cloud")) !== undefined) {

                // console.log(echarts.getInstanceByDom(document.getElementById("word_cloud")));
                echarts.getInstanceByDom(document.getElementById("word_cloud")).dispose();
            }
            drawWordCloud(words.split("、"), "word_cloud");
        }
    }

    /**
     * @description 绘制圆形区域的函数
     * @param {object} center  [经度，纬度]
     * @param {number} radiusInKm  圆的半径单位km
     * @param {number} points
     */
    function createGeoJSONCircle(center, radiusInKm, points = 64) {

        let coords = {
            latitude: center[1],
            longitude: center[0]
        };

        let km = radiusInKm;

        let ret = [];
        let distanceX = km / (111.320 * Math.cos(coords.latitude * Math.PI / 180));
        let distanceY = km / 110.574;

        let theta, x, y;
        for (let i = 0; i < points; i++) {
            theta = (i / points) * (2 * Math.PI);
            x = distanceX * Math.cos(theta);
            y = distanceY * Math.sin(theta);

            ret.push([coords.longitude + x, coords.latitude + y]);
        }
        ret.push(ret[0]);

        return {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [ret]
                    }
                }]
            }
        };
    }


    /**
     * @description 计算两个坐标点之间的距离
     * @param {object} center1 第一个点的[经度，纬度]
     * @param {number} center2 第二个点的[经度，纬度]
     */
    function calcDistance(center1, center2) {
        let coordes1 = {
            latitude: center1[1] * Math.PI / 180.0,
            longitude: center1[0] * Math.PI / 180.0
        };
        let coordes2 = {
            latitude: center2[1] * Math.PI / 180.0,
            longitude: center2[0] * Math.PI / 180.0
        };
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin((coordes1.latitude - coordes2.latitude) / 2), 2) +
            Math.cos(coordes1.latitude) * Math.cos(coordes2.latitude) * Math.pow(Math.sin((coordes1.longitude - coordes2.longitude) / 2), 2)));

        s *= 6378.137;
        s = Math.round(s * 10000) / 10000;
        return s;
    }


    /**
     * @description 删除按钮去掉弹窗
     */
    function delArea() {
        words = "";
        $(".popUp").remove();
    }

    /**
     * @description 绘制系统首页地图GDP数据热力图层
     * @param {object} type_name  热力图类型，用做id值
     * @param {object} geo_data  日照市主要GDP贡献公司的坐标以及GDP值等
     */
    function drawHeatMap(type_name, geo_data) {

        //////////////////////////////////////////////////////////////////////////
        //gdp最值计算
        //////////////////////////////////////////////////////////////////////////
        if (type_name === "GDP") {
            let heat_list = [];
            for (let i = 0; i < geo_data["features"].length; i++) {
                heat_list.push(geo_data["features"][i]["properties"]["GDP"])
            }
            heat_list.sort(function (a, b) {
                return a - b;
            });
            let max_gdp = heat_list[heat_list.length - 10];
            let min_gdp = heat_list[0];
            map.addSource('heatmap_data', {
                "type": "geojson",
                "data": geo_data
            });
            map.addLayer({
                "id": type_name + "-heat",
                "type": "heatmap",
                "source": "heatmap_data",
                "maxzoom": 15,
                "paint": {
                    "heatmap-weight": [
                        "interpolate",
                        ["linear"],
                        ["get", "GDP"],
                        min_gdp, 0,
                        max_gdp, 1
                    ],
                    "heatmap-intensity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        4, 2,
                        13, 4
                    ],
                    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                    // Begin color ramp at 0-stop with a 0-transparancy color
                    // to create a blur-like effect.
                    "heatmap-color": [
                        "interpolate",
                        ["linear"],
                        ["heatmap-density"],
                        0, "rgba(33,102,172,0)",
                        0.2, "#f0ebe5",
                        0.4, "#fff76a",
                        0.6, "#ffce89",
                        0.8, "#ffb0b0",
                        1, "#fe7171"
                    ],
                    // Adjust the heatmap radius by zoom level
                    "heatmap-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        4, 5,
                        16, 50
                    ],
                    // Transition from heatmap to circle layer by zoom level
                    "heatmap-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        9, 1,
                        13.5, 0
                    ]
                }
            });
        } else {
            map.addSource('heatmap_data', {
                "type": "geojson",
                "data": geo_data
            });
            map.addLayer({
                "id": type_name + "-heat",
                "type": "heatmap",
                "source": "heatmap_data",
                "maxzoom": 17,
                "paint": {
                    "heatmap-weight": 0.3,
                    "heatmap-intensity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        4, 2,
                        13, 4
                    ],
                    "heatmap-color": [
                        "interpolate",
                        ["linear"],
                        ["heatmap-density"],
                        0, "rgba(33,102,172,0)",
                        0.2, "#f0ebe5",
                        0.4, "#fff76a",
                        0.6, "#ffce89",
                        0.8, "#ffb0b0",
                        1, "#fe7171"
                    ],
                    "heatmap-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        4, 5,
                        16, 50
                    ],
                    "heatmap-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        9, 1,
                        13.5, 0
                    ]
                }
            });
        }

        map.addSource('point', {
            "type": "geojson",
            "data": geo_data
        });

        map.addLayer({
            "id": type_name,
            "source": "point",
            "type": "circle",
            "minzoom": 6,
            "paint": {
                // 圆圈半径动态更改，根据缩放等级从9到16，将数据中的radius属性，线性映射[20, 50] -> [2,5] ->[20,50]
                "circle-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    9, 2,
                    16, 17
                ],
                "circle-opacity": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    11, 0,
                    13.5, 1
                ],
                "circle-color": "#f6416c"
            }
        });
    }

    /**
     * @description 绘制系统首页地图职业相关坐标点集等
     * @param {string} type_name  职业名称，用做id值
     *  @param {object} type_place_data  相关地理点集数据
     */
    function drawCategoryPlace(type_name, type_place_data) {

        let TYPE_POINT_COLOR = {
            "teacher": "#625261",
            "health_center": "#e40017",
            "restaurant": "#00917c",
            "police": "#8f4068",
            "worker": "#91684a",
            "iron": "#1e212d",
            "special": "#0e49b5"
        };

        // console.log(type_place_data);
        /////////////////////////////////////////////////////////////////////////////////
        //   Add a source and layer displaying a point which will be animated in a circle.
        map.addSource('point', {
            "type": "geojson",
            "data": type_place_data
        });

        map.addLayer({
            "id": type_name,
            "source": "point",
            "type": "circle",
            "minzoom": 6,
            "paint": {
                // 圆圈半径动态更改，根据缩放等级从9到16，将数据中的radius属性，线性映射[20, 50] -> [2,5] ->[20,50]
                "circle-radius": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    9, 2,
                    16, 20
                ],
                "circle-color": TYPE_POINT_COLOR[type_name]
            }
        });
    }
}

