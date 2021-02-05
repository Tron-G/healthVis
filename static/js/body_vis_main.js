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

/**
 * @description 初始化人体结构图系统
 */
function initBodyVis() {


    drawBodyMap();
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











