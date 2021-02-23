/**
 *
 *   ██████╗  ██████╗ ███████╗████████╗██╗ ██████╗██╗   ██╗██╗███████╗
 *   ██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██║██╔════╝██║   ██║██║██╔════╝
 *   ██████╔╝██║   ██║█████╗     ██║   ██║██║     ██║   ██║██║███████╗
 *   ██╔═══╝ ██║   ██║██╔══╝     ██║   ██║██║     ╚██╗ ██╔╝██║╚════██║
 *   ██║     ╚██████╔╝███████╗   ██║   ██║╚██████╗ ╚████╔╝ ██║███████║
 *   ╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚═╝ ╚═════╝  ╚═══╝  ╚═╝╚══════╝
 *
 * */


//全局状态变量，保存当前医院
var TRANSPORT_DATA = {};
TRANSPORT_DATA["hospital"] = "all";
TRANSPORT_DATA["month"] = 2;
TRANSPORT_DATA["id"] = "";
TRANSPORT_DATA["disease"] = "";

var DISEASE_LIST = {};

/**
 * @description 初始化人体结构图系统
 */
function initBodyVis() {
    $.ajax({
        type: 'POST',
        url: "/init_bodyvis",
        data: JSON.stringify(TRANSPORT_DATA),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            // alert(JSON.stringify(data));
            console.log("success", data);
            DISEASE_LIST = data["disease-detail"];


            drawBodyMap("time", data["body_disease"]);
            drawTowbar2(data["body_disease"]);
            sunburst(data["sunburst"]);
        }
    });

    GoBackToMapView();
    setSearchEvent();
}

initBodyVis();

/**
 * @description 跳转到地图页面
 */
function GoBackToMapView() {
    $("#back_btn").click(function () {
        window.open('/', '_self');
    });
}

/**
 * @description 监听搜索框
 */
function setSearchEvent() {
    $('#search_input').bind('keydown', function (event) {
        if (event.keyCode === 13) {
            let text = $('#search_input').val();
            console.log(text.length);

            if (text.length > 30) {
                //搜索病人id
                TRANSPORT_DATA["id"] = text;
                TRANSPORT_DATA["disease"] = "";
                redraw("/search_id", "search_id")
            } else {
                //搜索具体疾病
                TRANSPORT_DATA["disease"] = text;
                TRANSPORT_DATA["id"] = "";
                TRANSPORT_DATA["month"] = 0;
                redraw("/search_disease", "search_disease")
            }
        }
    })
}

/**
 * @description 用户交互操作后重绘各个视图
 * @param {string} url 访问的后台接口名称
 * @param {string} redraw_type  重绘的类型，
 *                 search_id: 搜索指定病人，重绘人体结构图
 *                 search_disease: 搜索指定疾病，重绘人体结构图和年龄分布图
 *                 select_time: 选择月份操作，重绘人体结构图和性别分布图
 */
function redraw(url, redraw_type) {
    $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(TRANSPORT_DATA),
        contentType: 'application/json',
        dataType: 'json',
        success: function (data) {
            console.log("success", data);

            if (redraw_type === "search_id") {
                drawBodyMap("search", data);
            } else if (redraw_type === "search_disease") {
                drawBodyMap("search", data);
            } else if (redraw_type === "select_time") {
                drawBodyMap("time", data);
                drawTowbar2(data);
            }

        }
    });
}









