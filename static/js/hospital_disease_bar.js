/**
 * @description 绘制指定时间和医院的高发疾病柱状图
 * @param {obj} disease  高发疾病数据
 */
function drawHospitalBar(disease) {
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
    let app = {};

    let option;

    option = {
        title: {
            text: hospital + season + '的高发疾病',
            left: 'center',
            top: '5%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '5%',
            right: '2%',
            bottom: '1%',
            top: '15%',
            containLabel: true
        },
        xAxis: [
            {
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
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '人数',
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                    normal: {
                        color: '#4a47a3'
                    }
                },
                data: num
            }
        ]
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}