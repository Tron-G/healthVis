/**
 * @description 疾病年龄分布柱状图
 */
function drawTowBar1(obj) { //改参数

    // console.log(obj);
    var TwoBar2 = echarts.init(document.getElementById("disease_bar_view"))
    TwoBar2.clear()
    /**
     * 照着一个案例改的
     * 增加下面的数值显示
     * */
    let list = (Object.keys(obj))
    // console.log(list.length)

    list.splice(9, 9);
    // console.log(list)
    let nums1 = []
    let nums2 = []
    for (let i = 0; i < list.length; i++) {
        // console.log(obj[list[i]])
        nums1.push(obj[list[i]][0])
        nums2.push(obj[list[i]][1])
    }
    // console.log(Math.max.apply(null, nums1))
    var num1 = Math.max.apply(null, nums1)
    var num2 = Math.max.apply(null, nums2)
    if (num1 >= num2) {
        var num = num1 + 10;
    } else {
        var num = num2 + 10;
    }
    var myData = ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91以上']
    var lineData = []
    for (var i = 0; i < 10; i++) {
        lineData.push(num)
    }
    var lastYearData = {
        1: nums1
    }
    var thisYearData = {
        1: nums2
    }
    var timeLineData = [1]
    var background = "#0e2147"; //背景
    let colors = [{
        borderColor: "rgba(227,156,187,1)",
        start: "rgba(227,156,187,0.8)",
        end: "rgba(227,156,187,0.4)"
    },
        {
            borderColor: "rgba(133,193,234,1)",
            start: "rgba(133,193,234,0.8)",
            end: "rgba(133,193,234,0.4)"
        },
    ];
    let option = {
        /*  grid: {
            top: "20%",
            bottom: "12%"
          },*/
        // backgroundColor:"#0f375f",
        title: {
            text: obj['disease_name'],
            left: "center",
            top: "1%",
            textStyle: {
                fontSize: 15
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["男性", "女性"],
            top: "2%",
            right: '5%',
            textStyle: {
                color: "rgba(0,0,0,0.6)",
                fontSize: 16
            }
        },
        toolbox: {
            show: true,
            itemSize: 10,
            // left:20,
            // itemGap: 30,
            right: 10,
            feature: {
                myTool: {
                    show: true,
                    title: '返回',
                    icon: 'path://M653.582491 221.106717L353.02883 521.660377l300.553661 300.553661L598.943396 876.872453 243.731321 521.660377 598.943396 166.448302z',

                    onclick: function () {
                        // console.log("返回")
                        redraw("/get_month_data", "disease_bar_back");
                        //							drawTowbar2(obj2, obj) //改参数
                    }
                }
            }
        },
        xAxis: {
            data: list,
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#494949',
                    width: 2
                }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                rotate: -45,
                textStyle: {
                    color: "rgba(0,0,0,0.6)", //X轴文字颜色
                    fontSize: 10,

                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"]
                }
            }
        },
        yAxis: [{
            type: "value",
            /*name: "亿元",*/
            nameTextStyle: {
                color: "#ebf8ac",
                fontSize: 16
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3a3a3a',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#2b2b2b',
                    fontSize: 16
                }
            },

        },
            {
                type: "value",
                /*name: "同比",*/
                nameTextStyle: {
                    color: "#ebf8ac",
                    fontSize: 16
                },
                position: "right",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 16
                    }
                }
            }
        ],
        series: [{
            name: "男性",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: "#9ca8b8"
                }
            },
            data: nums1
        },
            {
                name: "女性",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#ddd1d1'
                    }
                },
                data: nums2
            }
        ]
    };

    TwoBar2.setOption(option)

}

/**
 * @description 月份疾病性别分布柱状图
 */
