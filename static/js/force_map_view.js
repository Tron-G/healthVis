/**
 * @description 绘制系统第二页的疾病节点链路图
 * @param {object} data  节点链路图数据
 * @param {string} draw_type  绘制类型，“overview”：全图绘制，“focus”：展示具体一个疾病的关联关系
 */
function drawForceMap(data, draw_type) {
    if (echarts.getInstanceByDom(document.getElementById("force_map_view")) !== undefined) {
        // console.log(echarts.getInstanceByDom(document.getElementById("word_cloud")));
        echarts.getInstanceByDom(document.getElementById("force_map_view")).dispose();
    }

    let disease = [
        {
            name: "咽炎",
            p: '呼吸道',
            n: 0
        }, {
            name: "窦性心动过缓",
            p: '心脏',
            n: 1
        }, {
            name: "牙结石",
            p: '口腔',
            n: 2
        }, {
            name: "脂肪肝",
            p: "肝脏",
            n: 3
        }, {
            name: "平均血红蛋白浓度(MCHC)偏高",
            p: "血液",
            n: 4
        }, {
            name: "载脂蛋白A1(ApoA1)偏低",
            p: "血液",
            n: 4
        }, {
            name: "胆固醇偏高",
            p: "血液",
            n: 4
        }, {
            name: "超重",
            p: "综合",
            n: 5
        }, {
            name: "血压高",
            p: "血液",
            n: 4
        }, {
            name: "谷丙转氨酶(ALT)偏高",
            p: "血液",
            n: 4
        }, {
            name: "尿酸(UA)偏高",
            p: "血液",
            n: 4
        }, {
            name: "胆红素(TBIL)偏高",
            p: "血液",
            n: 4
        }, {
            name: "高密度脂蛋白(HDL-C)偏低",
            p: "血液",
            n: 4
        }, {
            name: "脂蛋白a(LPa)偏高",
            p: "血液",
            n: 4
        }, {
            name: "肝囊肿",
            p: "肝脏",
            n: 3
        }, {
            name: "低密度脂蛋白(LDL--C)偏高",
            p: "血液",
            n: 4
        }, {
            name: "γ-谷氨酰转肽酶(GGT)偏高",
            p: "血液",
            n: 4
        }, {
            name: "智齿",
            p: "口腔",
            n: 2
        }, {
            name: "牙色素附着",
            p: "口腔",
            n: 2
        }, {
            name: "尿隐血",
            p: "血液",
            n: 4
        }, {
            name: "前列腺增生",
            p: "泌尿",
            n: 6
        }, {
            name: "肌酐(CREA)偏低",
            p: "血液",
            n: 4
        }, {
            name: "淋巴细胞数(LYMPH#)偏高",
            p: "血液",
            n: 4
        }, {
            name: "甲状腺双侧叶结节",
            p: "内分泌",
            n: 7
        }, {
            name: "甘油三酯(TG)偏高",
            p: "血液",
            n: 4
        }, {
            name: "胆囊息肉",
            p: "肝脏",
            n: 3
        },
        {
            name: "肥胖",
            p: "综合",
            n: 5
        }, {
            name: "三尖瓣少量反流",
            p: "血液",
            n: 4
        }, {
            name: "龋齿",
            p: "口腔",
            n: 2
        }, {
            name: "谷草/谷丙(AST/ALT)偏高",
            p: "血液",
            n: 4
        }, {
            name: "肾囊肿",
            p: "肾脏",
            n: 8
        }, {
            name: "谷草转氨酶(AST)偏高",
            p: "血液",
            n: 4
        }, {
            name: "乳腺增生症",
            p: "生殖系统",
            n: 9
        }, {
            name: "红细胞分布宽度偏低",
            p: "血液",
            n: 4
        }, {
            name: "甲状腺右侧叶结节",
            p: "内分泌",
            n: 7
        }, {
            name: "碱性磷酸酶(ALP)偏高",
            p: "血液",
            n: 4
        }, {
            name: "鼻甲肥大",
            p: "鼻腔",
            n: 10
        }, {
            name: "总蛋白(TP)偏低",
            p: "血液",
            n: 4
        }, {
            name: "吸烟",
            p: "呼吸道",
            n: 0
        }, {
            name: "白细胞(WBC)偏高",
            p: "血液",
            n: 4
        }, {
            name: "二尖瓣少量反流",
            p: "血液",
            n: 4
        }, {
            name: "载脂蛋白B(ApoB)偏高",
            p: "血液",
            n: 4
        }, {
            name: "左室充盈异常",
            p: "心脏",
            n: 1
        }, {
            name: "动脉硬化",
            p: "血管",
            n: 11
        }, {
            name: "空腹血糖(GLU)偏高",
            p: "血液",
            n: 4
        }, {
            name: "高血压病",
            p: "血液",
            n: 4
        }, {
            name: "牙缺失",
            p: "口腔",
            n: 2
        }, {
            name: "鼻中隔偏曲",
            p: "鼻腔",
            n: 10
        }, {
            name: "淋巴细胞比率偏高",
            p: "血液",
            n: 4
        }, {
            name: "不良修复体",
            p: "血液",
            n: 4
        }, {
            name: "牙残根",
            p: "口腔",
            n: 2
        }, {
            name: "主动脉瓣少量反流",
            p: "血液",
            n: 4
        }, {
            name: "二尖瓣反流",
            p: "血液",
            n: 4
        }, {
            name: "低密度脂蛋白偏高",
            p: "血液",
            n: 4
        }, {
            name: "中性细胞比率偏低",
            p: "血液",
            n: 4
        }, {
            name: "三尖瓣反流",
            p: "血液",
            n: 4
        },
    ]
    // console.log(disease.length)
    let data1 = []
    let nodes = []
    let list = []
    for (let i = 0; i < data.length; i++) {
        list.push(data[i]["condition"][0])
    }
    var countedNames = list.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});
    // console.log(countedNames)
    let list2 = (Object.keys(countedNames))
    // console.log(list2)
    let rand = []
    for (let i = 0; i < disease.length; i++) {
        rand.push(disease[i].p)
    }
    // console.log(rand)
    var partion = rand.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});

    var list3 = (Object.keys(partion))
    var leg = []
    var colors = [
         '#c0a6a6','#9098b3', '#ac9a7d','#c0a6a6 ', '#90a0b5', '#b5c4b1', '#8696a7', '#96a48b', '#d8caaf', '#939391','#7b8b6f','#f0ebe5','#9ca8b8','#ddd1d1'
    ];
    for (let i = 0; i < list3.length; i++) {
        o = {
            name: list3[i],
            itemStyle: {
                normal: {
                    color: colors[i],

                }
            }
        }
        leg.push(o)
    }
    // console.log(list3)
    let flag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    for (let i = 0; i < list2.length; i++) {
        let c;
        for (let j = 0; j < disease.length; j++) {
            if (list2[i] == disease[j].name) {
                c = disease[j].n
                x = Math.random() * 100
                y = Math.random() * 100
            }
        }
        // console.log(c)
        if (countedNames[list2[i]] < 10) {
            countedNames[list2[i]] = countedNames[list2[i]] + 15
        } else if (countedNames[list2[i]] > 100) {
            countedNames[list2[i]] = countedNames[list2[i]] - 200
        }
        let o = {
            name: list2[i],
            label: '',
            draggable: true, //能否鼠标拖动
            category: c,
            symbolSize: countedNames[list2[i]],
            x: x,
            y: y,
            // label: {
            // 	normal: {
            // 		show: true, //控制非高亮时节点名称是否显示
            // 		position: 'right',
            // 		fontSize: 16,
            // 		color: 'black',
            // 	},
            // },
        }
        let o2 = {
            name: list2[i],
            icon: 'circle'
        }
        nodes.push(o)
        data1.push(o2)
    }
    // console.log(nodes)
    // console.log(data1)
    let links = []
    for (let i = 0; i < data.length; i++) {
        let o = {
            source: data[i]["condition"],
            target: data[i]["conclusion"],
            lineStyle: {
                normal: {
                    show: true,
                    width: data[i]["possibility"] * 5,
                    curveness: 0.4,
                    type: 'solid', //线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                    color: "source"
                },
            },
//			emphasis: {
//				focus: 'adjacency',
//
//				lineStyle: {
//					width: data[i]["possibility"] * 10
//				}
//			},
        }
        links.push(o)
    }

    let main = echarts.init(document.getElementById('force_map_view'))
    main.clear();
    option = {
        // backgroundColor:'#040f23',
        title: {
            text: '疾病关联图谱',
            x: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: "bold"
            }
        },
        //—— 悬浮框 ——
        tooltip: {
            trigger: 'item',
            formatter: function (x) {
                return x.data.label; //设置提示框的内容和格式 节点和边都显示name属性
            },
            textStyle: {
                color: "black"
            }
        },
        legend: [{
            orient: 'vertical',
            x: 'left',
//			y: '50px',
            itemWidth: 10,
            itemHeight: 10,
            data: leg,
            textStyle: {
                fontSize: 10,
                // color:'white'
            }
        }],
        toolbox: {
            show: true,
            itemSize: 10,
            // left:20,
            // itemGap: 30,
            bottom: 15,
            right: 15,
            feature: {
                myTool: {
                    show: true,
                    title: '清除',
                    icon: 'path d="M799.2 874.4c0 34.4-28 62.4-62.368 62.4H287.2a62.496 62.496 0 0 1-62.4-62.4V212h574.4v662.4zM349.6 100c0-7.2 5.6-12.8 12.8-12.8h300c7.2 0 12.768 5.6 12.768 12.8v37.6H349.6V100z m636.8 37.6H749.6V100c0-48-39.2-87.2-87.2-87.2h-300a87.392 87.392 0 0 0-87.2 87.2v37.6H37.6C16.8 137.6 0 154.4 0 175.2s16.8 37.6 37.6 37.6h112v661.6A137.6 137.6 0 0 0 287.2 1012h449.6a137.6 137.6 0 0 0 137.6-137.6V212h112c20.8 0 37.6-16.8 37.6-37.6s-16.8-36.8-37.6-36.8zM512 824c20.8 0 37.6-16.8 37.6-37.6v-400c0-20.8-16.768-37.6-37.6-37.6-20.8 0-37.6 16.8-37.6 37.6v400c0 20.8 16.8 37.6 37.6 37.6m-175.2 0c20.8 0 37.6-16.8 37.6-37.6v-400c0-20.8-16.8-37.6-37.6-37.6s-37.6 16.8-37.6 37.6v400c0.8 20.8 17.6 37.6 37.6 37.6m350.4 0c20.8 0 37.632-16.8 37.632-37.6v-400c0-20.8-16.8-37.6-37.632-37.6-20.768 0-37.6 16.8-37.6 37.6v400c0 20.8 16.8 37.6 37.6 37.6',                   // 清除知识图谱以及选择的疾病缓存数组
                    onclick: function () {

                        console.log("返回");
                        TRANSPORT_DATA["selected_disease"] = [];
                        if (echarts.getInstanceByDom(document.getElementById("knowledge_graph")) !== undefined) {
                            // console.log(echarts.getInstanceByDom(document.getElementById("word_cloud")));
                            echarts.getInstanceByDom(document.getElementById("knowledge_graph")).dispose();
                        }
                    }
                }
            }
        },

        //—— 其他设置 ——
        animationDurationUpdate: 150,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'circular', // 'circular' ,force
            roam: true, //鼠标缩放及平移
            // focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点、节点的边和邻接节点
            force: {
                // x: 'center',
                // y: '50px',
                edgeLength: 20,
                repulsion: 100
            },
            circular: {
                rotateLabel: true
            },
            label: {
                show: false,
                position: 'right',
                formatter: '{b}',
                textStyle: {
                    color: "black",
                    fontSize: 8
                }

            },
            itemStyle: {
                normal: {
                    borderColor: '#000',
                    borderWidth: 0.5,
                    shadowBlur: 100,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            edgeSymbol: ['none', 'arrow'], //箭头
            edgeSymbolSize: [0, 8],
            // edgeLabel: {
            // 	normal: {
            // 		show: false,
            // 		textStyle: {
            // 			fontSize: 12
            // 		},
            // 		formatter: "{c}"
            // 	},
            // 	emphasis: {
            // 		show: true,
            // 		textStyle: {
            // 			fontSize: 14 //边节点显示的字体大小
            // 		}
            // 	},
            // },
//			emphasis: {
//				focus: 'adjacency',
//				lineStyle: {
//					width: 3
//				}
//			},
            data: nodes,
            links: links,
            categories: leg,
        }]
    }; // 使用刚指定的配置项和数据显示图表。
    main.setOption(option);


    main.on("click", function (params) {
        console.log(TRANSPORT_DATA["selected_disease"]);
        if (TRANSPORT_DATA["selected_disease"].length < 5) {
            TRANSPORT_DATA["selected_disease"].push(params.name);
            console.log(TRANSPORT_DATA["selected_disease"]);
            redraw("/get_knowledge_info", "disease_knowledge");
        } else {
            alert("最多同时选择5种疾病对比")
        }
    });


    if (draw_type === "focus") {
        draw(TRANSPORT_DATA["disease"]);
    }

    function draw(str) {
        let index;

        list2.forEach(function (el, i) {
            if (el === str) {
                console.log(i)
                index = i;
            }
        })

        main.dispatchAction({
            type: 'focusNodeAdjacency',
            dataIndex: index
            // name:params.name
        })
    }
}
