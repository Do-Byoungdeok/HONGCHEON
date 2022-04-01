$(document).ready(function(){
    //헤더 푸터 불러오기
    $.ajax({
        url:"header.html",
        dataType:"html",
        success:function(data){
            aa = $("#header").html(data).find(".headerInnerBox");
            $("#header").html(aa);
        }
    })
    $.ajax({
        url:"footer.html",
        dataType:"html",
        success:function(data){
            bb = $("#footer").html(data).find(".footerInnerBox");
            $("#footer").html(bb);
        }
    })

});