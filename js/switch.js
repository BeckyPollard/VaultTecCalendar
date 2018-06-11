$(document).ready(function(){
    $(".swaps div").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("#next").click(function(){
        if ($(".swaps div:visible").next().length != 0)
            $(".swaps div:visible").next().show().prev().hide();
        else {
            $(".swaps div:visible").hide();
            $(".swaps div:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".swaps div:visible").prev().length != 0)
            $(".swaps div:visible").prev().show().next().hide();
        else {
            $(".swaps div:visible").hide();
            $(".swaps div:last").show();
        }
        return false;
    });
});
