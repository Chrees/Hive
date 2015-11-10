$(document).ready(function(){
    $("table tbody").addClass("odd");
    $("table tbody:not(.odd)").hide();
    //$("table tr:first-child").show();
    
    $("table thead").click(function(){
        $(this).next("tbody").toggle(300);
    });
    //$("table").jExpand();
});	