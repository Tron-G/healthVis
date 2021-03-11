/**
 * @description 疾病年龄分布柱状图
 */
function drawTowBar1(obj) { //改参数
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
	var option = {
		baseOption: {
			title: {
				text: obj['disease_name'],
				left: "center",
				top: "1%",
				textStyle: {
					fontSize: 15
				}
			},
			// backgroundColor: background,
			timeline: {
				show: false,
				top: 0,
				data: []
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
			legend: {
				top: '8%',
				left: '31%',
				itemWidth: 10,
				itemHeight: 10,
				itemGap: 100,
				icon: 'horizontal',
				textStyle: {
					color: '#000',
					fontSize: 8,
				},
				data: ['男性', '女性']
			},
			grid: [{
				show: false,
				left: '2%',
				top: '16%',
				bottom: '8%',
				containLabel: true,
				width: '35%'
			}, {
				show: false,
				left: '51%',
				top: '16%',
				bottom: '8%',
				width: '0%'
			}, {
				show: false,
				right: '2%',
				top: '16%',
				bottom: '8%',
				containLabel: true,
				width: '35%'
			}],
			xAxis: [{
				// show:"false",
				type: 'value',
				inverse: true,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				position: 'bottom',
				axisLabel: {
					show: false,
					//     formatter:function(value)
					//   {
					//         //return '\n\n\n\n' + value;
					//      // return '\n' + value
					//      return value
					//      // return value + 'virus'
					//     // return value.split("").join("\n");
					//   },
					textStyle: {
						color: '#000'
					}
				},
				splitLine: {
					show: false
				}
			}, {
				gridIndex: 1,
				show: false,
			}, {
				gridIndex: 2,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				position: 'bottom',
				axisLabel: {
					show: false,
					interval: 0,
					// formatter:function(value)
					//   {
					//         //return '\n\n\n\n' + value;
					//     //  return '\n' + value
					//   return value
					//      // return value + 'virus'
					//     // return value.split("").join("\n");
					//   },
					textStyle: {
						color: 'white'
					}
				},
				splitLine: {
					show: false
				}
			}],
			yAxis: [{
				type: 'category',
				inverse: true,
				position: 'right',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				data: list
			}, {
				gridIndex: 1,
				type: 'category',
				inverse: true,
				position: 'left',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					//  formatter:function(value)
					//   {

					//      // return '\n' + value
					//      return value + '\n\n'
					//      // return value + 'virus'
					//   },
					textStyle: {
						color: '#000',
						fontSize: 10
					}

				},
				data: list.map(function (value) {
					return {
						value: value,
						textStyle: {
							align: 'center'
						}
					}
				})
			}, {
				gridIndex: 2,
				type: 'category',
				inverse: true,
				position: 'left',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false

				},
				data: list
			}],
			series: []

		},
		options: []
	}

	option.baseOption.timeline.data.push(timeLineData[0])
	option.options.push({
		series: [{
				type: 'pictorialBar',
				xAxisIndex: 0,
				yAxisIndex: 0,
				// symbol: 'rect',
				itemStyle: {
					normal: {
						color: 'rgba(0,0,0,0)'
					}
				},
				barWidth: 15,
				calculable: true,
				// symbolRepeat: true,
				// symbolSize: 14,
				data: lineData,
				barGap: '-100%',
				barCategoryGap: 0,
				label: {
					normal: {
						show: true,
						formatter: (series) => {
							return lastYearData[timeLineData[0]][series.dataIndex]
						},
						position: 'insideTopLeft',
						textStyle: {
							color: '#000',
							fontSize: 10,
						},
						offset: [0, -10],
					}
				},
				z: -100,
//				animationEasing: 'elasticOut',
//				animationDelay: function (dataIndex, params) {
//					return params.index * 30;
//				}
			}, {
				name: '男性',
				type: 'bar',
				xAxisIndex: 0,
				yAxisIndex: 0,
				//  symbol: 'rect',
				barWidth: 5,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: colors[1].start
							},
							{
								offset: 1,
								color: colors[1].end
							}
						]),
					}
				},
				// symbolRepeat: true,
				// symbolSize: 14,
				data: lastYearData[timeLineData[0]]
				// animationEasing: 'elasticOut',
				// animationDelay: function (dataIndex, params) {
				//     return params.index * 30 * 1.1;
				// }
			},
			{
				type: 'pictorialBar',
				xAxisIndex: 2,
				yAxisIndex: 2,
				symbol: 'rect',
				itemStyle: {
					normal: {
						color: 'rgba(0,0,0,0)'
					}
				},
				barWidth: 15,
				symbolRepeat: true,
				symbolSize: 14,
				data: lineData,
				barGap: '-100%',
				barCategoryGap: 0,
				label: {
					normal: {
						show: true,
						formatter: (series) => {
							return thisYearData[timeLineData[0]][series.dataIndex]
						},
						position: 'insideTopRight',
						textStyle: {
							color: '#000',
							fontSize: 10,
						},
						offset: [0, -10],
					}
				},
				z: -100,
				animationEasing: 'elasticOut',
				animationDelay: function (dataIndex, params) {
					return params.index * 30;
				}
			}, {
				name: '女性',
				type: 'bar',
				xAxisIndex: 2,
				yAxisIndex: 2,
				//   symbol: 'rect',
				barWidth: 5,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: colors[0].start
							},
							{
								offset: 1,
								color: colors[0].end
							}
						]),
					}
				},
				// symbolRepeat: true,
				// symbolSize: 14,
				data: thisYearData[timeLineData[0]]
				// animationEasing: 'elasticOut',
				// animationDelay: function (dataIndex, params) {
				//     return params.index * 30 * 1.1;
				// }
			}
		]
	});

	TwoBar2.setOption(option)

}
/**
 * @description 月份疾病性别分布柱状图
 */
