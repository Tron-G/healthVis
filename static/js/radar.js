let obj = {
	"日照市中医医院": {
		"心电": 10,
		"眼科": 2,
		"外科": 3,
		"CT": 6,
		"彩超": 9,
		"耳鼻喉": 6,
		"口腔科": 5,
		"内科": 9
	},
	"五莲县人民医院": {
		"心电": 5,
		"眼科": 6,
		"外科": 8,
		"CT": 10,
		"彩超": 6,
		"耳鼻喉": 2,
		"口腔科": 9,
		"内科": 6
	},
	"日照市人民医院": {
		"心电": 2,
		"眼科": 2,
		"外科": 3,
		"CT": 6,
		"彩超": 5,
		"耳鼻喉": 7,
		"口腔科": 6,
		"内科": 9
	},
	"日照市岚山区人民医院": {
		"心电": 6,
		"眼科": 9,
		"外科": 5,
		"CT": 4,
		"彩超": 3,
		"耳鼻喉": 2,
		"口腔科": 4,
		"内科": 5
	},
}
// console.log(Object.keys(obj['日照市岚山区人民医院']))
 //颜色
function drawRose(obj) {
	console.log(Object.keys(obj).length)
	if(Object.keys(obj).length==4){
		let colorArr = ['rgba(0,245,255, 0.5)', 'rgba(83,134,139, 0.5)',
		'rgba(255,130,71,0.5)', 'rgba(	238 ,99 ,99, 0.6)',
		'rgba(222,134,85, 0.8)'
	];
	list = (Object.keys(obj['日照市岚山区人民医院']))

	hospital = Object.keys(obj)
	console.log(Object.keys(obj))
	counts = []
	for (let i = 0; i < 4; i++) {
		nums = []
		for (let j = 0; j < 8; j++) {
			nums.push(obj[hospital[i]][list[j]])
		}
		// console.log(nums)
		counts.push(nums)
	}
	console.log(counts)

	let Rose = echarts.init(document.getElementById('radar'));

	let data1 = [];
	let data2 = [];
	let data3 = [];
	let data4 = [];
	let labelData = [];
	for (let i = 0; i < counts[0].length; ++i) {
		data1.push({
			value: counts[0][i],
			name: list[i]
		});
		data2.push({
			value: counts[1][i],
			name: list[i]
		});
		data3.push({
			value: counts[2][i],
			name: list[i]
		});
		data4.push({
			value: counts[3][i],
			name: list[i]
		});
		labelData.push({
			value: 1,
			name: list[i]
		});
	}
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
		    // show:false,
		    x: 'left',
		    y: 'bottom',
		    data: ['日照市中医医院', '五莲县人民医院', '日照市人民医院', '日照市岚山区人民医院']
		},
		series: [{
				type: 'pie',
				data: data1,
				name: "日照市中医医院",
				roseType: 'area',
				radius: ['0%', '65%'],
				itemStyle: {
					normal: {
						color: colorArr[0],
						borderColor: '#22C3AA'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				label: {
					normal: {
						show: false
					}
				}
			},
			{
				type: 'pie',
				data: data2,
				name: "五莲县人民医院",
				roseType: 'area',
				radius: ['0%', '55%'],
				itemStyle: {
					normal: {
						color: colorArr[1],
						borderColor: '#22C3AA'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				label: {
					normal: {
						show: false
					}
				}
			},
			{
				type: 'pie',
				data: data3,
				name: "日照市人民医院",
				roseType: 'area',
				radius: ['0%', '35%'],
				itemStyle: {
					normal: {
						color: colorArr[2],
						borderColor: '#22C3AA'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				label: {
					normal: {
						show: false
					}
				}
			}, {
				type: 'pie',
				data: data4,
				name: "日照市岚山区人民医院",
				roseType: 'area',
				radius: ['0%', '20%'],
				itemStyle: {
					normal: {
						color: colorArr[3],
						borderColor: '#22C3AA'
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				label: {
					normal: {
						show: false
					}
				}
			}, {
				type: 'pie',
				data: labelData,
				radius: ['68%', '80%'],
				zlevel: -2,
				itemStyle: {
					normal: {
						color: "#668B8B",
						borderColor: 'white'
					}
				},
				label: {
					normal: {
						position: 'inside',
						color:"white",
						fontSize:10
					}
				}
			}
		]
	}
	Rose.setOption(option)
	}
	else if(Object.keys(obj).length==1){
		// console.log(1)
		let data=[]
	let list=Object.keys(obj[Object.keys(obj)[0]])
	console.log(list)
	for(let i=0;i<8;i++){
		let d={
			name:list[i],
			value:obj[Object.keys(obj)[0]][list[i]]
		}
		data.push(d)
	}
	console.log(data)
	let colorArr = ['rgba(0,245,255, 0.5)', 'rgba(83,134,139, 0.5)',
		'rgba(255,130,71,0.5)', 'rgba(	238 ,99 ,99, 0.6)',
		'rgba(222,134,85, 0.8)'
	];
	let Rose = echarts.init(document.getElementById('radar'));
	Rose.clear()
	let option = {
    // backgroundColor: '#19181d',
    title:{
      text:Object.keys(obj)[0] ,
      left: "center",
      top:"2%"
    },
    color: [
        "#f9ed69", "#f08a5d", "#b83b5e", "#6a2c70", "#6DBC49",
        "#37B44E", "#3DBA78", "#14ADCF"
    ],
    legend: {
        left: 'center',
        // orient: 'vertical',
        top: "bottom",
        // type: "scroll",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#000',
        },
    },
    calculable: true,
    series: [
        {
            name: '',
            type: 'pie',
            startAngle: 0,
            clockwise: false,
            radius: ["25%", "85%"],
            center: ['50%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                formatter: '{c}',

                textStyle: {
                    fontWeight: '100',
                    fontFamily: 'Microsoft YaHei',
                    color: '#000',
                    // fontSize: 8
                },
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
                    borderWidth: 1,
                    borderColor: '#19181d',
                    shadowColor: '#19181d',
                    shadowBlur: 10,
                }
            },
            data: data.sort(function(a, b) {
                return b.value - a.value;
            }),
        },


    ]
};
	Rose.setOption(option)

	}

}
