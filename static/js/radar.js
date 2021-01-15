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

// drawRose(obj)