function drawTowbar2(obj) { //改参数

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
		var num = num1 +5;
	} else {
		var num = num2 +5;
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
	if(TRANSPORT_DATA["month"]==0){
	    month="全年"
	}
	else{
	    month=TRANSPORT_DATA["month"]+"月"
	}
	var option = {
		baseOption: {
			title: {
				text: month+"高发疾病数据",
				top:"1%",
				left:"center",
				textStyle:{
				    fontSize:15
				}
			},
			// backgroundColor: background,
			timeline: {
				show: false,
				top: 0,
				data: []
			},
			legend: {
				top: '7%',
				left: '31%',
				itemWidth: 10,
				itemHeight: 10,
				itemGap: 100,
				icon: 'horizontal',
				textStyle: {
					color: '#000',
					fontSize: 8
				},
				data: ['男性', '女性']
			},
			grid: [{
				show: false,
				left: '0%',
				top: '12%',
				bottom: '5%',
				containLabel: true,
				width: '35%'
			}, {
				show: false,
				left: '50%',
				top: '12%',
				bottom: '5%',
				width: '0%'
			}, {
				show: false,
				left: '61%',
				top: '12s%',
				bottom: '5%',
				containLabel: true,
				width: '38%'
			}],
			xAxis: [{
				// show:"false",
				type: 'value',
				inverse: true,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				position: 'bottom',
				axisLabel: {
					show: false,
					//     formatter:function(value)
					//   {
					//         //return '\n\n\n\n' + value;
					//      // return '\n' + value
					//      return value
					//      // return value + 'virus'
					//     // return value.split("").join("\n");
					//   },
					textStyle: {
						color: '#000'
					}
				},
				splitLine: {
					show: false
				}
			}, {
				gridIndex: 1,
				show: false,
			}, {
				gridIndex: 2,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				position: 'bottom',
				axisLabel: {
					show: false,
					interval: 0,
					// formatter:function(value)
					//   {
					//         //return '\n\n\n\n' + value;
					//     //  return '\n' + value
					//   return value
					//      // return value + 'virus'
					//     // return value.split("").join("\n");
					//   },
					textStyle: {
						color: 'white'
					}
				},
				splitLine: {
					show: false
				}
			}],
			yAxis: [{
				type: 'category',
				inverse: true,
				position: 'right',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false,

				},
				data: list
			}, {
				gridIndex: 1,
				type: 'category',
				inverse: true,
				position: 'left',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: true,
					//  formatter:function(value)
					//   {

					//      // return '\n' + value
					//      return value + '\n\n'
					//      // return value + 'virus'
					//   },
					textStyle: {
						color: '#000',
						fontSize: 8,
						// lineHeight:2
					}

				},
				data: list.map(function (value) {
					return {
						value: value,
						textStyle: {
							align: 'center'
						}
					}
				})
			}, {
				gridIndex: 2,
				type: 'category',
				inverse: true,
				position: 'left',
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false

				},
				data: list
			}],
			series: []

		},
		options: []
	}

	option.baseOption.timeline.data.push(timeLineData[0])
	option.options.push({
		series: [{
				type: 'pictorialBar',
				xAxisIndex: 0,
				yAxisIndex: 0,
				// symbol: 'rect',
				itemStyle: {
					normal: {
						color: 'rgba(0,0,0,0)'
					}
				},
				barWidth: 5,
				calculable: true,
				// symbolRepeat: true,
				// symbolSize: 14,
				data: lineData,
				barGap: '-100%',
				barCategoryGap: 0,
				label: {
					normal: {
						show: true,
						formatter: (series) => {
							return lastYearData[timeLineData[0]][series.dataIndex]
						},
						position: 'insideTopLeft',
						textStyle: {
							color: '#000',
							fontSize: 8,
						},
						offset: [0, -10],
					}
				},
				z: -100,
				animationEasing: 'elasticOut',
				animationDelay: function (dataIndex, params) {
					return params.index * 30;
				}
			}, {
				name: '男性',
				type: 'bar',
				xAxisIndex: 0,
				yAxisIndex: 0,
				//  symbol: 'rect',
				barWidth: 5,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: colors[1].start
							},
							{
								offset: 1,
								color: colors[1].end
							}
						]),
					}
				},
				// symbolRepeat: true,
				// symbolSize: 14,
				data: lastYearData[timeLineData[0]]
