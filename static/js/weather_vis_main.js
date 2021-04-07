
/**
 * @description 初始化气候分析页面
 */
function initBodyVis() {
    drawXiaobei();
    heatmap();
    drawScatter("all");
    temperature();
    Redirect();
}

initBodyVis();



/**
 * @description 跳转到其他页面
 */
function Redirect() {
    $("#map_page").click(function () {
        window.open('/', '_self');
    });
    $("#body_page").click(function () {
        window.open('/feature', '_self');
    });
}
