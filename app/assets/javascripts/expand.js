$(document).ready(function(){
    $("table tbody").removeClass("odd");
    $("table tbody:not(.odd)").hide();
    //$("table tr:first-child").show();
    
    $("table thead").click(function(){
        $(this).next("tbody").toggle(600);
    });
    //$("table").jExpand();
});	