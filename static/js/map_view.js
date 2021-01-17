


/////////////////////////////////////////////////////////////////////////////////////////////////////////
var gdpData = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "GDP": 790
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                119.3729782104492,
                35.101091404640414
            ]
        }
    },
        {
            "type": "Feature",
            "properties": {
                "GDP": 730
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.38130378723145,
                    35.12250612200286
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 590
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.3257713317871,
                    35.09533304538379
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 720
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.35701370239258,
                    35.13900214724948
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 630
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.3063735961914,
                    35.12580559438448
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 570
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.36508178710936,
                    35.16510817143739
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 300
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.26002502441405,
                    35.081707990840705
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 120
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.52507019042967,
                    35.34761562269892
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 90
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.55699920654297,
                    35.383172064361254
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 660
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.55322265624999,
                    35.44836479904722
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 390
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.59545135498045,
                    35.47017718937938
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 510
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.46430206298828,
                    35.34817568802731
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 440
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.45262908935545,
                    35.43577803767836
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 360
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.4481658935547,
                    35.38681081644444
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 80
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.54429626464844,
                    35.40947934315461
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 555
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.20698165893555,
                    35.72143034768088
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 370
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.20389175415039,
                    35.82129301009015
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 120
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.19136047363281,
                    35.74804478729811
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 103
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.22157287597656,
                    35.75013454980853
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "GDP": 160
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    119.21642303466797,
                    35.770193477944666
                ]
            }
        }
    ]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawMap(hospital_data, GDP_data) {

    // 四个医院的总人数和坐标数据，日照人民，日照中医，岚山，五莲
    var point_data = {
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
    }


    let temp_list = []
    for (let each of point_data["features"]) {
        temp_list.push(each["properties"]["sum"])
    }

    let max_sum = Math.max.apply(null, temp_list)
    let min_sum = Math.min.apply(null, temp_list)

    //计算医院点动态半径 100, 400
    function calcRadius(sum) {
        return parseInt((sum - min_sum) / (max_sum - min_sum) * 400) + 100
    }

////////////////////////////////////////////////////////////////////////////////////////

    mapboxgl.accessToken =
        'pk.eyJ1IjoieGlhb2JpZSIsImEiOiJja2pndjRhMzQ1d2JvMnltMDE2dnlkMGhrIn0.bCKzSCs5tHTIYk4xQ65doA';

    var map = new mapboxgl.Map({
        container: 'map_view',
        style: 'mapbox://styles/xiaobie/ckjr35koy6b3t19pb3h5wlzs2',
        center: [119.442402, 35.45598],
        zoom: 9.2
    });
    //////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////
    // 动画图标生成
    let hospital_point = [];
    let coord = []
    for (let i = 0; i < 4; i++) {

        let size = calcRadius(point_data["features"][i]["properties"]["sum"])

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
                context.fillStyle = '#120136';
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

        hospital_point.push(pulsingDot)
        coord.push(point_data["features"][i]["geometry"]["coordinates"])
    }
    ////////////////////////////////////////////////////////////////////////////

    //gdp最值计算
    let heat_list = [];
    for (let i = 0; i < GDP_data["features"].length; i++) {
        heat_list.push(GDP_data["features"][i]["properties"]["GDP"])
    }
    heat_list.sort(function (a, b) {
        return a - b;
    });
    let max_gdp = heat_list[heat_list.length - 10];
    let min_gdp = heat_list[0];

    map.on('load', function () {

        //热力图
        map.addSource('gdp-source', {
            "type": "geojson",
            "data": GDP_data
        });
        map.addLayer({
            id: "gdp-heatmap",
            type: "heatmap",
            source: "gdp-source",
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
        /////////////////////////////////////////////////////////////////////////////////
        // Add a source and layer displaying a point which will be animated in a circle.
        // map.addSource('point', {
        //     "type": "geojson",
        //     "data": point_data
        // });
        //
        // map.addLayer({
        //     "id": "hospital",
        //     "source": "point",
        //     "type": "circle",
        //     "minzoom": 6,
        //     "paint": {
        //         // 圆圈半径动态更改，根据缩放等级从9到16，将数据中的radius属性，线性映射[20, 50] -> [2,5] ->[20,50]
        //         "circle-radius": [
        //             "interpolate",
        //             ["linear"],
        //             ["zoom"],
        //             9, [
        //                 "interpolate",
        //                 ["linear"],
        //                 ["get", "radius"],
        //                 20, 2,
        //                 50, 5
        //             ],
        //             16, [
        //                 "interpolate",
        //                 ["linear"],
        //                 ["get", "radius"],
        //                 20, 20,
        //                 50, 50
        //             ]
        //
        //         ],
        //         "circle-color": "#ff2e63"
        //     }
        // });
        //
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

            let icon_id = "pulsing-dot" + index;

            map.addImage(icon_id, hospital_point[index], {
                pixelRatio: 2
            });

            map.addLayer({
                "id": "points" + index,
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

            //点击事件******************************************
            map.on('click', "points" + index, function (e) {
                let coordinates = e.features[0].geometry.coordinates.slice();
                let hospital_name = e.features[0].properties.name;


                // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 180 : -180;
                // }
                console.log(hospital_name);
                transport_data["hospital"] = hospital_name;
                redraw("/change_hospital", false);

            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', "points" + index, function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', "points" + index, function () {
                map.getCanvas().style.cursor = '';
            });
        }

    })
}
