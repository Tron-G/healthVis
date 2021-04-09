/**
 * @description 绘制指定时间和医院的高发疾病柱状图
 * @param {object} disease  高发疾病数据
 * @param {object} diet_disease  饮食疾病数据
 */
function drawHospitalBar(disease, diet_disease = []) {
    let hospital = disease["hospital"];
    let season = TRANSPORT_DATA["season"];
    switch (season) {
        case "spring":
            season = "春季";
            break;
        case "summer":
            season = "夏季";
            break;
        case "fall":
            season = "秋季";
            break;
        case "winter":
            season = "冬季";
            break;
        default:
            season = "全年";
            break;
    }
    if (hospital === "all") {
        hospital = "全部医院";
    }
    //console.log(disease);
    if (diet_disease.length === 0) {
        let detail_data = disease['disease'];
        let x_data = [];
        let num = [];
        for (let i in detail_data) {
            let name = Object.keys(detail_data[i])[0];
            x_data.push(name);
            num.push(detail_data[i][name]["total"]);
        }
        // console.log(x_data);
        // console.log(num);
        let dom = document.getElementById("hospital_disease_bar");
        let myChart = echarts.init(dom);
        myChart.clear();
        let app = {};

        let option = {
            title: {
                text: hospital + season + '的高发疾病',
                left: 'center',
                top: '5%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '5%',
                right: '2%',
                bottom: '1%',
                top: '15%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: x_data,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    fontSize: 9,
                    interval: 0,
                    rotate: 40
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '人数',
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                    normal: {
                        color: '#8fa7a5'
                    }
                },
                data: num
            }]
        };
        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    } else {
        let detail_data = disease['disease'];
        let x_data = [];
        let num = [];
        let num2 = [];
        for (let i in detail_data) {
            let name = Object.keys(detail_data[i])[0];
            x_data.push(name);
            num.push(detail_data[i][name]["total"]);

        }
        console.log(x_data)
        let list = []
        for (let i = 0; i < diet_disease.length; i++) {
            list.push(diet_disease[i][0])
        }
        console.log(list)

        x_data.forEach(x => {
            if (list.includes(x)) {
                for (let i = 0; i < diet_disease.length; i++) {
                    if (x === diet_disease[i][0]) {
                        num2.push(diet_disease[i][1]);
                    }
                }
            } else {
                num2.push(0);
            }
        })

        let main = echarts.init(document.getElementById('hospital_disease_bar'));
        let colors = ['#5470C6', '#000'];

        let option = {
            title: {
                text: hospital + season + '的高发疾病',
                left: 'center',
                top: '2%'
            },
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                top: '20%'
            },
            legend: {
                data: ['高发疾病', '饮食关联疾病'],
                top:"10%"
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    fontSize: 9,
                    interval: 0,
                    rotate: 45
                },
                data: x_data
            }],
            yAxis: [{
                type: 'value',
                name: '人数',
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: colors[1]
                    }
                },
                axisLabel: {
                    formatter: '{value} 人'
                }
            },
                {
                    type: 'value',
                    name: '指数',
                    max:1,
                    position: 'right',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },

            ],
            series: [{
                name: '高发疾病',
                type: 'bar',
                barWidth: 8,
                barGap: "2%",
                data: num
            },
                {
                    name: '饮食关联疾病',
                    type: 'bar',
                    barWidth: 8,
                    yAxisIndex: 1,
                    data: num2
                },

            ]
        };
        main.setOption(option)
    }

}