//后台数据传输测试
function transmitDataMap(data) {
     $.ajax({
            type:'POST',
            url:"/testInfo",
            data:JSON.stringify(data),
            contentType:'application/json',
            dataType:'json',
            success:function(data){
                // alert(JSON.stringify(data));

                console.log("success", data);
            }
        });
}
