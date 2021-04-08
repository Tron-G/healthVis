/**
 * @description 绘制小贝图
 */
function drawXiaobei() {
    let main = echarts.init(document.getElementById('xiaobei'))
    var option = {
        title: [{
            text: "2019日照市空气质量与降雨",
            textStyle: {
                fontSize: 16
            },
            left: "center",
        },
            {
                text: '一月',
                textStyle: {
                    fontSize: 10
                },
                top: "19%",
                left: '14.5%',
                textAlign: 'center'
            }, {
                text: '二月',
                textStyle: {
                    fontSize: 10
                },
                top: "19%",
                left: '39.5%',
                textAlign: 'center'
            }, {
                text: '三月',
                textStyle: {
                    fontSize: 10
                },
                top: "19%",
                left: '64.5%',
                textAlign: 'center'
            }, {
                text: '四月',
                textStyle: {
                    fontSize: 10
                },
                top: "19%",
                left: '89.5%',
                textAlign: 'center'
            },
            {
                text: '五月',
                textStyle: {
                    fontSize: 10
                },
                top: "49%",
                left: '14.5%',
                textAlign: 'center'
            }, {
                text: '六月',
                textStyle: {
                    fontSize: 10
                },
                top: "49%",
                left: '39.5%',
                textAlign: 'center'
            }, {
                text: '七月',
                textStyle: {
                    fontSize: 10
                },
                top: "49%",
                left: '64.5%',
                textAlign: 'center'
            }, {
                text: '八月',
                textStyle: {
                    fontSize: 10
                },
                top: "49%",
                left: '89.5%',
                textAlign: 'center'
            }, {
                text: '九月',
                textStyle: {
                    fontSize: 10
                },
                top: "79%",
                left: '14.5%',
                textAlign: 'center'
            }, {
                text: '十月',
                textStyle: {
                    fontSize: 10
                },
                top: "79%",
                left: '39.5%',
                textAlign: 'center'
            }, {
                text: '十一月',
                textStyle: {
                    fontSize: 10
                },
                top: "79%",
                left: '64.5%',
                textAlign: 'center'
            }, {
                text: '十二月',
                textStyle: {
                    fontSize: 10
                },
                top: "79%",
                left: '89.5%',
                textAlign: 'center'
            }
        ],
        color: ['#f6d54a', '#58FAAC', '#45dbf7', '#4777f5', '#5045f6', '#ad46f3', '#f845f1'],
        // legend: {},
        // tooltip: {},
        tooltip: {},
        dataset: {
            source: [
                ['month', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                ['优', 0, 5, 4, 8, 5, 8, 8, 22, 14, 9, 8, 6],
                ['良', 13, 9, 18, 16, 22, 20, 19, 8, 17, 13, 17, 15],
                ['轻度', 11, 7, 8, 8, 4, 4, 3, 0, 0, 6, 5, 6],
                ['中度', 3, 5, 1, 0, 0, 0, 0, 0, 0, 2, 1, 2],
                ['重度', 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                ['严重', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        grid: [{
            top: "30%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '8%',
            containLabel: true
        }, {
            top: "30%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '35%',
            containLabel: true
        }, {
            top: "30%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '59%',
            containLabel: true
        }, {
            top: "30%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '85%',
            containLabel: true
        }, {
            top: "60%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '8%',
            containLabel: true
        }, {
            top: "60%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '35%',
            containLabel: true
        }, {
            top: "60%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '59%',
            containLabel: true
        }, {
            top: "60%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '85%',
            containLabel: true
        }, {
            top: "90%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '8%',
            containLabel: true
        }, {
            top: "90%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '35%',
            containLabel: true
        }, {
            top: "90%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '59%',
            containLabel: true
        }, {
            top: "90%",
            width: '10%',
            height: "5%",
            bottom: '45%',
            left: '85%',
            containLabel: true
        }],
        xAxis: [{
            type: 'value',
            show: false,
            max: 218
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
            {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 1,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 2,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 3,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 4,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 5,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 6,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 7,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 8,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 9,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 10,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }, {
                type: 'value',
                show: false,
                max: 218,
                gridIndex: 11,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
        ],
        yAxis: [{
            type: 'category',
            // show: false,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 1,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 2,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 3,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 4,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 5,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 6,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 7,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 8,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 9,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 10,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }, {
            type: 'category',
            // show: false,
            gridIndex: 11,
            data: ['降雨'],
            axisTick: { //坐标轴刻度相关设置。
                show: false
            },
            axisLine: { //坐标轴轴线相关设置。
                show: false
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ABABBB'
                },
                fontSize: 14
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false,

            }
        }],

        series: [{
            type: 'pie',
            // roseType: 'area',
            name: "1",
            radius: ['5%', '10%'],
            center: ['15%', '20%'],
            itemStyle: {
                normal: {
                    // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                    //     offset: 0,
                    //     color: '#ef29b1'
                    // }, {
                    //     offset: 1,
                    //     color: '#fd7225'
                    // }]),
                    borderWidth: 0.5,
                    borderColor: '#fff',
                    shadowColor: '#19181d',
                    shadowBlur: 3,
                }
            },
            // // label: false,,
            // No encode specified, by default, it is '2012'.
        }, {
            data: [13],
            type: 'bar',
            name: "1",
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(0, 0, 0, 0.1)'
            }
        }, {
            type: 'pie',
            name: "2",
            radius: ['5%', '10%'],
            center: ['40%', '20%'],
            encode: {
                itemName: 'month',
                value: '2'
            },
            itemStyle: {
                normal: {
                    // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                    //     offset: 0,
                    //     color: '#ef29b1'
                    // }, {
                    //     offset: 1,
                    //     color: '#fd7225'
                    // }]),
                    borderWidth: 0.5,
                    borderColor: '#fff',
                    shadowColor: '#19181d',
                    shadowBlur: 3,
                }
            },
            // label: false,,
        },
            {
                name: "2",
                data: [17],
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                type: 'pie',
                name: "3",
                radius: ['5%', '10%'],
                center: ['65%', '20%'],
                encode: {
                    itemName: 'month',
                    value: '3'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "3",
                data: [25],
                type: 'bar',
                xAxisIndex: 2,
                yAxisIndex: 2,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "4",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['90%', '20%'],
                encode: {
                    itemName: 'month',
                    value: '4'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "4",
                data: [45],
                type: 'bar',
                xAxisIndex: 3,
                yAxisIndex: 3,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "5",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['15%', '50%'],
                encode: {
                    itemName: 'month',
                    value: '5'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "5",
                data: [62],
                type: 'bar',
                xAxisIndex: 4,
                yAxisIndex: 4,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "6",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['40%', '50%'],
                encode: {
                    itemName: 'month',
                    value: '6'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "6",
                data: [106],
                type: 'bar',
                xAxisIndex: 5,
                yAxisIndex: 5,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "7",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['65%', '50%'],
                encode: {
                    itemName: 'month',
                    value: '7'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "7",
                data: [218],
                type: 'bar',
                xAxisIndex: 6,
                yAxisIndex: 6,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "8",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['90%', '50%'],
                encode: {
                    itemName: 'month',
                    value: '8'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "8",
                data: [178],
                type: 'bar',
                xAxisIndex: 7,
                yAxisIndex: 7,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "9",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['15%', '80%'],
                encode: {
                    itemName: 'month',
                    value: '9'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "9",
                data: [98],
                type: 'bar',
                xAxisIndex: 8,
                yAxisIndex: 8,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "10",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['40%', '80%'],
                encode: {
                    itemName: 'month',
                    value: '10'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "10",
                data: [45],
                type: 'bar',
                xAxisIndex: 9,
                yAxisIndex: 9,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "11",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['65%', '80%'],
                encode: {
                    itemName: 'month',
                    value: '11'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,
            }, {
                name: "11",
                data: [29],
                type: 'bar',
                xAxisIndex: 10,
                yAxisIndex: 10,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }, {
                name: "12",
                type: 'pie',
                radius: ['5%', '10%'],
                center: ['90%', '80%'],
                encode: {
                    itemName: 'month',
                    value: '12'
                },
                itemStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        //     offset: 0,
                        //     color: '#ef29b1'
                        // }, {
                        //     offset: 1,
                        //     color: '#fd7225'
                        // }]),
                        borderWidth: 0.5,
                        borderColor: '#fff',
                        shadowColor: '#19181d',
                        shadowBlur: 3,
                    }
                },
                // label: false,,

            }, {
                name: "12",
                data: [13],
                type: 'bar',
                xAxisIndex: 11,
                yAxisIndex: 11,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
        ]
    };
    main.setOption(option)

    main.on('click', params => {
        console.log(params.seriesName)
        drawScatter(params.seriesName)
    })

}


/**
 * @description 绘制日历热力图
 */
function heatmap() {
    var dom = document.getElementById("heatmap");
    console.log(dom)
    var myChart = echarts.init(dom);
    var app = {};

    var option;

    datalist = [
        ["2019-01-01", 103],
        ["2019-01-02", 165],
        ["2019-01-03", 219],
        ["2019-01-04", 186],
        ["2019-01-05", 87],
        ["2019-01-06", 81],
        ["2019-01-07", 161],
        ["2019-01-08", 107],
        ["2019-01-09", 56],
        ["2019-01-10", 75],
        ["2019-01-11", 128],
        ["2019-01-12", 210],
        ["2019-01-13", 273],
        ["2019-01-14", 271],
        ["2019-01-15", 142],
        ["2019-01-16", 67],
        ["2019-01-17", 101],
        ["2019-01-18", 141],
        ["2019-01-19", 138],
        ["2019-01-20", 60],
        ["2019-01-21", 93],
        ["2019-01-22", 114],
        ["2019-01-23", 121],
        ["2019-01-24", 142],
        ["2019-01-25", 74],
        ["2019-01-26", 61],
        ["2019-01-27", 90],
        ["2019-01-28", 80],
        ["2019-01-29", 73],
        ["2019-01-30", 119],
        ["2019-01-31", 68],
        ["2019-02-01", 111],
        ["2019-02-02", 132],
        ["2019-02-03", 142],
        ["2019-02-04", 133],
        ["2019-02-05", 149],
        ["2019-02-06", 147],
        ["2019-02-07", 58],
        ["2019-02-08", 39],
        ["2019-02-09", 56],
        ["2019-02-10", 36],
        ["2019-02-11", 124],
        ["2019-02-12", 113],
        ["2019-02-13", 93],
        ["2019-02-14", 51],
        ["2019-02-15", 80],
        ["2019-02-16", 37],
        ["2019-02-17", 51],
        ["2019-02-18", 50],
        ["2019-02-19", 87],
        ["2019-02-20", 234],
        ["2019-02-21", 185],
        ["2019-02-22", 196],
        ["2019-02-23", 163],
        ["2019-02-24", 213],
        ["2019-02-25", 165],
        ["2019-02-26", 57],
        ["2019-02-27", 47],
        ["2019-02-28", 98],
        ["2019-03-01", 170],
        ["2019-03-02", 186],
        ["2019-03-03", 140],
        ["2019-03-04", 136],
        ["2019-03-05", 127],
        ["2019-03-06", 134],
        ["2019-03-07", 66],
        ["2019-03-08", 80],
        ["2019-03-09", 42],
        ["2019-03-10", 60],
        ["2019-03-11", 114],
        ["2019-03-12", 80],
        ["2019-03-13", 68],
        ["2019-03-14", 90],
        ["2019-03-15", 66],
        ["2019-03-16", 76],
        ["2019-03-17", 64],
        ["2019-03-18", 76],
        ["2019-03-19", 90],
        ["2019-03-20", 48],
        ["2019-03-21", 57],
        ["2019-03-22", 43],
        ["2019-03-23", 56],
        ["2019-03-24", 79],
        ["2019-03-25", 101],
        ["2019-03-26", 106],
        ["2019-03-27", 101],
        ["2019-03-28", 66],
        ["2019-03-29", 42],
        ["2019-03-30", 53],
        ["2019-03-31", 59],
        ["2019-04-01", 78],
        ["2019-04-02", 46],
        ["2019-04-03", 47],
        ["2019-04-04", 82],
        ["2019-04-05", 140],
        ["2019-04-06", 150],
        ["2019-04-07", 73],
        ["2019-04-08", 54],
        ["2019-04-09", 44],
        ["2019-04-10", 57],
        ["2019-04-11", 96],
        ["2019-04-12", 106],
        ["2019-04-13", 115],
        ["2019-04-14", 82],
        ["2019-04-15", 94],
        ["2019-04-16", 68],
        ["2019-04-17", 99],
        ["2019-04-18", 128],
        ["2019-04-19", 72],
        ["2019-04-20", 54],
        ["2019-04-21", 57],
        ["2019-04-22", 41],
        ["2019-04-23", 38],
        ["2019-04-24", 37],
        ["2019-04-25", 52],
        ["2019-04-26", 53],
        ["2019-04-27", 53],
        ["2019-04-28", 45],
        ["2019-04-29", 41],
        ["2019-04-30", 103],
        ["2019-05-01", 74],
        ["2019-05-02", 78],
        ["2019-05-03", 88],
        ["2019-05-04", 81],
        ["2019-05-05", 92],
        ["2019-05-06", 63],
        ["2019-05-07", 75],
        ["2019-05-08", 80],
        ["2019-05-09", 90],
        ["2019-05-10", 97],
        ["2019-05-11", 70],
        ["2019-05-12", 91],
        ["2019-05-13", 143],
        ["2019-05-14", 65],
        ["2019-05-15", 44],
        ["2019-05-16", 45],
        ["2019-05-17", 46],
        ["2019-05-18", 61],
        ["2019-05-19", 60],
        ["2019-05-20", 70],
        ["2019-05-21", 93],
        ["2019-05-22", 100],
        ["2019-05-23", 117],
        ["2019-05-24", 114],
        ["2019-05-25", 89],
        ["2019-05-26", 49],
        ["2019-05-27", 48],
        ["2019-05-28", 66],
        ["2019-05-29", 76],
        ["2019-05-30", 68],
        ["2019-05-31", 93],
        ["2019-06-01", 130],
        ["2019-06-02", 107],
        ["2019-06-03", 97],
        ["2019-06-04", 86],
        ["2019-06-05", 51],
        ["2019-06-06", 51],
        ["2019-06-07", 72],
        ["2019-06-08", 64],
        ["2019-06-09", 61],
        ["2019-06-10", 71],
        ["2019-06-11", 45],
        ["2019-06-12", 53],
        ["2019-06-13", 45],
        ["2019-06-14", 67],
        ["2019-06-15", 40],
        ["2019-06-16", 59],
        ["2019-06-17", 40],
        ["2019-06-18", 53],
        ["2019-06-19", 33],
        ["2019-06-20", 44],
        ["2019-06-21", 61],
        ["2019-06-22", 71],
        ["2019-06-23", 45],
        ["2019-06-24", 62],
        ["2019-06-25", 53],
        ["2019-06-26", 54],
        ["2019-06-27", 45],
        ["2019-06-28", 62],
        ["2019-06-29", 62],
        ["2019-06-30", 108],
        ["2019-07-01", 80],
        ["2019-07-02", 76],
        ["2019-07-03", 68],
        ["2019-07-04", 92],
        ["2019-07-05", 108],
        ["2019-07-06", 56],
        ["2019-07-07", 51],
        ["2019-07-08", 92],
        ["2019-07-09", 108],
        ["2019-07-10", 56],
        ["2019-07-11", 51],
        ["2019-07-12", 84],
        ["2019-07-13", 87],
        ["2019-07-14", 123],
        ["2019-07-15", 93],
        ["2019-07-16", 88],
        ["2019-07-17", 30],
        ["2019-07-18", 25],
        ["2019-07-19", 18],
        ["2019-07-20", 48],
        ["2019-07-21", 68],
        ["2019-07-22", 52],
        ["2019-07-23", 37],
        ["2019-07-24", 54],
        ["2019-07-25", 49],
        ["2019-07-26", 58],
        ["2019-07-27", 48],
        ["2019-07-28", 68],
        ["2019-07-29", 52],
        ["2019-07-30", 37],
        ["2019-07-31", 52],
        ["2019-08-01", 26],
        ["2019-08-02", 35],
        ["2019-08-03", 38],
        ["2019-08-04", 29],
        ["2019-08-05", 31],
        ["2019-08-06", 26],
        ["2019-08-07", 35],
        ["2019-08-08", 38],
        ["2019-08-09", 29],
        ["2019-08-10", 31],
        ["2019-08-11", 28],
        ["2019-08-12", 26],
        ["2019-08-13", 35],
        ["2019-08-14", 38],
        ["2019-08-15", 29],
        ["2019-08-16", 31],
        ["2019-08-17", 26],
        ["2019-08-18", 35],
        ["2019-08-19", 38],
        ["2019-08-20", 29],
        ["2019-08-21", 47],
        ["2019-08-22", 62],
        ["2019-08-23", 66],
        ["2019-08-24", 76],
        ["2019-08-25", 67],
        ["2019-08-26", 36],
        ["2019-08-27", 41],
        ["2019-08-28", 87],
        ["2019-08-29", 62],
        ["2019-08-30", 66],
        ["2019-08-31", 76],
        ["2019-09-01", 29],
        ["2019-09-02", 33],
        ["2019-09-03", 34],
        ["2019-09-04", 39],
        ["2019-09-05", 78],
        ["2019-09-06", 68],
        ["2019-09-07", 65],
        ["2019-09-08", 99],
        ["2019-09-09", 64],
        ["2019-09-10", 57],
        ["2019-09-11", 50],
        ["2019-09-12", 37],
        ["2019-09-13", 43],
        ["2019-09-14", 42],
        ["2019-09-15", 32],
        ["2019-09-16", 68],
        ["2019-09-17", 55],
        ["2019-09-18", 61],
        ["2019-09-19", 27],
        ["2019-09-20", 46],
        ["2019-09-21", 52],
        ["2019-09-22", 55],
        ["2019-09-23", 49],
        ["2019-09-24", 86],
        ["2019-09-25", 100],
        ["2019-09-26", 43],
        ["2019-09-27", 41],
        ["2019-09-28", 56],
        ["2019-09-29", 72],
        ["2019-09-30", 60],
        ["2019-10-01", 63],
        ["2019-10-02", 69],
        ["2019-10-03", 66],
        ["2019-10-04", 72],
        ["2019-10-05", 30],
        ["2019-10-06", 34],
        ["2019-10-07", 36],
        ["2019-10-08", 84],
        ["2019-10-09", 68],
        ["2019-10-10", 36],
        ["2019-10-11", 39],
        ["2019-10-12", 72],
        ["2019-10-13", 68],
        ["2019-10-14", 39],
        ["2019-10-15", 39],
        ["2019-10-16", 49],
        ["2019-10-17", 69],
        ["2019-10-18", 106],
        ["2019-10-19", 112],
        ["2019-10-20", 100],
        ["2019-10-21", 99],
        ["2019-10-22", 122],
        ["2019-10-23", 115],
        ["2019-10-24", 107],
        ["2019-10-25", 64],
        ["2019-10-26", 50],
        ["2019-10-27", 88],
        ["2019-10-28", 143],
        ["2019-10-29", 88],
        ["2019-10-30", 164],
        ["2019-10-31", 154],
        ["2019-11-01", 97],
        ["2019-11-02", 57],
        ["2019-11-03", 43],
        ["2019-11-04", 44],
        ["2019-11-05", 77],
        ["2019-11-06", 115],
        ["2019-11-07", 91],
        ["2019-11-08", 46],
        ["2019-11-09", 142],
        ["2019-11-10", 118],
        ["2019-11-11", 84],
        ["2019-11-12", 82],
        ["2019-11-13", 90],
        ["2019-11-14", 77],
        ["2019-11-15", 86],
        ["2019-11-16", 85],
        ["2019-11-17", 50],
        ["2019-11-18", 101],
        ["2019-11-19", 97],
        ["2019-11-20", 107],
        ["2019-11-21", 59],
        ["2019-11-22", 39],
        ["2019-11-23", 54],
        ["2019-11-24", 55],
        ["2019-11-25", 39],
        ["2019-11-26", 60],
        ["2019-11-27", 72],
        ["2019-11-28", 32],
        ["2019-11-29", 49],
        ["2019-11-30", 56],
        ["2019-12-01", 81],
        ["2019-12-02", 47],
        ["2019-12-03", 77],
        ["2019-12-04", 89],
        ["2019-12-05", 60],
        ["2019-12-06", 47],
        ["2019-12-07", 121],
        ["2019-12-08", 156],
        ["2019-12-09", 207],
        ["2019-12-10", 243],
        ["2019-12-11", 60],
        ["2019-12-12", 55],
        ["2019-12-13", 89],
        ["2019-12-14", 53],
        ["2019-12-15", 38],
        ["2019-12-16", 37],
        ["2019-12-17", 84],
        ["2019-12-18", 31],
        ["2019-12-19", 52],
        ["2019-12-20", 90],
        ["2019-12-21", 131],
        ["2019-12-22", 108],
        ["2019-12-23", 151],
        ["2019-12-24", 60],
        ["2019-12-25", 78],
        ["2019-12-26", 71],
        ["2019-12-27", 95],
        ["2019-12-28", 118],
        ["2019-12-29", 144],
        ["2019-12-30", 106],
        ["2019-12-31", 50]
    ]
    important = [
        ["2019-01-19", 186],
        ["2019-02-19", 223],
        ["2019-10-19", 107],
        ["2019-07-19", 90],
        ["2019-06-19", 77],
        ["2019-05-19", 54],
        ["2019-09-19", 51],
        ["2019-08-19", 33],
        ["2019-11-19", 24],
        ["2019-11-19", 96],
        ["2019-03-19", 59],
        ["2019-04-19", 51],
        ["2019-12-19", 131]
    ];

    option = {
        title: {
            top: 10,
            left: 'center',
            text: '2019年日照市AQI指数与呼吸道疾病的关系'
        },
        tooltip: {},
        visualMap: {
            min: 0,
            max: 400,
            // inRange: {
            // 	color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196027']
            // },
            pieces: [{
                gt: 0,
                lte: 50,
                color: 'rgb(92,250,99)'
            }, {
                gt: 50,
                lte: 100,
                color: 'rgb(252,243,106)'
            }, {
                gt: 100,
                lte: 150,
                color: 'rgb(251,152,87)'
            }, {
                gt: 150,
                lte: 200,
                color: 'rgb(250,67,79)'
            }, {
                gt: 200,
                lte: 300,
                color: 'rgb(197,81,208)'
            }, {
                gt: 300,
                color: 'rgb(165,42,42)'
            }],
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 65
        },
        calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: ['auto', 25],
            range: '2019',
            itemStyle: {
                borderWidth: 0.5
            },
            yearLabel: {
                show: false
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'calendar',
            //data: getVirtulData(2019),
            data: datalist,

        },
            {
                name: 'Top 10',
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                data: important,
                symbolSize: function (val) {
                    return val[1] / 5;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    let datalist2 = {
        "name": {
            "02": ["肺结节", "肺气肿", "肺纤维灶", "双肺肺气肿", "双肺纤维灶", "右肺中叶钙化灶", "左肺上叶结节"],
            "05": ["鼻甲肥大", "鼻炎", "鼻中隔偏曲", "肺大泡", "肺钙化灶", "肺结节", "肺气囊肿", "肺气肿", "肺纤维灶", "过敏性鼻炎", "慢性咽喉炎", "双肺结节",
                "双肺气肿", "双肺炎症", "细支气管炎", "咽炎", "右肺上叶钙化灶", "右肺上叶结核", "右肺上叶结核部分硬结钙化", "右肺上叶结核硬结钙化", "支气管炎",
                "左肺上叶钙化灶", "左肺下叶结节"
            ],
            "06": ["鼻甲肥大", "鼻炎", "鼻中隔偏曲", "肺大泡", "肺钙化灶", "肺结节", "肺气囊肿", "肺气肿", "肺纤维灶", "肺型P波", "慢性咽喉炎", "双肺肺气肿",
                "双肺气肿", "双肺纤维灶", "细支气管炎", "咽炎", "右肺结节影", "右肺上叶钙化灶", "右肺上叶结核", "右肺上叶小结节", "右肺上叶支气管扩张、感染",
                "右肺下叶结节", "右肺中叶纤维灶", "右下肺钙化灶", "支气管炎", "左肺上叶结节", "左肺下叶钙化灶", "左肺下叶结节"
            ],
            "07": ["鼻甲肥大", "鼻炎", "鼻中隔偏曲", "肺大泡", "肺钙化灶", "肺结核病", "肺结节", "肺气囊肿", "肺气肿", "肺纤维灶", "肺型P波", "过敏性鼻炎",
                "急性咽喉炎", "慢性咽喉炎", "双肺肺气肿", "双肺上叶微结节", "双肺纤维灶", "细支气管炎", "咽炎", "右肺上叶钙化灶", "右肺上叶尖段结节", "右肺上叶结节",
                "右肺下叶钙化灶", "右肺下叶结节", "右肺中叶纤维灶", "支气管炎", "左肺结节", "左肺下叶斑片状高密度影", "左下肺野圆形高密度影"
            ],
            "08": ["肺大泡", "肺钙化灶", "肺结节", "肺气肿", "肺纹理增强", "肺纤维灶", "考虑右肺上叶炎症", "两肺多发陈旧病变", "两肺纹理增多", "双肺多发结节灶",
                "双肺多发小类结节影，炎性改变", "双肺肺大泡", "双肺结节", "双肺散在点状钙化", "双肺上叶结节", "双肺下叶结节", "双肺纤维灶", "咽炎", "右肺上叶结节",
                "右肺下叶背段胸膜下小斑片影", "右肺下叶点状钙化灶", "右肺下叶肺大泡", "右肺中叶及下叶微小结节灶", "右肺中叶索条", "左肺上叶尖段小结节", "左肺上叶散在条索影",
                "左肺下叶散在小结节", "左肺下叶索条灶"
            ],
            "09": ["鼻甲肥大", "鼻炎", "肺大泡", "肺大疱", "肺钙化灶", "肺结核病", "肺结节", "肺气肿", "肺纹理增强", "肺纤维灶", "过敏性鼻炎", "两肺多发索条灶",
                "两肺纹理增多", "两肺下叶胸膜下轻度间质改变", "慢性支气管炎", "双肺间质性改变", "双肺气肿", "双肺散发索条及少许慢性炎性改变", "双肺散在条索影", "双肺炎性改变",
                "咽炎", "右肺上叶钙化灶", "右肺上中多发结节灶", "右肺下叶基底段钙化灶", "右肺下叶基底段类结节", "右肺下叶磨玻璃结节", "右肺中下叶结节", "右上肺炎症",
                "支气管炎", "左肺上叶钙化灶", "左肺上叶慢性炎性改变", "左肺上叶模糊小结节", "左肺上叶前段肺大泡", "左肺上叶舌段及右肺下叶内基底段胸膜下索条",
                "左肺上叶舌段异常密度影", "左肺下叶结节", "左肺胸膜下钙化灶"
            ],
            "10": ["鼻窦炎", "鼻甲肥大", "鼻炎", "鼻中隔偏曲", "肺大泡", "肺钙化灶", "肺结节", "肺气肿", "肺纹理增强", "肺纤维灶", "副鼻窦炎", "过敏性鼻炎",
                "两肺纹理增多", "慢性鼻炎", "双肺背侧间质性改变", "双肺多发磨玻璃结节灶", "双肺肺气肿", "双肺慢性炎症", "双肺内散在炎症，部分慢性", "双肺散在条索影",
                "双肺上叶、左肺下叶基底段散在实性小结节", "双肺上叶多发结节", "双肺纹理略增多", "双肺纤维灶", "细支气管炎", "咽炎", "右肺门区不规则软组织密度灶",
                "右肺上叶陈旧性病变", "右肺上叶钙化灶", "右肺上叶含气囊肿", "右肺上叶尖段钙化灶", "右肺上叶结节", "右肺上叶胸膜下肺气肿", "右肺上叶胸膜下结节灶", "右肺下叶结节",
                "右肺下叶胸膜局限性增厚", "右肺中叶钙化灶", "右肺中叶局限性支扩并炎性改变", "右肺中叶慢性炎症", "右肺中叶磨玻璃密度灶", "右肺中叶条索影", "右肺中叶纤维灶",
                "右肺中叶胸膜下小结节", "支气管炎", "左肺结节", "左肺上叶陈旧性病变", "左肺上叶钙化灶", "左肺上叶及右肺中叶少许索条灶", "左肺上叶局限性肺气肿",
                "左肺上叶磨玻璃结节", "左肺上叶少许慢性炎症", "左肺上叶舌段小结节", "左肺下叶钙化灶", "左肺下叶结节", "左肺下叶少许炎性改变", "左肺下叶小斑片灶"
            ],
            "11": ["鼻窦炎", "鼻息肉", "鼻炎", "肺大泡", "肺结节", "肺气肿", "肺纤维灶", "副鼻窦炎", "过敏性鼻炎", "两肺纹理增多", "双肺间质性改变",
                "双肺间质性改变；双肺散在索条", "双肺局限性气肿、肺大泡", "双肺上叶微结节", "双肺纹理略增多", "双肺下叶少许慢性炎性改变", "双肺下叶纤维灶", "咽炎",
                "右肺上叶尖段结节", "右肺下叶结节", "右肺下叶支气管扩张并感染", "右肺中叶少许慢性炎症", "右肺中叶水平裂旁微小结节灶", "左肺上叶尖段小结节", "左肺上叶结节",
                "左肺上叶磨玻璃结节"
            ]
        },
        "data": {
            "02": [
                [5, 0, 1],
                [6, 1, 1],
                [5, 2, 1],
                [6, 3, 1],
                [5, 4, 1],
                [6, 5, 1],
                [6, 6, 1]
            ],
            "05": [
                [4, 15, 16],
                [5, 15, 8],
                [4, 0, 4],
                [5, 6, 4],
                [3, 15, 4],
                [5, 0, 3],
                [5, 7, 3],
                [4, 10, 3],
                [5, 12, 3],
                [5, 14, 3],
                [5, 20, 3],
                [5, 2, 2],
                [5, 3, 2],
                [6, 4, 2],
                [6, 15, 2],
                [6, 22, 2],
                [3, 0, 1],
                [6, 1, 1],
                [4, 1, 1],
                [4, 2, 1],
                [3, 2, 1],
                [3, 3, 1],
                [4, 3, 1],
                [7, 3, 1],
                [5, 5, 1],
                [4, 6, 1],
                [7, 6, 1],
                [6, 6, 1],
                [4, 7, 1],
                [7, 7, 1],
                [6, 8, 1],
                [4, 8, 1],
                [6, 9, 1],
                [4, 9, 1],
                [5, 11, 1],
                [7, 12, 1],
                [5, 13, 1],
                [6, 14, 1],
                [7, 15, 1],
                [3, 16, 1],
                [5, 16, 1],
                [4, 17, 1],
                [5, 17, 1],
                [5, 18, 1],
                [4, 19, 1],
                [6, 20, 1],
                [7, 21, 1]
            ],
            "06": [
                [5, 15, 13],
                [3, 15, 13],
                [2, 0, 9],
                [2, 15, 9],
                [3, 0, 6],
                [6, 15, 5],
                [5, 0, 4],
                [4, 0, 3],
                [5, 2, 3],
                [2, 2, 3],
                [4, 15, 3],
                [6, 24, 3],
                [3, 2, 2],
                [6, 4, 2],
                [5, 4, 2],
                [4, 4, 2],
                [5, 7, 2],
                [5, 11, 2],
                [6, 13, 2],
                [4, 13, 2],
                [6, 14, 2],
                [8, 15, 2],
                [5, 27, 2],
                [3, 1, 1],
                [6, 2, 1],
                [5, 3, 1],
                [3, 4, 1],
                [2, 5, 1],
                [5, 5, 1],
                [4, 6, 1],
                [4, 7, 1],
                [8, 7, 1],
                [6, 8, 1],
                [4, 8, 1],
                [5, 8, 1],
                [2, 9, 1],
                [5, 10, 1],
                [8, 11, 1],
                [4, 12, 1],
                [4, 14, 1],
                [7, 14, 1],
                [5, 14, 1],
                [2, 16, 1],
                [3, 17, 1],
                [7, 18, 1],
                [6, 19, 1],
                [6, 20, 1],
                [5, 21, 1],
                [3, 21, 1],
                [6, 22, 1],
                [6, 23, 1],
                [4, 24, 1],
                [7, 24, 1],
                [5, 24, 1],
                [4, 25, 1],
                [8, 26, 1]
            ],
            "07": [
                [2, 18, 16],
                [3, 18, 13],
                [4, 18, 12],
                [5, 18, 10],
                [3, 0, 9],
                [2, 0, 6],
                [3, 2, 6],
                [4, 0, 5],
                [4, 2, 5],
                [2, 2, 5],
                [4, 16, 4],
                [6, 18, 4],
                [5, 17, 3],
                [5, 25, 3],
                [5, 1, 2],
                [5, 2, 2],
                [6, 4, 2],
                [5, 7, 2],
                [5, 8, 2],
                [7, 9, 2],
                [4, 9, 2],
                [5, 11, 2],
                [4, 13, 2],
                [2, 16, 2],
                [7, 16, 2],
                [4, 24, 2],
                [6, 0, 1],
                [5, 0, 1],
                [2, 1, 1],
                [3, 3, 1],
                [7, 4, 1],
                [3, 4, 1],
                [4, 4, 1],
                [6, 5, 1],
                [5, 6, 1],
                [4, 7, 1],
                [6, 7, 1],
                [2, 9, 1],
                [3, 9, 1],
                [3, 10, 1],
                [2, 11, 1],
                [3, 12, 1],
                [5, 14, 1],
                [2, 15, 1],
                [7, 18, 1],
                [1, 18, 1],
                [4, 19, 1],
                [4, 20, 1],
                [4, 21, 1],
                [2, 22, 1],
                [5, 23, 1],
                [5, 26, 1],
                [5, 27, 1],
                [6, 28, 1]
            ],
            "08": [
                [5, 17, 5],
                [3, 5, 2],
                [5, 16, 2],
                [6, 17, 2],
                [3, 17, 2],
                [4, 17, 2],
                [6, 0, 1],
                [6, 1, 1],
                [5, 1, 1],
                [6, 2, 1],
                [8, 3, 1],
                [2, 3, 1],
                [4, 4, 1],
                [5, 5, 1],
                [4, 6, 1],
                [8, 7, 1],
                [2, 8, 1],
                [5, 8, 1],
                [6, 9, 1],
                [3, 10, 1],
                [6, 11, 1],
                [6, 12, 1],
                [5, 13, 1],
                [4, 14, 1],
                [2, 15, 1],
                [2, 17, 1],
                [4, 18, 1],
                [4, 19, 1],
                [4, 20, 1],
                [6, 21, 1],
                [5, 22, 1],
                [4, 23, 1],
                [3, 24, 1],
                [3, 25, 1],
                [2, 26, 1],
                [4, 27, 1]
            ],
            "09": [
                [4, 20, 6],
                [3, 20, 4],
                [2, 20, 4],
                [5, 20, 3],
                [4, 1, 2],
                [5, 2, 2],
                [4, 9, 2],
                [2, 12, 2],
                [5, 12, 2],
                [4, 12, 2],
                [1, 20, 2],
                [6, 20, 2],
                [3, 35, 2],
                [4, 3, 1],
                [5, 4, 1],
                [6, 4, 1],
                [5, 5, 1],
                [5, 6, 1],
                [2, 6, 1],
                [5, 7, 1],
                [4, 7, 1],
                [5, 8, 1],
                [8, 8, 1],
                [2, 8, 1],
                [2, 9, 1],
                [4, 10, 1],
                [2, 11, 1],
                [6, 12, 1],
                [5, 13, 1],
                [5, 14, 1],
                [4, 15, 1],
                [4, 16, 1],
                [7, 17, 1],
                [6, 18, 1],
                [4, 19, 1],
                [7, 20, 1],
                [5, 21, 1],
                [7, 22, 1],
                [6, 23, 1],
                [6, 24, 1],
                [2, 25, 1],
                [4, 26, 1],
                [5, 27, 1],
                [5, 28, 1],
                [4, 29, 1],
                [2, 30, 1],
                [5, 31, 1],
                [5, 32, 1],
                [4, 33, 1],
                [5, 34, 1],
                [2, 36, 1]
            ],
            "10": [
                [4, 25, 13],
                [5, 25, 11],
                [3, 25, 11],
                [2, 25, 9],
                [4, 3, 6],
                [4, 23, 6],
                [6, 25, 6],
                [5, 3, 4],
                [4, 9, 4],
                [4, 1, 3],
                [2, 12, 3],
                [2, 2, 2],
                [4, 2, 2],
                [2, 3, 2],
                [6, 3, 2],
                [3, 3, 2],
                [3, 6, 2],
                [4, 7, 2],
                [4, 8, 2],
                [2, 11, 2],
                [3, 12, 2],
                [7, 12, 2],
                [4, 12, 2],
                [2, 23, 2],
                [1, 25, 2],
                [5, 36, 2],
                [6, 53, 2],
                [5, 53, 2],
                [5, 0, 1],
                [2, 1, 1],
                [7, 2, 1],
                [5, 2, 1],
                [7, 4, 1],
                [4, 4, 1],
                [3, 5, 1],
                [7, 5, 1],
                [4, 6, 1],
                [6, 6, 1],
                [5, 7, 1],
                [3, 7, 1],
                [7, 7, 1],
                [5, 8, 1],
                [6, 9, 1],
                [2, 9, 1],
                [3, 9, 1],
                [5, 10, 1],
                [4, 11, 1],
                [7, 11, 1],
                [5, 12, 1],
                [5, 13, 1],
                [4, 13, 1],
                [4, 14, 1],
                [6, 15, 1],
                [5, 16, 1],
                [2, 17, 1],
                [5, 17, 1],
                [3, 17, 1],
                [7, 17, 1],
                [2, 18, 1],
                [7, 19, 1],
                [7, 20, 1],
                [3, 21, 1],
                [3, 22, 1],
                [5, 24, 1],
                [6, 24, 1],
                [4, 26, 1],
                [5, 27, 1],
                [6, 28, 1],
                [4, 29, 1],
                [7, 30, 1],
                [7, 31, 1],
                [4, 31, 1],
                [3, 31, 1],
                [3, 32, 1],
                [4, 33, 1],
                [2, 34, 1],
                [5, 35, 1],
                [2, 37, 1],
                [4, 38, 1],
                [2, 39, 1],
                [7, 40, 1],
                [5, 41, 1],
                [4, 42, 1],
                [5, 43, 1],
                [6, 43, 1],
                [4, 44, 1],
                [6, 45, 1],
                [4, 46, 1],
                [4, 47, 1],
                [4, 48, 1],
                [2, 49, 1],
                [6, 50, 1],
                [7, 51, 1],
                [4, 52, 1],
                [4, 54, 1],
                [4, 55, 1]
            ],
            "11": [
                [4, 17, 4],
                [5, 17, 2],
                [2, 17, 2],
                [5, 1, 1],
                [4, 2, 1],
                [5, 3, 1],
                [3, 3, 1],
                [5, 4, 1],
                [5, 5, 1],
                [2, 5, 1],
                [5, 6, 1],
                [5, 7, 1],
                [4, 8, 1],
                [5, 9, 1],
                [3, 9, 1],
                [4, 9, 1],
                [3, 10, 1],
                [3, 11, 1],
                [3, 12, 1],
                [2, 13, 1],
                [4, 14, 1],
                [5, 15, 1],
                [2, 16, 1],
                [6, 17, 1],
                [3, 17, 1],
                [3, 18, 1],
                [6, 19, 1],
                [5, 20, 1],
                [5, 21, 1],
                [6, 21, 1],
                [3, 22, 1],
                [5, 23, 1],
                [3, 24, 1],
                [5, 25, 1],
                [2, 25, 1]
            ]
        }
    }
    scatterr(1, datalist2["name"]["02"], datalist2["data"]["02"])
    myChart.on('click', function (param) {
        //console.log(param.data[0].split('-')[1]);
        scatterr(param.data[0].split('-')[1], datalist2["name"][param.data[0].split('-')[1]],
            datalist2["data"][param.data[0].split('-')[1]]) //月份，坐标轴，数据
    })
}

/**
 * @description 绘制气泡图
 */
function drawScatter(str) {
    var scatter = echarts.init(document.getElementById('scatter'))
    data = [{
        'all': {
            '高密度脂蛋白(HDL-C)偏低': 358,
            '牙结石': 389,
            '窦性心动过缓': 379,
            '总胆固醇(CHOL)偏高': 386,
            '脂肪肝': 338,
            '咽炎': 229,
            '尿酸(UA)偏高': 222,
            '胆红素(TBIL)偏高': 206,
            '智齿': 205,
            '载脂蛋白A1(ApoA1)偏低': 194,
            '平均血红蛋白浓度(MCHC)偏高': 193,
            '血压高': 181,
            '超重': 179,
            '谷丙转氨酶(ALT)偏高': 176,
            '脂蛋白a(LPa)偏高': 149,
            '肝囊肿': 143,
            '牙色素附着': 136,
            '龋齿': 131,
            '低密度脂蛋白(LDL--C)偏高': 119,
            'γ-谷氨酰转肽酶(GGT)偏高': 109
        }
    }, {
        /*日照市中医医院*/

        '1': {},
        '2': {
            '牙结石': 23,
            '超重': 11,
            '总胆固醇(CHOL)偏高': 10,
            '高密度脂蛋白(HDL-C)偏低': 8,
            '血压高': 8,
            '肥胖': 7,
            '双乳腺增生症': 7,
            '乳腺增生症': 7,
            '双乳腺增生症超声改变': 7,
            '窦性心动过缓': 5,
            '牙色素附着': 5,
            '肌酐(CREA)偏低': 4,
            '甲状腺右侧叶结节': 4,
            '肝囊肿': 4,
            'T波异常': 4,
            '牙残根': 4,
            '淋巴细胞%(LYMPH%)偏高': 4,
            '尿隐血：1+': 3,
            '甲状腺双侧叶结节': 3,
            '不良修复体': 3
        },
        "3": {
            '双乳腺增生症': 1,
            '椎间盘突出': 1,
            '左肾小结石': 1,
            '乳腺增生症': 1,
            '椎管狭窄': 1,
            '椎体退行性变': 1,
            '双乳腺增生症超声改变': 1
        },
        '4': {},
        '5': {
            '总胆固醇(CHOL)偏高': 79,
            '载脂蛋白A1(ApoA1)偏低': 55,
            '高密度脂蛋白(HDL-C)偏低': 51,
            '脂肪肝': 45,
            '窦性心动过缓': 35,
            '咽炎': 31,
            '前列腺增生': 30,
            '胆红素(TBIL)偏高': 27,
            '脂蛋白a(LPa)偏高': 27,
            '超重': 27,
            '血压高': 27,
            '三尖瓣少量反流': 27,
            '肝囊肿': 21,
            '尿酸(UA)偏高': 19,
            '低密度脂蛋白(LDL--C)偏高': 18,
            '前列腺增生伴结石': 18,
            '左室充盈异常': 18,
            '胆囊息肉': 17,
            '载脂蛋白B(ApoB)偏高': 17,
            '甘油三酯(TG)偏高': 15
        },
        '6': {
            '牙结石': 108,
            '总胆固醇(CHOL)偏高': 96,
            '高密度脂蛋白(HDL-C)偏低': 76,
            '脂肪肝': 70,
            '窦性心动过缓': 69,
            '智齿': 54,
            '咽炎': 45,
            '尿酸(UA)偏高': 37,
            '牙色素附着': 37,
            '胆红素(TBIL)偏高': 37,
            '载脂蛋白A1(ApoA1)偏低': 35,
            '血压高': 35,
            '龋齿': 34,
            '平均血红蛋白浓度(MCHC)偏高': 28,
            '超重': 27,
            '谷草/谷丙(AST/ALT)偏高': 27,
            '脂蛋白a(LPa)偏高': 26,
            '鼻甲肥大': 23,
            '低密度脂蛋白(LDL--C)偏高': 22,
            '肝囊肿': 18
        },
        "7": {
            '高密度脂蛋白(HDL-C)偏低': 143,
            '总胆固醇(CHOL)偏高': 99,
            '脂肪肝': 91,
            '窦性心动过缓': 90,
            '牙结石': 83,
            '尿酸(UA)偏高': 74,
            '超重': 71,
            '平均血红蛋白浓度(MCHC)偏高': 61,
            '智齿': 61,
            '载脂蛋白A1(ApoA1)偏低': 59,
            '咽炎': 57,
            '胆红素(TBIL)偏高': 54,
            '脂蛋白a(LPa)偏高': 51,
            '谷丙转氨酶(ALT)偏高': 46,
            '牙色素附着': 38,
            'γ-谷氨酰转肽酶(GGT)偏高': 36,
            '单核细胞数(MONO#)偏高': 34,
            '肌酐(CREA)偏低': 33,
            '肝囊肿': 33,
            '血压高': 32
        },
        '8': {
            '窦性心动过缓': 38,
            '高密度脂蛋白(HDL-C)偏低': 37,
            '牙结石': 25,
            '胆红素(TBIL)偏高': 24,
            '脂肪肝': 20,
            '谷丙转氨酶(ALT)偏高': 19,
            '平均血红蛋白浓度(MCHC)偏高': 18,
            '超重': 17,
            '肝囊肿': 16,
            '尿酸(UA)偏高': 15,
            '智齿': 16,
            '载脂蛋白A1(ApoA1)偏低': 14,
            '总胆固醇(CHOL)偏高': 14,
            '甲状腺双侧叶结节': 13,
            '血压高': 13,
            '咽炎': 12,
            '龋齿': 12,
            '胆囊息肉': 11,
            '牙色素附着': 11,
            'γ-谷氨酰转肽酶(GGT)偏高': 11
        },
        '9': {
            '高密度脂蛋白(HDL-C)偏低': 67,
            '牙结石': 64,
            '窦性心动过缓': 46,
            '脂肪肝': 39,
            '尿酸(UA)偏高': 33,
            '智齿': 32,
            '谷丙转氨酶(ALT)偏高': 29,
            '平均血红蛋白浓度(MCHC)偏高': 27,
            '咽炎': 22,
            '牙色素附着': 20,
            '胆红素(TBIL)偏高': 20,
            '血压高': 19,
            '肝囊肿': 18,
            '乙肝表面抗体偏高': 18,
            '总胆固醇(CHOL)偏高': 17,
            '低密度脂蛋白(LDL--C)偏高': 14,
            '龋齿': 14,
            '空腹血糖(GLU)偏高': 14,
            'S-T段改变': 13,
            '肌酐(CREA)偏低': 12
        },
        '10': {
            '窦性心动过缓': 62,
            '高密度脂蛋白(HDL-C)偏低': 56,
            '咽炎': 52,
            '脂肪肝': 48,
            '谷丙转氨酶(ALT)偏高': 42,
            '总胆固醇(CHOL)偏高': 36,
            '牙结石': 36,
            '尿酸(UA)偏高': 35,
            '胆红素(TBIL)偏高': 33,
            '甲状腺双侧叶结节': 36,
            '肝囊肿': 25,
            '血压高': 25,
            '肾囊肿': 23,
            '平均血红蛋白浓度(MCHC)偏高': 22,
            'γ-谷氨酰转肽酶(GGT)偏高': 21,
            '血红蛋白(HGB)偏高': 20,
            '谷草转氨酶(AST)偏高': 20,
            '总胆固醇偏高': 20,
            '胆固醇偏高': 20,
            '低密度脂蛋白(LDL--C)偏高': 18
        },
        '11': {
            '牙结石': 35,
            '窦性心动过缓': 34,
            '脂肪肝': 23,
            '平均血红蛋白浓度(MCHC)偏高': 22,
            '智齿': 22,
            '血压高': 22,
            '高密度脂蛋白(HDL-C)偏低': 20,
            '总胆固醇(CHOL)偏高': 17,
            '低密度脂蛋白(LDL--C)偏高': 17,
            '牙色素附着': 14,
            '谷丙转氨酶(ALT)偏高': 13,
            '窦性心律不齐': 12,
            '咽炎': 10,
            '电轴右偏': 10,
            'γ-谷氨酰转肽酶(GGT)偏高': 10,
            '牙残根': 10,
            '龋齿': 9,
            '单核细胞数(MONO#)偏高': 9,
            '肝囊肿': 8,
            '白细胞(WBC)偏高': 8
        },
        '12': {}
    },
        {
            /*日照市人民医院*/

            '1': {},
            '2': {
                '牙结石': 23,
                '超重': 11,
                '总胆固醇(CHOL)偏高': 10,
                '高密度脂蛋白(HDL-C)偏低': 8,
                '血压高': 8,
                '肥胖': 7,
                '双乳腺增生症': 7,
                '乳腺增生症': 7,
                '双乳腺增生症超声改变': 7,
                '窦性心动过缓': 5,
                '牙色素附着': 5,
                '肌酐(CREA)偏低': 4,
                '甲状腺右侧叶结节': 4,
                '肝囊肿': 4,
                'T波异常': 4,
                '牙残根': 4,
                '淋巴细胞%(LYMPH%)偏高': 4,
                '尿隐血：1+': 3,
                '甲状腺双侧叶结节': 3,
                '不良修复体': 3
            },
            "3": {
                '双乳腺增生症': 1,
                '椎间盘突出': 1,
                '左肾小结石': 1,
                '乳腺增生症': 1,
                '椎管狭窄': 1,
                '椎体退行性变': 1,
                '双乳腺增生症超声改变': 1
            },
            '4': {},
            '5': {
                '总胆固醇(CHOL)偏高': 79,
                '载脂蛋白A1(ApoA1)偏低': 55,
                '高密度脂蛋白(HDL-C)偏低': 61,
                '脂肪肝': 45,
                '窦性心动过缓': 35,
                '咽炎': 31,
                '前列腺增生': 30,
                '胆红素(TBIL)偏高': 27,
                '脂蛋白a(LPa)偏高': 27,
                '超重': 27,
                '血压高': 27,
                '三尖瓣少量反流': 27,
                '肝囊肿': 17,
                '尿酸(UA)偏高': 19,
                '低密度脂蛋白(LDL--C)偏高': 18,
                '前列腺增生伴结石': 18,
                '左室充盈异常': 18,
                '胆囊息肉': 17,
                '载脂蛋白B(ApoB)偏高': 17,
                '甘油三酯(TG)偏高': 15
            },
            '6': {
                '牙结石': 108,
                '总胆固醇(CHOL)偏高': 96,
                '高密度脂蛋白(HDL-C)偏低': 76,
                '脂肪肝': 70,
                '窦性心动过缓': 69,
                '智齿': 54,
                '咽炎': 45,
                '尿酸(UA)偏高': 37,
                '牙色素附着': 37,
                '胆红素(TBIL)偏高': 37,
                '载脂蛋白A1(ApoA1)偏低': 35,
                '血压高': 35,
                '龋齿': 34,
                '平均血红蛋白浓度(MCHC)偏高': 28,
                '超重': 27,
                '谷草/谷丙(AST/ALT)偏高': 27,
                '脂蛋白a(LPa)偏高': 26,
                '鼻甲肥大': 23,
                '低密度脂蛋白(LDL--C)偏高': 22,
                '肝囊肿': 18
            },
            "7": {
                '高密度脂蛋白(HDL-C)偏低': 143,
                '总胆固醇(CHOL)偏高': 99,
                '脂肪肝': 91,
                '窦性心动过缓': 90,
                '牙结石': 84,
                '尿酸(UA)偏高': 74,
                '超重': 71,
                '平均血红蛋白浓度(MCHC)偏高': 61,
                '智齿': 61,
                '载脂蛋白A1(ApoA1)偏低': 59,
                '咽炎': 57,
                '胆红素(TBIL)偏高': 54,
                '脂蛋白a(LPa)偏高': 51,
                '谷丙转氨酶(ALT)偏高': 46,
                '牙色素附着': 38,
                'γ-谷氨酰转肽酶(GGT)偏高': 36,
                '单核细胞数(MONO#)偏高': 34,
                '肌酐(CREA)偏低': 33,
                '肝囊肿': 33,
                '血压高': 32
            },
            '8': {
                '窦性心动过缓': 38,
                '高密度脂蛋白(HDL-C)偏低': 37,
                '牙结石': 25,
                '胆红素(TBIL)偏高': 24,
                '脂肪肝': 20,
                '谷丙转氨酶(ALT)偏高': 19,
                '平均血红蛋白浓度(MCHC)偏高': 18,
                '超重': 17,
                '肝囊肿': 16,
                '尿酸(UA)偏高': 15,
                '智齿': 15,
                '载脂蛋白A1(ApoA1)偏低': 14,
                '总胆固醇(CHOL)偏高': 14,
                '甲状腺双侧叶结节': 13,
                '血压高': 13,
                '咽炎': 12,
                '龋齿': 12,
                '胆囊息肉': 11,
                '牙色素附着': 11,
                'γ-谷氨酰转肽酶(GGT)偏高': 11
            },
            '9': {
                '高密度脂蛋白(HDL-C)偏低': 67,
                '牙结石': 64,
                '窦性心动过缓': 46,
                '脂肪肝': 39,
                '尿酸(UA)偏高': 33,
                '智齿': 32,
                '谷丙转氨酶(ALT)偏高': 29,
                '平均血红蛋白浓度(MCHC)偏高': 27,
                '咽炎': 22,
                '牙色素附着': 20,
                '胆红素(TBIL)偏高': 20,
                '血压高': 19,
                '肝囊肿': 18,
                '乙肝表面抗体偏高': 18,
                '总胆固醇(CHOL)偏高': 17,
                '低密度脂蛋白(LDL--C)偏高': 14,
                '龋齿': 14,
                '空腹血糖(GLU)偏高': 14,
                'S-T段改变': 13,
                '肌酐(CREA)偏低': 12
            },
            '10': {
                '窦性心动过缓': 62,
                '高密度脂蛋白(HDL-C)偏低': 56,
                '咽炎': 52,
                '脂肪肝': 48,
                '谷丙转氨酶(ALT)偏高': 42,
                '总胆固醇(CHOL)偏高': 36,
                '牙结石': 36,
                '尿酸(UA)偏高': 35,
                '胆红素(TBIL)偏高': 33,
                '甲状腺双侧叶结节': 26,
                '肝囊肿': 25,
                '血压高': 25,
                '肾囊肿': 23,
                '平均血红蛋白浓度(MCHC)偏高': 22,
                'γ-谷氨酰转肽酶(GGT)偏高': 21,
                '血红蛋白(HGB)偏高': 20,
                '谷草转氨酶(AST)偏高': 20,
                '总胆固醇偏高': 20,
                '胆固醇偏高': 20,
                '低密度脂蛋白(LDL--C)偏高': 18
            },
            '11': {
                '牙结石': 35,
                '窦性心动过缓': 34,
                '脂肪肝': 23,
                '平均血红蛋白浓度(MCHC)偏高': 22,
                '智齿': 22,
                '血压高': 22,
                '高密度脂蛋白(HDL-C)偏低': 20,
                '总胆固醇(CHOL)偏高': 17,
                '低密度脂蛋白(LDL--C)偏高': 17,
                '牙色素附着': 14,
                '谷丙转氨酶(ALT)偏高': 13,
                '窦性心律不齐': 12,
                '咽炎': 10,
                '电轴右偏': 10,
                'γ-谷氨酰转肽酶(GGT)偏高': 10,
                '牙残根': 10,
                '龋齿': 9,
                '单核细胞数(MONO#)偏高': 9,
                '肝囊肿': 8,
                '白细胞(WBC)偏高': 8
            },
            '12': {}
        },
        {
            /*日照市岚山医院*/

            '1': {},
            "2": {
                '牙结石': 23,
                '超重': 11,
                '总胆固醇(CHOL)偏高': 10,
                '高密度脂蛋白(HDL-C)偏低': 8,
                '血压高': 8,
                '肥胖': 7,
                '双乳腺增生症': 7,
                '乳腺增生症': 7,
                '双乳腺增生症超声改变': 7,
                '窦性心动过缓': 5,
                '牙色素附着': 5,
                '肌酐(CREA)偏低': 4,
                '甲状腺右侧叶结节': 4,
                '肝囊肿': 4,
                'T波异常': 4,
                '牙残根': 4,
                '淋巴细胞%(LYMPH%)偏高': 4,
                '尿隐血：1+': 3,
                '甲状腺双侧叶结节': 3,
                '不良修复体': 3
            },
            "3": {
                '双乳腺增生症': 1,
                '椎间盘突出': 1,
                '左肾小结石': 1,
                '乳腺增生症': 1,
                '椎管狭窄': 1,
                '椎体退行性变': 1,
                '双乳腺增生症超声改变': 1
            },
            "4": {},
            '5': {
                '总胆固醇(CHOL)偏高': 79,
                '载脂蛋白A1(ApoA1)偏低': 55,
                '高密度脂蛋白(HDL-C)偏低': 51,
                '脂肪肝': 45,
                '窦性心动过缓': 35,
                '咽炎': 31,
                '前列腺增生': 30,
                '胆红素(TBIL)偏高': 27,
                '脂蛋白a(LPa)偏高': 17,
                '超重': 27,
                '血压高': 27,
                '三尖瓣少量反流': 27,
                '肝囊肿': 51,
                '尿酸(UA)偏高': 19,
                '低密度脂蛋白(LDL--C)偏高': 18,
                '前列腺增生伴结石': 18,
                '左室充盈异常': 18,
                '胆囊息肉': 17,
                '载脂蛋白B(ApoB)偏高': 17,
                '甘油三酯(TG)偏高': 15
            },
            "6": {
                '牙结石': 108,
                '总胆固醇(CHOL)偏高': 96,
                '高密度脂蛋白(HDL-C)偏低': 76,
                '脂肪肝': 70,
                '窦性心动过缓': 69,
                '智齿': 54,
                '咽炎': 45,
                '尿酸(UA)偏高': 37,
                '牙色素附着': 37,
                '胆红素(TBIL)偏高': 37,
                '载脂蛋白A1(ApoA1)偏低': 35,
                '血压高': 35,
                '龋齿': 34,
                '平均血红蛋白浓度(MCHC)偏高': 28,
                '超重': 27,
                '谷草/谷丙(AST/ALT)偏高': 27,
                '脂蛋白a(LPa)偏高': 26,
                '鼻甲肥大': 23,
                '低密度脂蛋白(LDL--C)偏高': 22,
                '肝囊肿': 18
            },
            "7": {
                '高密度脂蛋白(HDL-C)偏低': 143,
                '总胆固醇(CHOL)偏高': 99,
                '脂肪肝': 91,
                '窦性心动过缓': 90,
                '牙结石': 84,
                '尿酸(UA)偏高': 74,
                '超重': 71,
                '平均血红蛋白浓度(MCHC)偏高': 61,
                '智齿': 61,
                '载脂蛋白A1(ApoA1)偏低': 59,
                '咽炎': 57,
                '胆红素(TBIL)偏高': 54,
                '脂蛋白a(LPa)偏高': 51,
                '谷丙转氨酶(ALT)偏高': 46,
                '牙色素附着': 38,
                'γ-谷氨酰转肽酶(GGT)偏高': 36,
                '单核细胞数(MONO#)偏高': 34,
                '肌酐(CREA)偏低': 33,
                '肝囊肿': 33,
                '血压高': 32
            },
            '8': {
                '窦性心动过缓': 38,
                '高密度脂蛋白(HDL-C)偏低': 37,
                '牙结石': 25,
                '胆红素(TBIL)偏高': 24,
                '脂肪肝': 20,
                '谷丙转氨酶(ALT)偏高': 19,
                '平均血红蛋白浓度(MCHC)偏高': 18,
                '超重': 17,
                '肝囊肿': 16,
                '尿酸(UA)偏高': 15,
                '智齿': 15,
                '载脂蛋白A1(ApoA1)偏低': 14,
                '总胆固醇(CHOL)偏高': 14,
                '甲状腺双侧叶结节': 13,
                '血压高': 13,
                '咽炎': 12,
                '龋齿': 12,
                '胆囊息肉': 11,
                '牙色素附着': 11,
                'γ-谷氨酰转肽酶(GGT)偏高': 11
            },
            '9': {
                '高密度脂蛋白(HDL-C)偏低': 67,
                '牙结石': 64,
                '窦性心动过缓': 46,
                '脂肪肝': 39,
                '尿酸(UA)偏高': 33,
                '智齿': 32,
                '谷丙转氨酶(ALT)偏高': 29,
                '平均血红蛋白浓度(MCHC)偏高': 27,
                '咽炎': 22,
                '牙色素附着': 20,
                '胆红素(TBIL)偏高': 20,
                '血压高': 19,
                '肝囊肿': 18,
                '乙肝表面抗体偏高': 18,
                '总胆固醇(CHOL)偏高': 17,
                '低密度脂蛋白(LDL--C)偏高': 14,
                '龋齿': 14,
                '空腹血糖(GLU)偏高': 14,
                'S-T段改变': 13,
                '肌酐(CREA)偏低': 12
            },
            '10': {
                '窦性心动过缓': 62,
                '高密度脂蛋白(HDL-C)偏低': 56,
                '咽炎': 52,
                '脂肪肝': 48,
                '谷丙转氨酶(ALT)偏高': 42,
                '总胆固醇(CHOL)偏高': 36,
                '牙结石': 36,
                '尿酸(UA)偏高': 35,
                '胆红素(TBIL)偏高': 33,
                '甲状腺双侧叶结节': 26,
                '肝囊肿': 25,
                '血压高': 25,
                '肾囊肿': 23,
                '平均血红蛋白浓度(MCHC)偏高': 22,
                'γ-谷氨酰转肽酶(GGT)偏高': 21,
                '血红蛋白(HGB)偏高': 20,
                '谷草转氨酶(AST)偏高': 20,
                '总胆固醇偏高': 20,
                '胆固醇偏高': 20,
                '低密度脂蛋白(LDL--C)偏高': 18
            },
            '11': {
                '牙结石': 35,
                '窦性心动过缓': 34,
                '脂肪肝': 33,
                '平均血红蛋白浓度(MCHC)偏高': 22,
                '智齿': 22,
                '血压高': 22,
                '高密度脂蛋白(HDL-C)偏低': 20,
                '总胆固醇(CHOL)偏高': 17,
                '低密度脂蛋白(LDL--C)偏高': 17,
                '牙色素附着': 14,
                '谷丙转氨酶(ALT)偏高': 13,
                '窦性心律不齐': 12,
                '咽炎': 10,
                '电轴右偏': 10,
                'γ-谷氨酰转肽酶(GGT)偏高': 10,
                '牙残根': 10,
                '龋齿': 9,
                '单核细胞数(MONO#)偏高': 9,
                '肝囊肿': 8,
                '白细胞(WBC)偏高': 8
            },
            '12': {}
        }, {
            /*五莲县人民医院*/

            '1': {},
            '2': {
                '牙结石': 23,
                '超重': 11,
                '总胆固醇(CHOL)偏高': 10,
                '高密度脂蛋白(HDL-C)偏低': 8,
                '血压高': 8,
                '肥胖': 7,
                '双乳腺增生症': 7,
                '乳腺增生症': 7,
                '双乳腺增生症超声改变': 7,
                '窦性心动过缓': 5,
                '牙色素附着': 5,
                '肌酐(CREA)偏低': 4,
                '甲状腺右侧叶结节': 4,
                '肝囊肿': 4,
                'T波异常': 4,
                '牙残根': 4,
                '淋巴细胞%(LYMPH%)偏高': 4,
                '尿隐血：1+': 3,
                '甲状腺双侧叶结节': 3,
                '不良修复体': 3
            },
            "3": {
                '双乳腺增生症': 1,
                '椎间盘突出': 1,
                '左肾小结石': 1,
                '乳腺增生症': 1,
                '椎管狭窄': 1,
                '椎体退行性变': 1,
                '双乳腺增生症超声改变': 1
            },
            '4': {},
            "5": {
                '总胆固醇(CHOL)偏高': 79,
                '载脂蛋白A1(ApoA1)偏低': 55,
                '高密度脂蛋白(HDL-C)偏低': 51,
                '脂肪肝': 45,
                '窦性心动过缓': 35,
                '咽炎': 31,
                '前列腺增生': 30,
                '胆红素(TBIL)偏高': 27,
                '脂蛋白a(LPa)偏高': 27,
                '超重': 27,
                '血压高': 27,
                '三尖瓣少量反流': 27,
                '肝囊肿': 27,
                '尿酸(UA)偏高': 19,
                '低密度脂蛋白(LDL--C)偏高': 18,
                '前列腺增生伴结石': 18,
                '左室充盈异常': 18,
                '胆囊息肉': 17,
                '载脂蛋白B(ApoB)偏高': 17,
                '甘油三酯(TG)偏高': 15
            },
            '6': {
                '牙结石': 108,
                '总胆固醇(CHOL)偏高': 96,
                '高密度脂蛋白(HDL-C)偏低': 76,
                '脂肪肝': 70,
                '窦性心动过缓': 69,
                '智齿': 54,
                '咽炎': 47,
                '尿酸(UA)偏高': 37,
                '牙色素附着': 37,
                '胆红素(TBIL)偏高': 37,
                '载脂蛋白A1(ApoA1)偏低': 35,
                '血压高': 35,
                '龋齿': 34,
                '平均血红蛋白浓度(MCHC)偏高': 28,
                '超重': 27,
                '谷草/谷丙(AST/ALT)偏高': 27,
                '脂蛋白a(LPa)偏高': 26,
                '鼻甲肥大': 23,
                '低密度脂蛋白(LDL--C)偏高': 22,
                '肝囊肿': 18
            },
            '7': {
                '高密度脂蛋白(HDL-C)偏低': 141,
                '总胆固醇(CHOL)偏高': 99,
                '脂肪肝': 91,
                '窦性心动过缓': 90,
                '牙结石': 84,
                '尿酸(UA)偏高': 74,
                '超重': 71,
                '平均血红蛋白浓度(MCHC)偏高': 61,
                '智齿': 61,
                '载脂蛋白A1(ApoA1)偏低': 59,
                '咽炎': 57,
                '胆红素(TBIL)偏高': 54,
                '脂蛋白a(LPa)偏高': 51,
                '谷丙转氨酶(ALT)偏高': 46,
                '牙色素附着': 38,
                'γ-谷氨酰转肽酶(GGT)偏高': 36,
                '单核细胞数(MONO#)偏高': 34,
                '肌酐(CREA)偏低': 33,
                '肝囊肿': 33,
                '血压高': 32
            },
            '8': {
                '窦性心动过缓': 38,
                '高密度脂蛋白(HDL-C)偏低': 37,
                '牙结石': 25,
                '胆红素(TBIL)偏高': 24,
                '脂肪肝': 20,
                '谷丙转氨酶(ALT)偏高': 19,
                '平均血红蛋白浓度(MCHC)偏高': 18,
                '超重': 17,
                '肝囊肿': 16,
                '尿酸(UA)偏高': 15,
                '智齿': 15,
                '载脂蛋白A1(ApoA1)偏低': 14,
                '总胆固醇(CHOL)偏高': 14,
                '甲状腺双侧叶结节': 13,
                '血压高': 13,
                '咽炎': 12,
                '龋齿': 12,
                '胆囊息肉': 11,
                '牙色素附着': 11,
                'γ-谷氨酰转肽酶(GGT)偏高': 11
            },
            '9': {
                '高密度脂蛋白(HDL-C)偏低': 67,
                '牙结石': 64,
                '窦性心动过缓': 56,
                '脂肪肝': 39,
                '尿酸(UA)偏高': 33,
                '智齿': 32,
                '谷丙转氨酶(ALT)偏高': 29,
                '平均血红蛋白浓度(MCHC)偏高': 27,
                '咽炎': 22,
                '牙色素附着': 20,
                '胆红素(TBIL)偏高': 20,
                '血压高': 19,
                '肝囊肿': 18,
                '乙肝表面抗体偏高': 18,
                '总胆固醇(CHOL)偏高': 17,
                '低密度脂蛋白(LDL--C)偏高': 14,
                '龋齿': 14,
                '空腹血糖(GLU)偏高': 14,
                'S-T段改变': 13,
                '肌酐(CREA)偏低': 12
            },
            "10": {
                '窦性心动过缓': 62,
                '高密度脂蛋白(HDL-C)偏低': 56,
                '咽炎': 52,
                '脂肪肝': 48,
                '谷丙转氨酶(ALT)偏高': 42,
                '总胆固醇(CHOL)偏高': 36,
                '牙结石': 36,
                '尿酸(UA)偏高': 35,
                '胆红素(TBIL)偏高': 33,
                '甲状腺双侧叶结节': 26,
                '肝囊肿': 25,
                '血压高': 25,
                '肾囊肿': 33,
                '平均血红蛋白浓度(MCHC)偏高': 22,
                'γ-谷氨酰转肽酶(GGT)偏高': 21,
                '血红蛋白(HGB)偏高': 20,
                '谷草转氨酶(AST)偏高': 20,
                '总胆固醇偏高': 20,
                '胆固醇偏高': 20,
                '低密度脂蛋白(LDL--C)偏高': 18
            },
            '11': {
                '牙结石': 35,
                '窦性心动过缓': 34,
                '脂肪肝': 33,
                '平均血红蛋白浓度(MCHC)偏高': 22,
                '智齿': 22,
                '血压高': 22,
                '高密度脂蛋白(HDL-C)偏低': 20,
                '总胆固醇(CHOL)偏高': 17,
                '低密度脂蛋白(LDL--C)偏高': 17,
                '牙色素附着': 14,
                '谷丙转氨酶(ALT)偏高': 13,
                '窦性心律不齐': 12,
                '咽炎': 10,
                '电轴右偏': 10,
                'γ-谷氨酰转肽酶(GGT)偏高': 10,
                '牙残根': 10,
                '龋齿': 9,
                '单核细胞数(MONO#)偏高': 9,
                '肝囊肿': 8,
                '白细胞(WBC)偏高': 8
            },
            "12": {}
        }
    ]
    console.log(data)
    var colorList = [
        [
            '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
            '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
            '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
            '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
        ],
        [
            '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
            '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
            '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
            '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
            '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
            '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
            '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
            '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]
    ][2];
    let leg = [];
    let cat = [];
    let data2 = [];
    if (str == 'all') {
        let o = {
            name: '全部',
            itemStyle: {
                color: colorList[0]
            }
        }
        let list = data[0]['all']
        let list2 = Object.keys(list)
        console.log(list2)
        for (let i = 0; i < list2.length; i++) {
            let o3 = {
                name: list2[i],
                category: '全部',
                value: data[0]['all'][list2[i]],
                symbolSize: data[0]['all'][list2[i]] / 5,
                draggable: true,
                itemStyle: {
                    normal: {
                        // shadowBlur: 10,
                        // shadowColor: "#000",
                        color: colorList[0]
                    }
                }
            }
            data2.push(o3)
        }
        leg.push(o)
    } else {
        let name = ['日照市人民医院', '日照市中医医院', '日照市岚山医院', '五莲县人民医院']
        for (let i = 0; i < 4; i++) {
            let symbol;
            if (name[i] == "日照市人民医院") {
                symbol = 'circle'
            } else if (name[i] == "日照市中医医院") {
                symbol = 'triangle'
            } else if (name[i] == "日照市岚山医院") {
                symbol = 'diamond'
            } else if (name[i] == "五莲县人民医院") {
                symbol = 'roundRect'
            }
            let o = {
                name: name[i],
                icon:symbol,
                itemStyle: {
                    color: colorList[i + 1],

                }
            }
            leg.push(o)

        }
        list = Object.keys(data[1][str])
        console.log(list)
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < list.length; j++) {
                console.log(data[i + 1][str][list[j]])
                let size;
                if (data[i + 1][str][list[j]] < 5) {
                    size = data[i + 1][str][list[j]] * 10
                } else if (data[i + 1][str][list[j]] > 50) {
                    size = data[i + 1][str][list[j]] - 50
                } else {
                    size = data[i + 1][str][list[j]]
                }
                let symbol;
                if (name[i] == "日照市人民医院") {
                    symbol = 'circle'
                } else if (name[i] == "日照市中医医院") {
                    symbol = 'triangle'
                } else if (name[i] == "日照市岚山医院") {
                    symbol = 'diamond'
                } else if (name[i] == "五莲县人民医院") {
                    symbol = 'roundRect'
                }
                let o3 = {
                    name: list[j] + i + j,
                    category: name[i],
                    value: data[i + 1][str][list[j]],
                    symbolSize: size,
                    symbol: symbol,
                    draggable: true,
                    itemStyle: {
                        normal: {
                            // shadowBlur: 10,
                            // shadowColor: "#000",
                            color: colorList[i + 1]
                        }
                    }
                }
                data2.push(o3)
            }
        }
    }
    console.log(data2)
    // console.log(cat)
    let title;
    if (str == 'all') {
        title = "全年高发疾病"
    } else {
        title = str + '月高发疾病'
    }
    option = {
        title: {
            text: title, //主标题文本，'\n'指定换行
            x: 'center', // 水平安放位置，默认为左对齐，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        },
        tooltip: {
            formatter: function (params) {
                let reg = /[0-9]+/g;
                let str1 = params.data.name.replace(reg, "");
                return (str1 + ":" + params.data.value + "例")
            }
        },
        color: ['#fff', '#fff', '#fff'],
        legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
            show: true,
            top: 20,
            left: "left",
            orient: 'vertical',
            itemWidth: 16,
            textStyle: {
                fontSize: 10
            },
            data: leg
        },
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 50,
                edgeLength: 1
            },
            roam: true,
            label: {
                normal: {
                    show: true,
                    formatter: function (params) {
                        let reg = /[0-9]+/g;
                        let str1 = params.data.name.replace(reg, "");
                        return (str1)
                    },
                    textStyle: {
                        color: "#4F4F4F",
                        fontSize: 8
                    }
                }
            },
            categories: leg,
            data: data2
        }]
    }
    scatter.setOption(option)
}


/**
 * @description 绘制散点图
 */
function scatterr(mouth, datalist1, datalist2) {
    //console.log(datalist2)
    var dom = document.getElementById("scatter2");
    var myChart = echarts.init(dom);
    var app = {};

    var option;


    var years = ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100'];


    var data = [
        [4, 15, 16],
        [5, 15, 8],
        [4, 0, 4],
        [5, 6, 4],
        [3, 15, 4],
        [5, 0, 3],
        [5, 7, 3],
        [4, 10, 3],
        [5, 12, 3],
        [5, 14, 3],
        [5, 20, 3],
        [5, 2, 2],
        [5, 3, 2],
        [6, 4, 2],
        [6, 15, 2],
        [6, 22, 2],
        [3, 0, 1],
        [6, 1, 1],
        [4, 1, 1],
        [4, 2, 1],
        [3, 2, 1],
        [3, 3, 1],
        [4, 3, 1],
        [7, 3, 1],
        [5, 5, 1],
        [4, 6, 1],
        [7, 6, 1],
        [6, 6, 1],
        [4, 7, 1],
        [7, 7, 1],
        [6, 8, 1],
        [4, 8, 1],
        [6, 9, 1],
        [4, 9, 1],
        [5, 11, 1],
        [7, 12, 1],
        [5, 13, 1],
        [6, 14, 1],
        [7, 15, 1],
        [3, 16, 1],
        [5, 16, 1],
        [4, 17, 1],
        [5, 17, 1],
        [5, 18, 1],
        [4, 19, 1],
        [6, 20, 1],
        [7, 21, 1]
    ];
    data = datalist2.map(function (item) {
        return [item[1], item[0], item[2]];
    });

    option = {
        title: {
            text: '2019年日照市' + mouth + '月呼吸道疾病分布情况',
            left: 'center'
        },

        // legend: {
        // 	data: ['Punch Card'],
        // 	left: 'right'
        // },
        tooltip: {
            formatter: function (params) {
                return datalist1[params.value[0]] + ':' + params.value[2];
            },
            axisPointer: {
                show: false,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        grid: {
            left: 2,
            bottom: 50,
            right: 20,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: datalist1,
            boundaryGap: false,
            splitLine: {
                show: true
            },
            axisLabel: {
                fontSize: 10,
                interval: 0,
                rotate: 45
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            name: "年龄分布",
            data: years,
            axisLine: {
                show: false
            },
            axisLabel: {
                formatter: "{value} 岁"
            }
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 200
        }, {
            type: "slider",
            height: 10,
            left: "center",
            width: "80%",
            start: 0,
            end: 200,
        }],
        series: [{
            name: 'Punch Card',
            type: 'scatter',
            symbolSize: function (val) {
                return val[2] * 5;
            },
            data: data,
            animationDelay: function (idx) {
                return idx * 5;
            }
        }]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}


/**
 * @description 绘制气温折线图
 */
function temperature() {
    let data = [
        {
            "value": -0.5,
            "date": "﻿2019-1-01",
            "l": -4,
            "u": 3
        },
        {
            "value": 0.5,
            "date": "2019-1-2",
            "l": -3,
            "u": 4
        },
        {
            "value": 1.5,
            "date": "2019-1-3",
            "l": -2,
            "u": 5
        },
        {
            "value": 0.5,
            "date": "2019-1-4",
            "l": -2,
            "u": 3
        },
        {
            "value": 0.0,
            "date": "2019-1-5",
            "l": -3,
            "u": 3
        },
        {
            "value": 0.5,
            "date": "2019-1-6",
            "l": -3,
            "u": 4
        },
        {
            "value": 1.5,
            "date": "2019-1-7",
            "l": -2,
            "u": 5
        },
        {
            "value": 1.0,
            "date": "2019-1-8",
            "l": -2,
            "u": 4
        },
        {
            "value": 0.0,
            "date": "2019-1-9",
            "l": -2,
            "u": 2
        },
        {
            "value": 2.0,
            "date": "2019-1-10",
            "l": -1,
            "u": 5
        },
        {
            "value": 1.0,
            "date": "2019-1-11",
            "l": -2,
            "u": 4
        },
        {
            "value": 2.5,
            "date": "2019-1-12",
            "l": -2,
            "u": 7
        },
        {
            "value": 2.5,
            "date": "2019-1-13",
            "l": -2,
            "u": 7
        },
        {
            "value": 1.5,
            "date": "2019-1-14",
            "l": -3,
            "u": 6
        },
        {
            "value": -3.0,
            "date": "2019-1-15",
            "l": -7,
            "u": 1
        },
        {
            "value": -2.5,
            "date": "2019-1-16",
            "l": -6,
            "u": 1
        },
        {
            "value": 1.5,
            "date": "2019-1-17",
            "l": -3,
            "u": 6
        },
        {
            "value": 1.0,
            "date": "2019-1-18",
            "l": -2,
            "u": 4
        },
        {
            "value": 2.0,
            "date": "2019-1-19",
            "l": -2,
            "u": 6
        },
        {
            "value": 1.5,
            "date": "2019-1-20",
            "l": -2,
            "u": 5
        },
        {
            "value": 2.0,
            "date": "2019-1-21",
            "l": -3,
            "u": 7
        },
        {
            "value": 4.0,
            "date": "2019-1-22",
            "l": -1,
            "u": 9
        },
        {
            "value": 2.0,
            "date": "2019-1-23",
            "l": -3,
            "u": 7
        },
        {
            "value": 2.0,
            "date": "2019-1-24",
            "l": -2,
            "u": 6
        },
        {
            "value": 0.0,
            "date": "2019-1-25",
            "l": -4,
            "u": 4
        },
        {
            "value": 1.0,
            "date": "2019-1-26",
            "l": -3,
            "u": 5
        },
        {
            "value": 2.0,
            "date": "2019-1-27",
            "l": -2,
            "u": 6
        },
        {
            "value": 1.5,
            "date": "2019-1-28",
            "l": -3,
            "u": 6
        },
        {
            "value": 2.5,
            "date": "2019-1-29",
            "l": -1,
            "u": 6
        },
        {
            "value": 2.0,
            "date": "2019-1-30",
            "l": -2,
            "u": 6
        },
        {
            "value": 2.5,
            "date": "﻿2019-2-01",
            "l": -2,
            "u": 7
        },
        {
            "value": 2.5,
            "date": "2019-2-2",
            "l": 0,
            "u": 5
        },
        {
            "value": 2.5,
            "date": "2019-2-3",
            "l": -2,
            "u": 7
        },
        {
            "value": 3.0,
            "date": "2019-2-4",
            "l": 0,
            "u": 6
        },
        {
            "value": 4.0,
            "date": "2019-2-5",
            "l": 0,
            "u": 8
        },
        {
            "value": 2.5,
            "date": "2019-2-6",
            "l": -3,
            "u": 8
        },
        {
            "value": -2.5,
            "date": "2019-2-7",
            "l": -5,
            "u": 0
        },
        {
            "value": -2.0,
            "date": "2019-2-8",
            "l": -4,
            "u": 0
        },
        {
            "value": -1.5,
            "date": "2019-2-9",
            "l": -4,
            "u": 1
        },
        {
            "value": -2.0,
            "date": "2019-2-10",
            "l": -4,
            "u": 0
        },
        {
            "value": 1.0,
            "date": "2019-2-11",
            "l": -2,
            "u": 4
        },
        {
            "value": 2.5,
            "date": "2019-2-12",
            "l": 0,
            "u": 5
        },
        {
            "value": 3.5,
            "date": "2019-2-13",
            "l": 2,
            "u": 5
        },
        {
            "value": 0.5,
            "date": "2019-2-14",
            "l": -2,
            "u": 3
        },
        {
            "value": 0.5,
            "date": "2019-2-15",
            "l": -4,
            "u": 5
        },
        {
            "value": 0.0,
            "date": "2019-2-16",
            "l": -4,
            "u": 4
        },
        {
            "value": 1.5,
            "date": "2019-2-17",
            "l": -1,
            "u": 4
        },
        {
            "value": 2.0,
            "date": "2019-2-18",
            "l": 1,
            "u": 3
        },
        {
            "value": 2.0,
            "date": "2019-2-19",
            "l": -2,
            "u": 6
        },
        {
            "value": 2.5,
            "date": "2019-2-20",
            "l": -1,
            "u": 6
        },
        {
            "value": 3.0,
            "date": "2019-2-21",
            "l": 0,
            "u": 6
        },
        {
            "value": 3.0,
            "date": "2019-2-22",
            "l": 0,
            "u": 6
        },
        {
            "value": 4.5,
            "date": "2019-2-23",
            "l": 0,
            "u": 9
        },
        {
            "value": 6.5,
            "date": "2019-2-24",
            "l": 1,
            "u": 12
        },
        {
            "value": 5.0,
            "date": "2019-2-25",
            "l": 2,
            "u": 8
        },
        {
            "value": 5.0,
            "date": "2019-2-26",
            "l": 3,
            "u": 7
        },
        {
            "value": 3.5,
            "date": "2019-2-27",
            "l": 0,
            "u": 7
        },
        {
            "value": 6.5,
            "date": "2019-2-28",
            "l": 2,
            "u": 11
        },
        {
            "value": 6.5,
            "date": "﻿2019-3-01",
            "l": 3,
            "u": 10
        },
        {
            "value": 6.5,
            "date": "2019-3-2",
            "l": 4,
            "u": 9
        },
        {
            "value": 4.5,
            "date": "2019-3-3",
            "l": 1,
            "u": 8
        },
        {
            "value": 4.5,
            "date": "2019-3-4",
            "l": 1,
            "u": 8
        },
        {
            "value": 7.0,
            "date": "2019-3-5",
            "l": 4,
            "u": 10
        },
        {
            "value": 7.0,
            "date": "2019-3-6",
            "l": 1,
            "u": 13
        },
        {
            "value": 5.5,
            "date": "2019-3-7",
            "l": 0,
            "u": 11
        },
        {
            "value": 6.0,
            "date": "2019-3-8",
            "l": 3,
            "u": 9
        },
        {
            "value": 7.0,
            "date": "2019-3-9",
            "l": 4,
            "u": 10
        },
        {
            "value": 8.5,
            "date": "2019-3-10",
            "l": 5,
            "u": 12
        },
        {
            "value": 8.5,
            "date": "2019-3-11",
            "l": 3,
            "u": 14
        },
        {
            "value": 6.0,
            "date": "2019-3-12",
            "l": 0,
            "u": 12
        },
        {
            "value": 9.0,
            "date": "2019-3-13",
            "l": 3,
            "u": 15
        },
        {
            "value": 11.5,
            "date": "2019-3-14",
            "l": 4,
            "u": 19
        },
        {
            "value": 8.0,
            "date": "2019-3-15",
            "l": 2,
            "u": 14
        },
        {
            "value": 12.5,
            "date": "2019-3-16",
            "l": 4,
            "u": 21
        },
        {
            "value": 10.0,
            "date": "2019-3-17",
            "l": 6,
            "u": 14
        },
        {
            "value": 12.0,
            "date": "2019-3-18",
            "l": 8,
            "u": 16
        },
        {
            "value": 13.5,
            "date": "2019-3-19",
            "l": 9,
            "u": 18
        },
        {
            "value": 12.0,
            "date": "2019-3-20",
            "l": 8,
            "u": 16
        },
        {
            "value": 7.5,
            "date": "2019-3-21",
            "l": 2,
            "u": 13
        },
        {
            "value": 7.5,
            "date": "2019-3-22",
            "l": 5,
            "u": 10
        },
        {
            "value": 7.0,
            "date": "2019-3-23",
            "l": 2,
            "u": 12
        },
        {
            "value": 10.5,
            "date": "2019-3-24",
            "l": 6,
            "u": 15
        },
        {
            "value": 13.5,
            "date": "2019-3-25",
            "l": 8,
            "u": 19
        },
        {
            "value": 15.5,
            "date": "2019-3-26",
            "l": 10,
            "u": 21
        },
        {
            "value": 15.5,
            "date": "2019-3-27",
            "l": 7,
            "u": 24
        },
        {
            "value": 7.5,
            "date": "2019-3-28",
            "l": 5,
            "u": 10
        },
        {
            "value": 8.5,
            "date": "2019-3-29",
            "l": 6,
            "u": 11
        },
        {
            "value": 7.0,
            "date": "2019-3-30",
            "l": 2,
            "u": 12
        },
        {
            "value": 9.0,
            "date": "2019-3-31",
            "l": 5,
            "u": 13
        },
        {
            "value": 12.5,
            "date": "﻿2019-4-01",
            "l": 6,
            "u": 19
        },
        {
            "value": 9.0,
            "date": "2019-4-2",
            "l": 6,
            "u": 12
        },
        {
            "value": 9.5,
            "date": "2019-4-3",
            "l": 6,
            "u": 13
        },
        {
            "value": 16.0,
            "date": "2019-4-4",
            "l": 11,
            "u": 21
        },
        {
            "value": 15.5,
            "date": "2019-4-5",
            "l": 11,
            "u": 20
        },
        {
            "value": 16.5,
            "date": "2019-4-6",
            "l": 9,
            "u": 24
        },
        {
            "value": 11.5,
            "date": "2019-4-7",
            "l": 8,
            "u": 15
        },
        {
            "value": 9.5,
            "date": "2019-4-8",
            "l": 7,
            "u": 12
        },
        {
            "value": 6.5,
            "date": "2019-4-9",
            "l": 5,
            "u": 8
        },
        {
            "value": 10.0,
            "date": "2019-4-10",
            "l": 7,
            "u": 13
        },
        {
            "value": 10.0,
            "date": "2019-4-11",
            "l": 6,
            "u": 14
        },
        {
            "value": 12.5,
            "date": "2019-4-12",
            "l": 10,
            "u": 15
        },
        {
            "value": 14.0,
            "date": "2019-4-13",
            "l": 11,
            "u": 17
        },
        {
            "value": 13.5,
            "date": "2019-4-14",
            "l": 8,
            "u": 19
        },
        {
            "value": 14.5,
            "date": "2019-4-15",
            "l": 10,
            "u": 19
        },
        {
            "value": 11.5,
            "date": "2019-4-16",
            "l": 9,
            "u": 14
        },
        {
            "value": 15.0,
            "date": "2019-4-17",
            "l": 12,
            "u": 18
        },
        {
            "value": 17.0,
            "date": "2019-4-18",
            "l": 11,
            "u": 23
        },
        {
            "value": 12.5,
            "date": "2019-4-19",
            "l": 10,
            "u": 15
        },
        {
            "value": 14.5,
            "date": "2019-4-20",
            "l": 12,
            "u": 17
        },
        {
            "value": 13.0,
            "date": "2019-4-21",
            "l": 11,
            "u": 15
        },
        {
            "value": 14.5,
            "date": "2019-4-22",
            "l": 12,
            "u": 17
        },
        {
            "value": 15.0,
            "date": "2019-4-23",
            "l": 12,
            "u": 18
        },
        {
            "value": 13.5,
            "date": "2019-4-24",
            "l": 10,
            "u": 17
        },
        {
            "value": 11.5,
            "date": "2019-4-25",
            "l": 7,
            "u": 16
        },
        {
            "value": 11.0,
            "date": "2019-4-26",
            "l": 6,
            "u": 16
        },
        {
            "value": 12.0,
            "date": "2019-4-27",
            "l": 10,
            "u": 14
        },
        {
            "value": 12.0,
            "date": "2019-4-28",
            "l": 10,
            "u": 14
        },
        {
            "value": 12.0,
            "date": "2019-4-29",
            "l": 9,
            "u": 15
        },
        {
            "value": 17.0,
            "date": "﻿2019-5-01",
            "l": 11,
            "u": 23
        },
        {
            "value": 20.0,
            "date": "2019-5-2",
            "l": 13,
            "u": 27
        },
        {
            "value": 20.0,
            "date": "2019-5-3",
            "l": 15,
            "u": 25
        },
        {
            "value": 18.5,
            "date": "2019-5-4",
            "l": 15,
            "u": 22
        },
        {
            "value": 17.0,
            "date": "2019-5-5",
            "l": 12,
            "u": 22
        },
        {
            "value": 14.5,
            "date": "2019-5-6",
            "l": 10,
            "u": 19
        },
        {
            "value": 17.5,
            "date": "2019-5-7",
            "l": 14,
            "u": 21
        },
        {
            "value": 17.0,
            "date": "2019-5-8",
            "l": 14,
            "u": 20
        },
        {
            "value": 17.5,
            "date": "2019-5-9",
            "l": 13,
            "u": 22
        },
        {
            "value": 18.0,
            "date": "2019-5-10",
            "l": 14,
            "u": 22
        },
        {
            "value": 19.0,
            "date": "2019-5-11",
            "l": 16,
            "u": 22
        },
        {
            "value": 18.5,
            "date": "2019-5-12",
            "l": 14,
            "u": 23
        },
        {
            "value": 16.0,
            "date": "2019-5-13",
            "l": 12,
            "u": 20
        },
        {
            "value": 18.0,
            "date": "2019-5-14",
            "l": 15,
            "u": 21
        },
        {
            "value": 17.5,
            "date": "2019-5-15",
            "l": 14,
            "u": 21
        },
        {
            "value": 18.0,
            "date": "2019-5-16",
            "l": 15,
            "u": 21
        },
        {
            "value": 16.5,
            "date": "2019-5-17",
            "l": 15,
            "u": 18
        },
        {
            "value": 17.0,
            "date": "2019-5-18",
            "l": 14,
            "u": 20
        },
        {
            "value": 20.0,
            "date": "2019-5-19",
            "l": 15,
            "u": 25
        },
        {
            "value": 19.5,
            "date": "2019-5-20",
            "l": 15,
            "u": 24
        },
        {
            "value": 22.5,
            "date": "2019-5-21",
            "l": 16,
            "u": 29
        },
        {
            "value": 26.0,
            "date": "2019-5-22",
            "l": 20,
            "u": 32
        },
        {
            "value": 29.0,
            "date": "2019-5-23",
            "l": 22,
            "u": 36
        },
        {
            "value": 24.5,
            "date": "2019-5-24",
            "l": 19,
            "u": 30
        },
        {
            "value": 22.0,
            "date": "2019-5-25",
            "l": 19,
            "u": 25
        },
        {
            "value": 19.5,
            "date": "2019-5-26",
            "l": 17,
            "u": 22
        },
        {
            "value": 20.0,
            "date": "2019-5-27",
            "l": 16,
            "u": 24
        },
        {
            "value": 22.0,
            "date": "2019-5-28",
            "l": 17,
            "u": 27
        },
        {
            "value": 24.5,
            "date": "2019-5-29",
            "l": 19,
            "u": 30
        },
        {
            "value": 19.5,
            "date": "2019-5-30",
            "l": 16,
            "u": 23
        },
        {
            "value": 22.5,
            "date": "2019-5-31",
            "l": 17,
            "u": 28
        },
        {
            "value": 24.0,
            "date": "﻿2019-6-01",
            "l": 18,
            "u": 30
        },
        {
            "value": 24.5,
            "date": "2019-6-2",
            "l": 20,
            "u": 29
        },
        {
            "value": 26.0,
            "date": "2019-6-3",
            "l": 21,
            "u": 31
        },
        {
            "value": 25.5,
            "date": "2019-6-4",
            "l": 21,
            "u": 30
        },
        {
            "value": 24.5,
            "date": "2019-6-5",
            "l": 21,
            "u": 28
        },
        {
            "value": 20.0,
            "date": "2019-6-6",
            "l": 18,
            "u": 22
        },
        {
            "value": 22.0,
            "date": "2019-6-7",
            "l": 19,
            "u": 25
        },
        {
            "value": 22.5,
            "date": "2019-6-8",
            "l": 19,
            "u": 26
        },
        {
            "value": 22.0,
            "date": "2019-6-9",
            "l": 18,
            "u": 26
        },
        {
            "value": 21.5,
            "date": "2019-6-10",
            "l": 17,
            "u": 26
        },
        {
            "value": 20.0,
            "date": "2019-6-11",
            "l": 17,
            "u": 23
        },
        {
            "value": 20.0,
            "date": "2019-6-12",
            "l": 17,
            "u": 23
        },
        {
            "value": 20.5,
            "date": "2019-6-13",
            "l": 18,
            "u": 23
        },
        {
            "value": 22.0,
            "date": "2019-6-14",
            "l": 19,
            "u": 25
        },
        {
            "value": 23.0,
            "date": "2019-6-15",
            "l": 19,
            "u": 27
        },
        {
            "value": 22.0,
            "date": "2019-6-16",
            "l": 20,
            "u": 24
        },
        {
            "value": 23.0,
            "date": "2019-6-17",
            "l": 20,
            "u": 26
        },
        {
            "value": 23.0,
            "date": "2019-6-18",
            "l": 20,
            "u": 26
        },
        {
            "value": 23.5,
            "date": "2019-6-19",
            "l": 20,
            "u": 27
        },
        {
            "value": 22.5,
            "date": "2019-6-20",
            "l": 20,
            "u": 25
        },
        {
            "value": 23.0,
            "date": "2019-6-21",
            "l": 20,
            "u": 26
        },
        {
            "value": 23.0,
            "date": "2019-6-22",
            "l": 19,
            "u": 27
        },
        {
            "value": 23.5,
            "date": "2019-6-23",
            "l": 19,
            "u": 28
        },
        {
            "value": 22.5,
            "date": "2019-6-24",
            "l": 20,
            "u": 25
        },
        {
            "value": 22.0,
            "date": "2019-6-25",
            "l": 20,
            "u": 24
        },
        {
            "value": 21.5,
            "date": "2019-6-26",
            "l": 19,
            "u": 24
        },
        {
            "value": 23.5,
            "date": "2019-6-27",
            "l": 21,
            "u": 26
        },
        {
            "value": 24.5,
            "date": "2019-6-28",
            "l": 22,
            "u": 27
        },
        {
            "value": 25.5,
            "date": "2019-6-29",
            "l": 23,
            "u": 28
        },
        {
            "value": 25.5,
            "date": "2019-6-30",
            "l": 21,
            "u": 30
        },
        {
            "value": 23.5,
            "date": "﻿2019-7-01",
            "l": 20,
            "u": 27
        },
        {
            "value": 25.0,
            "date": "2019-7-2",
            "l": 22,
            "u": 28
        },
        {
            "value": 25.5,
            "date": "2019-7-3",
            "l": 23,
            "u": 28
        },
        {
            "value": 26.5,
            "date": "2019-7-4",
            "l": 23,
            "u": 30
        },
        {
            "value": 25.5,
            "date": "2019-7-5",
            "l": 22,
            "u": 29
        },
        {
            "value": 23.5,
            "date": "2019-7-6",
            "l": 21,
            "u": 26
        },
        {
            "value": 22.0,
            "date": "2019-7-7",
            "l": 20,
            "u": 24
        },
        {
            "value": 23.0,
            "date": "2019-7-8",
            "l": 20,
            "u": 26
        },
        {
            "value": 23.0,
            "date": "2019-7-9",
            "l": 21,
            "u": 25
        },
        {
            "value": 22.5,
            "date": "2019-7-10",
            "l": 20,
            "u": 25
        },
        {
            "value": 23.5,
            "date": "2019-7-11",
            "l": 21,
            "u": 26
        },
        {
            "value": 25.0,
            "date": "2019-7-12",
            "l": 22,
            "u": 28
        },
        {
            "value": 26.0,
            "date": "2019-7-13",
            "l": 23,
            "u": 29
        },
        {
            "value": 26.5,
            "date": "2019-7-14",
            "l": 23,
            "u": 30
        },
        {
            "value": 27.0,
            "date": "2019-7-15",
            "l": 24,
            "u": 30
        },
        {
            "value": 25.5,
            "date": "2019-7-16",
            "l": 23,
            "u": 28
        },
        {
            "value": 23.5,
            "date": "2019-7-17",
            "l": 22,
            "u": 25
        },
        {
            "value": 25.5,
            "date": "2019-7-18",
            "l": 24,
            "u": 27
        },
        {
            "value": 25.0,
            "date": "2019-7-19",
            "l": 23,
            "u": 27
        },
        {
            "value": 28.0,
            "date": "2019-7-20",
            "l": 24,
            "u": 32
        },
        {
            "value": 27.5,
            "date": "2019-7-21",
            "l": 24,
            "u": 31
        },
        {
            "value": 28.0,
            "date": "2019-7-22",
            "l": 26,
            "u": 30
        },
        {
            "value": 29.0,
            "date": "2019-7-23",
            "l": 26,
            "u": 32
        },
        {
            "value": 28.5,
            "date": "2019-7-24",
            "l": 26,
            "u": 31
        },
        {
            "value": 29.0,
            "date": "2019-7-25",
            "l": 26,
            "u": 32
        },
        {
            "value": 29.0,
            "date": "2019-7-26",
            "l": 26,
            "u": 32
        },
        {
            "value": 27.0,
            "date": "2019-7-27",
            "l": 25,
            "u": 29
        },
        {
            "value": 28.0,
            "date": "2019-7-28",
            "l": 26,
            "u": 30
        },
        {
            "value": 30.0,
            "date": "2019-7-29",
            "l": 28,
            "u": 32
        },
        {
            "value": 29.5,
            "date": "2019-7-30",
            "l": 26,
            "u": 33
        },
        {
            "value": 28.0,
            "date": "2019-7-31",
            "l": 25,
            "u": 31
        },
        {
            "value": 27.5,
            "date": "﻿2019-8-01",
            "l": 26,
            "u": 29
        },
        {
            "value": 27.0,
            "date": "2019-8-2",
            "l": 25,
            "u": 29
        },
        {
            "value": 27.0,
            "date": "2019-8-3",
            "l": 25,
            "u": 29
        },
        {
            "value": 26.5,
            "date": "2019-8-4",
            "l": 24,
            "u": 29
        },
        {
            "value": 26.5,
            "date": "2019-8-5",
            "l": 25,
            "u": 28
        },
        {
            "value": 26.5,
            "date": "2019-8-6",
            "l": 24,
            "u": 29
        },
        {
            "value": 27.0,
            "date": "2019-8-7",
            "l": 25,
            "u": 29
        },
        {
            "value": 27.5,
            "date": "2019-8-8",
            "l": 26,
            "u": 29
        },
        {
            "value": 27.5,
            "date": "2019-8-9",
            "l": 26,
            "u": 29
        },
        {
            "value": 26.0,
            "date": "2019-8-10",
            "l": 24,
            "u": 28
        },
        {
            "value": 26.0,
            "date": "2019-8-11",
            "l": 24,
            "u": 28
        },
        {
            "value": 26.0,
            "date": "2019-8-12",
            "l": 24,
            "u": 28
        },
        {
            "value": 25.0,
            "date": "2019-8-13",
            "l": 22,
            "u": 28
        },
        {
            "value": 25.0,
            "date": "2019-8-14",
            "l": 22,
            "u": 28
        },
        {
            "value": 25.0,
            "date": "2019-8-15",
            "l": 21,
            "u": 29
        },
        {
            "value": 26.0,
            "date": "2019-8-16",
            "l": 21,
            "u": 31
        },
        {
            "value": 25.5,
            "date": "2019-8-17",
            "l": 21,
            "u": 30
        },
        {
            "value": 25.0,
            "date": "2019-8-18",
            "l": 21,
            "u": 29
        },
        {
            "value": 24.0,
            "date": "2019-8-19",
            "l": 20,
            "u": 28
        },
        {
            "value": 24.5,
            "date": "2019-8-20",
            "l": 21,
            "u": 28
        },
        {
            "value": 25.0,
            "date": "2019-8-21",
            "l": 22,
            "u": 28
        },
        {
            "value": 24.5,
            "date": "2019-8-22",
            "l": 21,
            "u": 28
        },
        {
            "value": 25.0,
            "date": "2019-8-23",
            "l": 21,
            "u": 29
        },
        {
            "value": 25.5,
            "date": "2019-8-24",
            "l": 22,
            "u": 29
        },
        {
            "value": 24.5,
            "date": "2019-8-25",
            "l": 22,
            "u": 27
        },
        {
            "value": 25.0,
            "date": "2019-8-26",
            "l": 23,
            "u": 27
        },
        {
            "value": 24.0,
            "date": "2019-8-27",
            "l": 22,
            "u": 26
        },
        {
            "value": 26.0,
            "date": "2019-8-28",
            "l": 21,
            "u": 31
        },
        {
            "value": 24.0,
            "date": "2019-8-29",
            "l": 19,
            "u": 29
        },
        {
            "value": 24.0,
            "date": "2019-8-30",
            "l": 19,
            "u": 29
        },
        {
            "value": 23.0,
            "date": "﻿2019-9-01",
            "l": 20,
            "u": 26
        },
        {
            "value": 23.5,
            "date": "2019-9-2",
            "l": 20,
            "u": 27
        },
        {
            "value": 23.0,
            "date": "2019-9-3",
            "l": 20,
            "u": 26
        },
        {
            "value": 23.5,
            "date": "2019-9-4",
            "l": 20,
            "u": 27
        },
        {
            "value": 24.0,
            "date": "2019-9-5",
            "l": 21,
            "u": 27
        },
        {
            "value": 24.5,
            "date": "2019-9-6",
            "l": 22,
            "u": 27
        },
        {
            "value": 24.5,
            "date": "2019-9-7",
            "l": 20,
            "u": 29
        },
        {
            "value": 25.5,
            "date": "2019-9-8",
            "l": 22,
            "u": 29
        },
        {
            "value": 25.0,
            "date": "2019-9-9",
            "l": 22,
            "u": 28
        },
        {
            "value": 26.0,
            "date": "2019-9-10",
            "l": 22,
            "u": 30
        },
        {
            "value": 24.5,
            "date": "2019-9-11",
            "l": 22,
            "u": 27
        },
        {
            "value": 24.0,
            "date": "2019-9-12",
            "l": 21,
            "u": 27
        },
        {
            "value": 25.0,
            "date": "2019-9-13",
            "l": 22,
            "u": 28
        },
        {
            "value": 24.0,
            "date": "2019-9-14",
            "l": 20,
            "u": 28
        },
        {
            "value": 23.5,
            "date": "2019-9-15",
            "l": 21,
            "u": 26
        },
        {
            "value": 25.0,
            "date": "2019-9-16",
            "l": 21,
            "u": 29
        },
        {
            "value": 22.5,
            "date": "2019-9-17",
            "l": 19,
            "u": 26
        },
        {
            "value": 20.5,
            "date": "2019-9-18",
            "l": 15,
            "u": 26
        },
        {
            "value": 20.5,
            "date": "2019-9-19",
            "l": 18,
            "u": 23
        },
        {
            "value": 22.0,
            "date": "2019-9-20",
            "l": 19,
            "u": 25
        },
        {
            "value": 22.5,
            "date": "2019-9-21",
            "l": 19,
            "u": 26
        },
        {
            "value": 21.5,
            "date": "2019-9-22",
            "l": 16,
            "u": 27
        },
        {
            "value": 22.0,
            "date": "2019-9-23",
            "l": 17,
            "u": 27
        },
        {
            "value": 24.0,
            "date": "2019-9-24",
            "l": 19,
            "u": 29
        },
        {
            "value": 22.0,
            "date": "2019-9-25",
            "l": 18,
            "u": 26
        },
        {
            "value": 21.5,
            "date": "2019-9-26",
            "l": 18,
            "u": 25
        },
        {
            "value": 22.0,
            "date": "2019-9-27",
            "l": 18,
            "u": 26
        },
        {
            "value": 22.5,
            "date": "2019-9-28",
            "l": 18,
            "u": 27
        },
        {
            "value": 22.5,
            "date": "2019-9-29",
            "l": 18,
            "u": 27
        },
        {
            "value": 22.5,
            "date": "2019-9-30",
            "l": 18,
            "u": 27
        },
        {
            "value": 22.5,
            "date": "﻿2019-10-01",
            "l": 20,
            "u": 25
        },
        {
            "value": 22.0,
            "date": "2019-10-2",
            "l": 17,
            "u": 27
        },
        {
            "value": 23.0,
            "date": "2019-10-3",
            "l": 18,
            "u": 28
        },
        {
            "value": 20.0,
            "date": "2019-10-4",
            "l": 14,
            "u": 26
        },
        {
            "value": 15.5,
            "date": "2019-10-5",
            "l": 11,
            "u": 20
        },
        {
            "value": 16.0,
            "date": "2019-10-6",
            "l": 13,
            "u": 19
        },
        {
            "value": 15.5,
            "date": "2019-10-7",
            "l": 11,
            "u": 20
        },
        {
            "value": 17.0,
            "date": "2019-10-8",
            "l": 13,
            "u": 21
        },
        {
            "value": 19.0,
            "date": "2019-10-9",
            "l": 17,
            "u": 21
        },
        {
            "value": 17.0,
            "date": "2019-10-10",
            "l": 15,
            "u": 19
        },
        {
            "value": 18.0,
            "date": "2019-10-11",
            "l": 16,
            "u": 20
        },
        {
            "value": 18.5,
            "date": "2019-10-12",
            "l": 15,
            "u": 22
        },
        {
            "value": 17.0,
            "date": "2019-10-13",
            "l": 13,
            "u": 21
        },
        {
            "value": 12.0,
            "date": "2019-10-14",
            "l": 8,
            "u": 16
        },
        {
            "value": 12.5,
            "date": "2019-10-15",
            "l": 9,
            "u": 16
        },
        {
            "value": 14.5,
            "date": "2019-10-16",
            "l": 12,
            "u": 17
        },
        {
            "value": 14.5,
            "date": "2019-10-17",
            "l": 12,
            "u": 17
        },
        {
            "value": 16.0,
            "date": "2019-10-18",
            "l": 11,
            "u": 21
        },
        {
            "value": 17.0,
            "date": "2019-10-19",
            "l": 13,
            "u": 21
        },
        {
            "value": 18.0,
            "date": "2019-10-20",
            "l": 14,
            "u": 22
        },
        {
            "value": 18.0,
            "date": "2019-10-21",
            "l": 14,
            "u": 22
        },
        {
            "value": 19.0,
            "date": "2019-10-22",
            "l": 16,
            "u": 22
        },
        {
            "value": 17.5,
            "date": "2019-10-23",
            "l": 13,
            "u": 22
        },
        {
            "value": 18.0,
            "date": "2019-10-24",
            "l": 14,
            "u": 22
        },
        {
            "value": 11.0,
            "date": "2019-10-25",
            "l": 7,
            "u": 15
        },
        {
            "value": 11.5,
            "date": "2019-10-26",
            "l": 8,
            "u": 15
        },
        {
            "value": 14.5,
            "date": "2019-10-27",
            "l": 10,
            "u": 19
        },
        {
            "value": 13.5,
            "date": "2019-10-28",
            "l": 7,
            "u": 20
        },
        {
            "value": 13.5,
            "date": "2019-10-29",
            "l": 9,
            "u": 18
        },
        {
            "value": 16.5,
            "date": "2019-10-30",
            "l": 12,
            "u": 21
        },
        {
            "value": 17.5,
            "date": "2019-10-31",
            "l": 12,
            "u": 23
        },
        {
            "value": 17.5,
            "date": "﻿2019-11-1",
            "l": 14,
            "u": 21
        },
        {
            "value": 16.0,
            "date": "2019-11-2",
            "l": 12,
            "u": 20
        },
        {
            "value": 14.0,
            "date": "2019-11-3",
            "l": 9,
            "u": 19
        },
        {
            "value": 12.0,
            "date": "2019-11-4",
            "l": 8,
            "u": 16
        },
        {
            "value": 13.0,
            "date": "2019-11-5",
            "l": 9,
            "u": 17
        },
        {
            "value": 14.0,
            "date": "2019-11-6",
            "l": 10,
            "u": 18
        },
        {
            "value": 10.5,
            "date": "2019-11-7",
            "l": 5,
            "u": 16
        },
        {
            "value": 11.0,
            "date": "2019-11-8",
            "l": 7,
            "u": 15
        },
        {
            "value": 14.5,
            "date": "2019-11-9",
            "l": 11,
            "u": 18
        },
        {
            "value": 13.0,
            "date": "2019-11-10",
            "l": 9,
            "u": 17
        },
        {
            "value": 15.0,
            "date": "2019-11-11",
            "l": 12,
            "u": 18
        },
        {
            "value": 15.5,
            "date": "2019-11-12",
            "l": 12,
            "u": 19
        },
        {
            "value": 9.0,
            "date": "2019-11-13",
            "l": 2,
            "u": 16
        },
        {
            "value": 11.5,
            "date": "2019-11-14",
            "l": 8,
            "u": 15
        },
        {
            "value": 14.0,
            "date": "2019-11-15",
            "l": 10,
            "u": 18
        },
        {
            "value": 16.0,
            "date": "2019-11-16",
            "l": 14,
            "u": 18
        },
        {
            "value": 9.5,
            "date": "2019-11-17",
            "l": 2,
            "u": 17
        },
        {
            "value": 2.0,
            "date": "2019-11-18",
            "l": -2,
            "u": 6
        },
        {
            "value": 6.0,
            "date": "2019-11-19",
            "l": 2,
            "u": 10
        },
        {
            "value": 10.0,
            "date": "2019-11-20",
            "l": 8,
            "u": 12
        },
        {
            "value": 11.5,
            "date": "2019-11-21",
            "l": 9,
            "u": 14
        },
        {
            "value": 15.0,
            "date": "2019-11-22",
            "l": 13,
            "u": 17
        },
        {
            "value": 14.5,
            "date": "2019-11-23",
            "l": 12,
            "u": 17
        },
        {
            "value": 8.0,
            "date": "2019-11-24",
            "l": 3,
            "u": 13
        },
        {
            "value": 3.0,
            "date": "2019-11-25",
            "l": 0,
            "u": 6
        },
        {
            "value": 4.5,
            "date": "2019-11-26",
            "l": 2,
            "u": 7
        },
        {
            "value": 4.5,
            "date": "2019-11-27",
            "l": 1,
            "u": 8
        },
        {
            "value": 3.0,
            "date": "2019-11-28",
            "l": 0,
            "u": 6
        },
        {
            "value": 4.0,
            "date": "2019-11-29",
            "l": 2,
            "u": 6
        },
        {
            "value": 6.0,
            "date": "2019-11-30",
            "l": 4,
            "u": 8
        },
        {
            "value": 3.0,
            "date": "﻿2019-12-1",
            "l": -1,
            "u": 7
        },
        {
            "value": 2.0,
            "date": "2019-12-2",
            "l": -1,
            "u": 5
        },
        {
            "value": 4.0,
            "date": "2019-12-3",
            "l": -1,
            "u": 9
        },
        {
            "value": 6.0,
            "date": "2019-12-4",
            "l": 1,
            "u": 11
        },
        {
            "value": 2.0,
            "date": "2019-12-5",
            "l": -3,
            "u": 7
        },
        {
            "value": 0.5,
            "date": "2019-12-6",
            "l": -3,
            "u": 4
        },
        {
            "value": 5.5,
            "date": "2019-12-7",
            "l": 2,
            "u": 9
        },
        {
            "value": 6.5,
            "date": "2019-12-8",
            "l": 3,
            "u": 10
        },
        {
            "value": 7.5,
            "date": "2019-12-9",
            "l": 3,
            "u": 12
        },
        {
            "value": 7.0,
            "date": "2019-12-10",
            "l": 0,
            "u": 14
        },
        {
            "value": 3.0,
            "date": "2019-12-11",
            "l": -3,
            "u": 9
        },
        {
            "value": 4.0,
            "date": "2019-12-12",
            "l": 0,
            "u": 8
        },
        {
            "value": 5.5,
            "date": "2019-12-13",
            "l": 2,
            "u": 9
        },
        {
            "value": 5.0,
            "date": "2019-12-14",
            "l": 3,
            "u": 7
        },
        {
            "value": 8.0,
            "date": "2019-12-15",
            "l": 6,
            "u": 10
        },
        {
            "value": 8.0,
            "date": "2019-12-16",
            "l": 5,
            "u": 11
        },
        {
            "value": 4.5,
            "date": "2019-12-17",
            "l": 1,
            "u": 8
        },
        {
            "value": 1.5,
            "date": "2019-12-18",
            "l": -2,
            "u": 5
        },
        {
            "value": 2.0,
            "date": "2019-12-19",
            "l": -2,
            "u": 6
        },
        {
            "value": 2.5,
            "date": "2019-12-20",
            "l": -1,
            "u": 6
        },
        {
            "value": 5.5,
            "date": "2019-12-21",
            "l": 3,
            "u": 8
        },
        {
            "value": 5.5,
            "date": "2019-12-22",
            "l": 1,
            "u": 10
        },
        {
            "value": 2.5,
            "date": "2019-12-23",
            "l": 0,
            "u": 5
        },
        {
            "value": 3.5,
            "date": "2019-12-24",
            "l": 0,
            "u": 7
        },
        {
            "value": 4.5,
            "date": "2019-12-25",
            "l": 2,
            "u": 7
        },
        {
            "value": 0.5,
            "date": "2019-12-26",
            "l": -3,
            "u": 4
        },
        {
            "value": 3.0,
            "date": "2019-12-27",
            "l": -1,
            "u": 7
        },
        {
            "value": 6.0,
            "date": "2019-12-28",
            "l": 3,
            "u": 9
        },
        {
            "value": 7.0,
            "date": "2019-12-29",
            "l": 4,
            "u": 10
        },
        {
            "value": 0.0,
            "date": "2019-12-30",
            "l": -5,
            "u": 5
        },
        {
            "value": -0.5,
            "date": "2019-12-31",
            "l": -7,
            "u": 6
        }
    ]
    var dom = document.getElementById("tem");
    var myChart = echarts.init(dom);
    myChart.clear()
    var app = {};
    var colorlist = ['#ddd1d1', '#9ca8b8', '#9ca8b8']
    var option;
    myChart.showLoading();

    myChart.hideLoading();

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);
    myChart.setOption(option = {
        title: {
            text: '2019年日照市气温变化情况',
            left: 'center',
            // top: ,
            textStyle: {
                color: '#606060',
                fontSize: 16
            }
        },
        color: ['#9ca8b8', '#333'],
        legend: {
            data: ['平均温度', '温差'],
            x: 'right',
            // y: '6%',
            textStyle: {
                // color: '#606060',
                fontSize: 10
            },

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#9ca8b8',
                    borderColor: '#9ca8b8',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    color: '#222'
                }
            },
            formatter: function (params) {

                return params[2].name + '<br />' + ((params[2].value - base)).toFixed(1) + '°C';
            }
        },
        dataZoom: [{
            type: 'slider',
            height: 10,
            xAxisIndex: 0,
            // filterMode: 'none'
        },
            {
                type: 'inside',
                xAxisIndex: 0,
                // filterMode: 'none'
            },
        ],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '15%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(function (item) {
                return item.date;
            }),
            axisLabel: {
                formatter: function (value, idx) {
                    var date = new Date(value);
                    return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                }
            },
            boundaryGap: false
        },
        yAxis: {
            name: "平均温度",
            type: "value",
            axisLabel: {
                formatter: function (val) {
                    return (val - base);
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ((params.value - base)).toFixed(1);
                    }
                }
            },
            // splitNumber: 3
        },
        series: [{
            name: '温差',
            type: 'line',
            data: data.map(function (item) {
                return item.l + base;
            }),
            smooth: true,
            itemStyle: {
                color: 'rgb(255,173,62)'
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            name: '温差',
            type: 'line',
            data: data.map(function (item) {
                return item.u - item.l;
            }),
            smooth: true,
            itemStyle: {
                color: 'rgb(255,173,62)'
            },
            areaStyle: {
                color: 'rgb(255,173,62)'
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            name: '平均温度',
            type: 'line',
            data: data.map(function (item) {
                return item.value + base;
            }),
            hoverAnimation: false,
            // symbolSize: 6,
            itemStyle: {
                color: 'rgb(239,93,102)'
            },
            lineStyle: {
                width: 1.5
            },
            showSymbol: false
        }]
    });
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}