//				 animationEasing: 'elasticOut',
//				 animationDelay: function (dataIndex, params) {
//				     return params.index * 30 * 1.1;
//				 }
			},
			{
				type: 'pictorialBar',
				xAxisIndex: 2,
				yAxisIndex: 2,
				symbol: 'rect',
				itemStyle: {
					normal: {
						color: 'rgba(0,0,0,0)'
					}
				},
				barWidth: 5,
				symbolRepeat: true,
				symbolSize: 14,
				data: lineData,
				barGap: '-100%',
				barCategoryGap: 0,
				label: {
					normal: {
						show: true,
						formatter: (series) => {
							return thisYearData[timeLineData[0]][series.dataIndex]
						},
						position: 'insideTopRight',
						textStyle: {
							color: '#000',
							fontSize: 8,
						},
						offset: [0, -10],
					}
				},
				z: -100,
				animationEasing: 'elasticOut',
				animationDelay: function (dataIndex, params) {
					return params.index * 30;
				}
			}, {
				name: '女性',
				type: 'bar',
				xAxisIndex: 2,
				yAxisIndex: 2,
				//   symbol: 'rect',
				barWidth: 5,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
								offset: 0,
								color: colors[0].start
							},
							{
								offset: 1,
								color: colors[0].end
							}
						]),
					}
				},
				// symbolRepeat: true,
				// symbolSize: 14,
				data: thisYearData[timeLineData[0]]
				// animationEasing: 'elasticOut',
				// animationDelay: function (dataIndex, params) {
				//     return params.index * 30 * 1.1;
				// }
			}
		]
	});
	TwoBar.setOption(option)
	TwoBar.on("click", function (params) {
		// console.log("---->", params.name);
		TRANSPORT_DATA["disease"] = params.name;
		TRANSPORT_DATA["id"] = "";
		// console.log(TRANSPORT_DATA);
		redraw("/search_disease", "search_disease");

		// drawTowBar1(params.name, o) //改参数
	})
}