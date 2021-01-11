//全局状态变量
var transport_data = {};
transport_data["season"] = "all";
transport_data["hospital"] = "all";





//后台数据传输测试
function transmitData(url) {
     $.ajax({
            type:'POST',
            url: url,
            data:JSON.stringify(transport_data),
            contentType:'application/json',
            dataType:'json',
            success:function(data){
                // alert(JSON.stringify(data));
                console.log("success", data);
            }
        });
}

//系统初始化
function init_system() {
    $.ajax({
            type:'POST',
            url: "/init",
            data:JSON.stringify(transport_data),
            contentType:'application/json',
            dataType:'json',
            success:function(data){
                // alert(JSON.stringify(data));
                // console.log("success", data);
                console.log(data["radar"]);

                drawMap(data["map"], gdpData);
                drawBar(AHQ, tem, rain);
                drawRadar(data["radar"]);
                // drawRadar(obj);
            }
        });



}
init_system();

