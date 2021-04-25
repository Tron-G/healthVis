/**
 * @description 绘制疾病单分图
 * @param {array} data  单分图数据组
 */
function drawSingleGraph(data) {

    if (STSTEM_STATUS !== 1) {
        destroy_scroll();
    }

    let main = echarts.init(document.getElementById('knowledge_graph'));
    main.clear()
    var option = {
        title: {
            text: '疾病聚类结构图',
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
                    color: "#9ca8b8",
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
                        fontWeight: "bold",
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
    if (STSTEM_STATUS !== 1) {
        create_scroll();
        scroll();
    }

}

function create_scroll() {
    var knowledge_graph = document.getElementById('knowledge_graph')
    var scroll = document.createElement("div")
    scroll.id = 'scroll1'
    scroll.style.cssText = ' width: 20%;height: 8px;background-color: #ccc; bottom:5%; right: 5%;position: absolute;z-index:1000'
    knowledge_graph.appendChild(scroll)
    var bar = document.createElement("div")
    bar.id = 'bar'
    bar.style.cssText = 'position: absolute;width: 10px;height: 15px; background: #369;top: -25%;margin-top: -2px;cursor: pointer;left: 0;'
    scroll.appendChild(bar)
    var mask = document.createElement("div")
    mask.id = 'mask'
    mask.style.cssText = 'width: 0;height: 80%;position: absolute;top: 0;left: 0;background-color: #369;'
    scroll.appendChild(mask)

    var scroll2 = document.createElement("div")
    scroll2.id = 'scroll2'
    scroll2.style.cssText = ' width:20%;height: 8px;background-color: #ccc;bottom:10%;right: 5%;position: absolute;z-index:1000'
    knowledge_graph.appendChild(scroll2)
    var bar2 = document.createElement("div")
    bar2.id = 'bar2'
    bar2.style.cssText = 'position: absolute;width: 10px;height: 15px;background: #369;top: -25%;margin-top: -2px;cursor: pointer;left: 0;'
    scroll2.appendChild(bar2)
    var mask2 = document.createElement("div")
    mask2.id = 'mask2'
    mask2.style.cssText = 'width: 0;height: 80%;position: absolute;top: 0;left: 0;background-color: #369;'
    scroll2.appendChild(mask2)
//
    var scroll3 = document.createElement("div")
    scroll3.id = 'scroll3'
    scroll3.style.cssText = ' width: 20%;height: 8px;background-color: #ccc;bottom:15%;right: 5%;position: absolute;z-index:1000'
    knowledge_graph.appendChild(scroll3)
    var bar3 = document.createElement("div")
    bar3.id = 'bar3'
    bar3.style.cssText = 'position: absolute;width: 10px;height: 15px;background: #369;top: -25%;margin-top: -2px;cursor: pointer;left: 0;'
    scroll3.appendChild(bar3)
    var mask3 = document.createElement("div")
    mask3.id = 'mask3'
    mask3.style.cssText = 'width: 0;height: 80%;position: absolute;top: 0;left: 0;background-color: #369;'
    scroll3.appendChild(mask3)
}

function destroy_scroll() {
    var knowledge_graph = document.getElementById('knowledge_graph')

    for (let i = 1; i <= 3; i++) {
        let scroll = document.getElementById("scroll" + i)
        if (scroll != null) {
            console.log(scroll)
            knowledge_graph.removeChild(scroll)
        }
    }
    // var scroll = document.getElementById("scroll")
    //
    // var scroll2 = document.getElementById("scroll2")
    // body_view.removeChild(scroll2)
    //
    // var scroll3 = document.getElementById("scroll3")
    // body_view.removeChild(scroll3)
}

//destroy_scroll()
function scroll() {
    var scroll1 = document.getElementById('scroll1')
    var bar = scroll1.children[0]
    var mask = scroll1.children[1]

    var newEle1 = document.createElement("p");
    var newText1 = document.createTextNode("疾病名权重:");
    newEle1.appendChild(newText1);
    scroll1.appendChild(newEle1);　　//追加的元素在div容器内
    newEle1.style.position = "absolute";
    newEle1.style.left = "-70px";
    newEle1.style.top = "-18px";
    newEle1.style.fontSize = "13px";

    bar.onmousedown = function (e) {
        var e = e || window.event // 标准化event
        var leftVal = e.clientX - this
            .offsetLeft // 因为当前盒子是bar,bar是相对于scroll定位的，因此得到的offsetLeft是相对于scroll的距离，所以说leftVal是scroll距离浏览器左边的距离
        var that = this;
        let maxLimit = scroll1.offsetWidth - 10;
        document.onmousemove = function (e) {
            var e = e || window.event // 标准化event
            // maxLimit = scroll1.offsetWidth - 10 // 10为bar的宽度
            that.style.left = event.clientX - leftVal + 'px'; // 设置滑块走过的距离,为什么要设置后获取，因为style是行内样式，不设置湖区不到
            var val = parseInt(that.style.left);
            if (val < 0) {
                val = 0
            } else if (val > maxLimit) {
                val = maxLimit
            }
            that.style.left = val + 'px'
            mask.style.width = that.style.left; // 遮罩盒子的宽度
            // 计算百分比

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection
                .empty(); // 解决选中出现蓝色的一片的bug
        }
        document.onmouseup = function () {
            document.onmousemove = null; // 弹起鼠标不做任何操作
            let value = parseInt(that.style.left) / maxLimit;
            value = 0.2 + value*0.2;
            console.log(value);
            TRANSPORT_DATA["parameter_1"] = value;
            redraw("/change_force_parameter", "change_force_parameter");
            console.log(TRANSPORT_DATA)
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var scroll2 = document.getElementById('scroll2')
    var bar2 = scroll2.children[0]
    var mask2 = scroll2.children[1]
    var newEle2 = document.createElement("p");
    var newText2 = document.createTextNode("症状权重:");
    newEle2.appendChild(newText2);
    scroll2.appendChild(newEle2);　　//追加的元素在div容器内
    newEle2.style.position = "absolute";
    newEle2.style.top = "-18px";
    newEle2.style.fontSize = "13px";
    newEle2.style.left = "-60px";

    bar2.onmousedown = function (e) {
        var e = e || window.event // 标准化event
        var leftVal = e.clientX - this
            .offsetLeft // 因为当前盒子是bar,bar是相对于scroll定位的，因此得到的offsetLeft是相对于scroll的距离，所以说leftVal是scroll距离浏览器左边的距离
        var that = this
        let maxLimit;
        document.onmousemove = function (e) {
            var e = e || window.event // 标准化event
            maxLimit = scroll2.offsetWidth - 10 // 10为bar的宽度
            that.style.left = event.clientX - leftVal + 'px'; // 设置滑块走过的距离,为什么要设置后获取，因为style是行内样式，不设置湖区不到
            var val = parseInt(that.style.left);
            if (val < 0) {
                val = 0
            } else if (val > maxLimit) {
                val = maxLimit
            }
            that.style.left = val + 'px'
            mask2.style.width = that.style.left; // 遮罩盒子的宽度
            // 计算百分比

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection
                .empty(); // 解决选中出现蓝色的一片的bug
        }
        document.onmouseup = function () {
            document.onmousemove = null; // 弹起鼠标不做任何操作
            let value = parseInt(that.style.left) / maxLimit;
            value = 0.09 + value*0.1;
            console.log(value);
            TRANSPORT_DATA["parameter_2"] = value;
            redraw("/change_force_parameter", "change_force_parameter");
            console.log(TRANSPORT_DATA)
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var scroll3 = document.getElementById('scroll3')
    var bar3 = scroll3.children[0]
    var mask3 = scroll3.children[1]

    var newEle3 = document.createElement("p");
    var newText3 = document.createTextNode("科室权重:");
    newEle3.appendChild(newText3);
    scroll3.appendChild(newEle3);　　//追加的元素在div容器内
    newEle3.style.position = "absolute";
    newEle3.style.left = "-60px";
    newEle3.style.fontSize = "13px";
    newEle3.style.top = "-18px";

    bar3.onmousedown = function (e) {
        var e = e || window.event // 标准化event
        var leftVal = e.clientX - this
            .offsetLeft // 因为当前盒子是bar,bar是相对于scroll定位的，因此得到的offsetLeft是相对于scroll的距离，所以说leftVal是scroll距离浏览器左边的距离
        var that = this
        let maxLimit;
        document.onmousemove = function (e) {
            var e = e || window.event // 标准化event
            maxLimit = scroll3.offsetWidth - 10 // 10为bar的宽度
            that.style.left = event.clientX - leftVal + 'px'; // 设置滑块走过的距离,为什么要设置后获取，因为style是行内样式，不设置湖区不到
            var val = parseInt(that.style.left);
            if (val < 0) {
                val = 0
            } else if (val > maxLimit) {
                val = maxLimit
            }
            that.style.left = val + 'px'
            mask3.style.width = that.style.left; // 遮罩盒子的宽度
            // 计算百分比

            window.getSelection ? window.getSelection().removeAllRanges() : document.selection
                .empty(); // 解决选中出现蓝色的一片的bug
        }
        document.onmouseup = function () {
            document.onmousemove = null; // 弹起鼠标不做任何操作
            // console.log(that.style.left, maxLimit);
            // console.log(parseInt(parseInt(that.style.left) / maxLimit * 10))
            let value = parseInt(that.style.left) / maxLimit;
            value = 0.09 + value*0.1;
            console.log(value);
            TRANSPORT_DATA["parameter_3"] = value;
            redraw("/change_force_parameter", "change_force_parameter");
            console.log(TRANSPORT_DATA)
        }
    }
}

