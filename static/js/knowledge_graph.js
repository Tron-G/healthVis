/**
 * @description 绘制疾病知识图谱
 * @param {array} data  知识图谱数据组
 */
function drawKnowledgeGraph(data) {
    let nodes = []
    let links = []
    data.forEach(d => {
        if (d.name) {
            let o = {
                "name": d.name,
                "symbolSize": 50,
                "draggable": "true",
                "categories": d.name,
                itemStyle: {
                    normal: {
                        // borderWidth: '1',
                        // borderType: 'solid',
                        // borderColor: '#00ffff',
                        // shadowColor: 'rgba(0, 0, 0, .6)',
                        // shadowBlur: 10,
                         color: '#5F9EA0'
                    }
                },
                "label": {
                    "show": true,
                    // position: 'right',
                    "textStyle": {
                        "color": "black",
                        fontSize: 8
                    }
                }
            }
            nodes.push(o)
            list = Object.keys(d)
            for (let i = 1; i < list.length; i++) {
                if (d[list[i]]) {
                    let o2 = {
                        "name": list[i] + ':' + d[list[i]],
                        "symbolSize": 20,
                        "draggable": "true",
                        itemStyle: {
                            normal: {
                                // borderWidth: '1',
                                // borderType: 'solid',
                                // borderColor: '#00ffff',
                                // shadowColor: 'rgba(0, 0, 0, .6)',
                                // shadowBlur: 10,
                                color: '#5F9EA0'
                            }
                        },
                        "label": {
                            formatter: function (pararms) {
                                // console.log(pararms)
                            },
                            "normal": {
                                // "show": false,
                                'position': 'right',
                                "textStyle": {
                                    "color": "black",
                                    fontSize: 8
                                }
                            }
                        }
                    }
                    nodes.push(o2)
                }
                let l = {
                    "source": d.name,
                    "target": list[i] + ':' + d[list[i]]

                }

                links.push(l)
            }
        }
    })
    // console.log(nodes)
    var result = [];
    var obj = {};
    for (var i = 0; i < nodes.length; i++) {
        if (!obj[nodes[i].name]) {
            result.push(nodes[i]);
            obj[nodes[i].name] = true;
        }
    }
    // console.log(result);
    let main = echarts.init(document.getElementById('knowledge_graph'));
    main.clear()
    var option = {
         title: {
            text: '知识图谱',
            x: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: "bold"
            }
        },
        animationDurationUpdate: 300,
        animationEasingUpdate: 'quinticInOut',

        series: [{
            type: 'graph',
            layout: 'force',
            focusNodeAdjacency: true,
            draggable: true,
            roam: true,
            force: {
                repulsion: 50,
                gravity: 0.03,
                edgeLength: 35,
            },
            // categories: cat,
            data: result,
            links: links
        }]
    };
    main.setOption(option)
}