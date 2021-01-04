
// 页面跳转到详情页
// $("#second_page").click(function(){
//     window.open('/feature','_self');
// });


 // 四个医院的总人数和坐标数据，日照人民，日照中医，岚山，五莲
    var point_data = {
        "type": "FeatureCollection",
        "features": [{
                "type": "Feature",
                "properties": {
                    "name": "日照市人民医院",
                    "sum": 500,
                    "radius": 50
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
                    "sum": 400,
                    "radius": 40
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
                    "sum": 300,
                    "radius": 30
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
                    "sum": 200,
                    "radius": 20
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [119.209408, 35.754765]
                }
            },
        ],
    }

function drawMap(hospital_data) {

     mapboxgl.accessToken =
            'pk.eyJ1IjoieGlhb2JpZSIsImEiOiJja2pndjRhMzQ1d2JvMnltMDE2dnlkMGhrIn0.bCKzSCs5tHTIYk4xQ65doA';

        var map = new mapboxgl.Map({
            container: 'map_view',
            style: 'mapbox://styles/xiaobie/ckjhzekiycgjs19p1wclj4gmr',
            center: [119.273902, 35.488619],
            zoom: 9.2
        });
        //////////////////////////////////////////////////////////////////////////////


        map.on('load', function () {
            // Add a source and layer displaying a point which will be animated in a circle.

            map.addSource('point', {
                "type": "geojson",
                "data": point_data
            });

            map.addLayer({
                "id": "hospital",
                "source": "point",
                "type": "circle",
                "minzoom": 6,
                "paint": {
                    // 圆圈半径动态更改，根据缩放等级从9到16，将数据中的radius属性，线性映射[20, 50] -> [2,5] ->[20,50]
                    "circle-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        9, [
                            "interpolate",
                            ["linear"],
                            ["get", "radius"],
                            20, 2,
                            50, 5
                        ],
                        16, [
                            "interpolate",
                            ["linear"],
                            ["get", "radius"],
                            20, 20,
                            50, 50
                        ]

                    ],
                    "circle-color": "#ff2e63"
                }
            });

            //点击事件
            map.on('click', 'hospital', function (e) {
                let coordinates = e.features[0].geometry.coordinates.slice();
                let names = e.features[0].properties.name;


                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                console.log(names);


            });

            // Change the cursor to a pointer when the mouse is over the places layer.
            map.on('mouseenter', 'hospital', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'hospital', function () {
                map.getCanvas().style.cursor = '';
            });
        })
}

drawMap(point_data);



