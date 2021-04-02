/////////////////////////////////////////////////////////////////////////////////////
//全局状态变量，保存当前选中季节和医院
var TRANSPORT_DATA = {};
TRANSPORT_DATA["season"] = "all";
TRANSPORT_DATA["hospital"] = "all";
TRANSPORT_DATA["map_checked_type"] = $('.radio_box :radio:checked').val();
// //缓存几种地图上显示的热力图和点集数据
// var GEO_POINT_DATA = {};
// GEO_POINT_DATA["map_checked_type"] = $('.radio_box :radio:checked').val();

//缓存四个医院的各个就诊总人数json数据，用于主地图画医院的圆点
var HOSPITAL_POINT_DATA = {};

///////////////////////////////////////////////////////////////////////////////////

/**
 * ************************************************************************
 * ************************************************************************
 *   █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗
 * ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝
 * ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗
 * ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║
 * ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝
 *  ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝
 *  ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
 *  ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
 *           ░     ░ ░      ░  ░
 * ************************************************************************
 * @description ***** 系统初始化并缓存数据,可视作系统的main函数 **************
 * *************************************************************************
 */
function initSystem() {
    $.ajax({
        type: 'POST',
        url: "/init",
        data: JSON.stringify(TRANSPORT_DATA),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            // console.log("success", data);
            //初始化系统缓存数据
            HOSPITAL_POINT_DATA["map"] = data["map"];

            drawMap(HOSPITAL_POINT_DATA["map"], data["GDP"]);
            drawBar(AHQ, tem, rain);
            drawRose(data["radar"]);
            drawHospitalBar(data["disease_bar"]);
            drawPie(data["pie"], "job_pie");
            drawRainFall();
        }
    });

    setCheckBoxEvent();
    // testData();
    GoBodyVisPage();
}

initSystem();


/**
 * @description 后台接口测试
 */
function testData() {
    $.ajax({
        type: 'POST',
        url: "/test",
        data: JSON.stringify(TRANSPORT_DATA),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            // alert(JSON.stringify(data));
            console.log("success", data);
        }
    });
}

/**
 * @description 用户交互操作后重绘各个视图
 * @param {string} url 访问的后台接口名称
 * @param {string} redraw_type  重绘的类型，
 *                 select_hospital:选择医院操作，仅重绘玫瑰图;
 *                 select_time:季节选择操作，重绘所有视图;
 *                 select_category:单选框选择地点或者职业，重绘地图
 */
function redraw(url, redraw_type) {
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(TRANSPORT_DATA),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            // alert(JSON.stringify(data));
            console.log("success", data);

            if (redraw_type === "select_hospital") {
                drawHospitalBar(data["disease_bar"]);
            } else if (redraw_type === "select_time") {
                drawMap(HOSPITAL_POINT_DATA["map"], data["category"]);
                drawRose(data["radar"]);
                drawHospitalBar(data["disease_bar"]);
                drawPie(data["pie"], "job_pie")
            } else if (redraw_type === "select_category") {
                drawMap(HOSPITAL_POINT_DATA["map"], data);
                if (TRANSPORT_DATA["map_checked_type"] !== "pollution_company" && TRANSPORT_DATA["map_checked_type"] !== "restaurant") {
                    drawRainFall();
                }
                //初始化展示全部词云
                else {
                    let words = [];
                    for (let i = 0; i < data["features"].length; i++) {
                        words.push(data["features"][i]["properties"]["category"]);
                    }
                    if (echarts.getInstanceByDom(document.getElementById("word_cloud")) !== undefined) {
                        // console.log(echarts.getInstanceByDom(document.getElementById("word_cloud")));
                        echarts.getInstanceByDom(document.getElementById("word_cloud")).dispose();
                    }
                    drawWordCloud(words, "word_cloud");
                }
            }

        }
    });
}

/**
 * @description 跳转到人体结构图页面
 */
function GoBodyVisPage() {
    $("#second_page").click(function () {
        window.open('/feature', '_self');
    });
}


/**
 * @description 绑定地图单选框点击事件
 */
function setCheckBoxEvent() {
    $(function () {
        $(".radio_box :radio").click(function () {
            // alert("选的..." + $(this).val());
            TRANSPORT_DATA["map_checked_type"] = $(this).val();
            redraw("/select_category", "select_category");
        });
    });
}
