/////////////////////////////////////////////////////////////////////////////////////
//全局状态变量，保存当前选中季节和医院
var TRANSPORT_DATA = {};
TRANSPORT_DATA["season"] = "all";
TRANSPORT_DATA["hospital"] = "all";

//缓存几种地图上显示的热力图和点集数据
var GEO_POINT_DATA = {};
GEO_POINT_DATA["map_checked_type"] = $('.radio_box :radio:checked').val();

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
            // alert(JSON.stringify(data));
            // console.log("success", data);

            //初始化系统缓存数据
            GEO_POINT_DATA["GDP"] = data["GDP"];
            GEO_POINT_DATA["school"] = data["school"];
            GEO_POINT_DATA["health_center"] = data["health_center"];
            GEO_POINT_DATA["pollution_company"] = data["pollution_company"];

            HOSPITAL_POINT_DATA["map"] = data["map"];

            // console.log(GEO_POINT_DATA);
            drawMap(HOSPITAL_POINT_DATA["map"], GEO_POINT_DATA);
            drawBar(AHQ, tem, rain);
            drawRose(data["radar"]);

        }
    });

    setCheckBoxEvent();
    testData();
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
                drawRose(data["radar"]);
            } else if (redraw_type === "select_time") {
                drawMap(HOSPITAL_POINT_DATA["map"], GEO_POINT_DATA);
                drawRose(data["radar"]);
            } else if (redraw_type === "select_category") {
                drawMap(HOSPITAL_POINT_DATA["map"], GEO_POINT_DATA);
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
            GEO_POINT_DATA["map_checked_type"] = $(this).val();

            //////////// todo : url 后台接口实现
            redraw("/test", "select_category");

        });
    });
}
