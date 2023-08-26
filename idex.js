$(".hide-menu").click(function (e) { 
    e.preventDefault();
    if($(".items").css("display")==="flex"){
        $(".items").css("display","none");
        console.log("hai")
    }else{
        $(".items").css("display","flex");
    }
});