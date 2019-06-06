$(document).ready(function () {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    var secoundUnit = 1000;
    var minuteUnit = secoundUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit = hourUnit*24;
    for (var i = 0; i < topicCount; i++)
    {
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>" + (i+1) + "</td>");
        $("#courseTable").append("<td>" + (new Date(startDate.getTime()+
                                                i*7*dayUnit).toLocaleDateString().slice(5)) + "</td>");
        $("#courseTable").append("<td>" + topic[i] + "</td>");
        $("#courseTable").append("</tr>");
    }
});