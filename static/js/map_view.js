/**
 * @description 绘制系统首页地图以及四个医院的圆点，热力图层，职业相关坐标点集等
 * @param {object} hospital_data  四个医院的各个就诊总人数json数据
 * @param {object} GEO_POINT_DATA  主视图上的单选框的选中值map_checked_type，用于分别绘制不同的点集数据 (GDP|school...),以及对应的数据等
 */
function drawMap(hospital_data, GEO_POINT_DATA) {
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

    var map = new mapboxgl.Map({
        container: 'map_view',
        style: 'mapbox://styles/xiaobie/ckjr35koy6b3t19pb3h5wlzs2',
        center: [119.442402, 35.45598],
        zoom: 9.2
    });

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
        // 根据单选框的值绘制地图点集
        //////////////////////////////////////////////////////////////////////
        switch (GEO_POINT_DATA["map_checked_type"]) {
            case "GDP":
                //gdp热力图
                drawHeatMap("GDP", GEO_POINT_DATA["GDP"]);
                break;
            case "school":
                drawCategoryPlace("school", GEO_POINT_DATA["school"]);
                break;
            case "health_center":
                drawCategoryPlace("health_center", GEO_POINT_DATA["health_center"]);
                break;
            case "pollution_company":
                drawHeatMap("pollution_company", GEO_POINT_DATA["pollution_company"]);
                break;
        }


        ////////////////////////////////////////////////////////////////////////////
        // //点击事件
        // map.on('click', 'hospital', function (e) {
        //     let coordinates = e.features[0].geometry.coordinates.slice();
        //     let names = e.features[0].properties.name;
        //
        //
        //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        //     }
        //     console.log(names);
        //
        //
        // });
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


                // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 180 : -180;
                // }
                console.log(hospital_name);
                TRANSPORT_DATA["hospital"] = hospital_name;
                redraw("/change_hospital", "select_hospital");
                testData();
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
            map.addSource('geo-source', {
                "type": "geojson",
                "data": geo_data
            });
            map.addLayer({
                id: type_name + "_heatMap",
                type: "heatmap",
                source: "geo-source",
                maxzoom: 17,
                paint: {
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
                        10, 1,
                        16, 0.5
                    ]
                }
            });
        }
        else{
             map.addSource('geo-source', {
                "type": "geojson",
                "data": geo_data
            });
            map.addLayer({
                id: type_name + "_heatMap",
                type: "heatmap",
                source: "geo-source",
                maxzoom: 17,
                paint: {
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
                        10, 1,
                        16, 0.5
                    ]
                }
            });
        }

    }

    /**
     * @description 绘制系统首页地图职业相关坐标点集等
     * @param {string} type_name  职业名称，用做id值
     *  @param {object} type_place_data  相关地理点集数据
     */
    function drawCategoryPlace(type_name, type_place_data) {

        const TYPE_POINT_COLOR = "#cd8d7b";
        console.log(type_place_data);
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
                    9, 2.5,
                    16, 50
                ],
                "circle-color": TYPE_POINT_COLOR
            }
        });
    }

}

