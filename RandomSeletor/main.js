var pic = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
]

$(document).ready(function () {
    $("input").click(function () 
    {
        var numOfListItem = $("#choices li").length;
        var randomChildNum = Math.floor(Math.random()*numOfListItem);
        $("H1").text($("#choices li").eq(randomChildNum).text());
        $("img").attr("src", pic[randomChildNum]);
    });
});