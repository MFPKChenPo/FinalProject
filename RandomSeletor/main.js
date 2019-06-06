$(document).ready(function () {
    $("input").click(function () 
    {
        var numOfListItem = $("#choices li").length;
        var randomChildNum = Math.floor(Math.random()*numOfListItem);
        $("H1").text($("#choices li").eq(randomChildNum).text());
    });
});