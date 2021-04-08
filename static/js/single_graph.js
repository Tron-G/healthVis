/**
 * @description 绘制疾病单分图
 * @param {array} data  单分图数据组
 */
function drawSingleGraph(data) {
    let main = echarts.init(document.getElementById('knowledge_graph'));
    main.clear()
    var option = {
         title: {
            text: '疾病关联图谱',
            x: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: "bold"
            }
        },
        // "tooltip": {
        // 	"trigger": "item",
        // 	"formatter": "{b}"
        // },
        "series": [{
            "type": "graph",
            "layout": "force",
            'roam': true,
            "force": {
                "repulsion": 80,
                "gravity": 0.0001,
                "edgeLength": [40, 30],
                "layoutAnimation": true
            },
            "symbolSize": 30,
            "itemStyle": {
                "normal": {
                    color: "#A170DD",
                    // shadowBlur: 5,
                    "label": {
                        "show": true,
                        // position:"right",
                        "textStyle": {
                            "color": "black",
                            "fontSize": 8
                        }
                    }
                }
            },
            "emphasis": {
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#000",
                        fontWeight:"bold",
                        "fontSize": 12
                    }
                },
                "linkStyle": {}
            },
            "data": data.node,
            "links": data.relation
        }]
    }
    main.setOption(option)
}