function drawTowbar2(obj) {
    //改参数

    // console.log(obj);
    var TwoBar = echarts.init(document.getElementById("disease_bar_view"))
    TwoBar.clear()
    list = (Object.keys(obj))
    // list.splice(0,1);
    // console.log(list)
    let nums1 = []
    let nums2 = []
    for (let i = 0; i < list.length; i++) {
        // console.log(obj[list[i]])
        nums1.push(obj[list[i]][0])
        nums2.push(obj[list[i]][1])
    }
    // console.log(nums1)
    for (let i = 0; i < nums1.length - 1; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            if ((nums1[i] + nums2[i]) < (nums1[j] + nums2[j])) {
                t = nums1[i]
                q = nums2[i]
                s = list[i]
                nums1[i] = nums1[j]
                nums2[i] = nums2[j]
                list[i] = list[j]
                nums1[j] = t
                nums2[j] = q
                list[j] = s
            }
        }
    }
    // console.log(nums1)
    var num1 = Math.max.apply(null, nums1)
    var num2 = Math.max.apply(null, nums2)
    if (num1 >= num2) {
        var num = num1 + 5;
    } else {
        var num = num2 + 5;
    }
    var myData = ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91以上']
    var lineData = []
    for (var i = 0; i < 20; i++) {
        lineData.push(num)
    }
    var lastYearData = {
        1: nums1
    }
    var thisYearData = {
        1: nums2
    }
    var timeLineData = [1]
    var background = "#0e2147"; //背景
    let colors = [{
        borderColor: "rgba(227,156,187,1)",
        start: "rgba(227,156,187,0.8)",
        end: "rgba(227,156,187,0.4)"
    },
        {
            borderColor: "rgba(133,193,234,1)",
            start: "rgba(133,193,234,0.8)",
            end: "rgba(133,193,234,0.4)"
        },
    ];

    var month;
    if (TRANSPORT_DATA["month"] == 0) {
        month = "全年"
    }
    else {
        month = TRANSPORT_DATA["month"] + "月"
    }
    let option = {
        /*  grid: {
            top: "20%",
            bottom: "12%"
          },*/
        // backgroundColor:"#0f375f",
        title: {
            text: month + "高发疾病数据",
            top: "1%",
            left: "center",
            textStyle: {
                fontSize: 15
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true
                }
            }
        },
        legend: {
            data: ["男性", "女性"],
            top: "2%",
            right: '10',
            textStyle: {
                color: "rgba(0,0,0,0.6)",
                fontSize: 16
            }
        },
        xAxis: {
            data: list,
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#282828',
                    width: 2
                }
            },
            axisTick: {
                show: true //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                rotate: -45,
                textStyle: {
                    color: "rgba(0,0,0,0.6)", //X轴文字颜色
                    fontSize: 10,

                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0)"]
                }
            }
        },
        yAxis: [{
            type: "value",
            /*name: "亿元",*/
            nameTextStyle: {
                color: "#ebf8ac",
                fontSize: 16
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2b2b2b',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#2b2b2b',
                    fontSize: 16
                }
            },

        },
            {
                type: "value",
                /*name: "同比",*/
                nameTextStyle: {
                    color: "#ebf8ac",
                    fontSize: 16
                },
                position: "right",
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "rgba(250,250,250,0.6)",
                        fontSize: 16
                    }
                }
            }
        ],
        series: [{
            name: "男性",
            type: "bar",
            barWidth: 15,
            itemStyle: {
                normal: {
                   color: "#9ca8b8"
                }
            },
            data: nums1
        },
            {
                name: "女性",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: '#ddd1d1'
                    }
                },
                data: nums2
            }
        ]
    };
    TwoBar.setOption(option)
    TwoBar.on("click", function (params) {
        // console.log("---->", params.name);
        TRANSPORT_DATA["disease"] = params.name;
        TRANSPORT_DATA["id"] = "";
        // console.log(TRANSPORT_DATA);
        redraw("/search_disease", "search_disease");
        TRANSPORT_DATA["disease_info"] = params.name;
        redraw("/get_disease_info", "disease_detail");

        // drawTowBar1(params.name, o) //改参数
    })
}