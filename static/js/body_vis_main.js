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
        drawBodyMap();
        sunburst(data);
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

function setSearchEvent() {
    $('#search_input').bind('keydown', function (event) {
        if (event.keyCode === 13) {
            let text = $('#search_input').val();
            console.log(text);
        }
    })
}











