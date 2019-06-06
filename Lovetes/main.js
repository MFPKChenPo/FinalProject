$(document).ready(function(){
    //建立currentQuiz, 儲存目前作答到第幾題
    var currentQuiz=null;
    //當按下按鈕後, 要做的事情放在這裡面
    $("#startButton").click(function(){
        if(currentQuiz==null)//未開始作答
        {
            currentQuiz=0;// 設定目前作答道第0題
            $("#question").text(questions[0].question);//顯示題目
            $("#options").empty();//每次顯示選項前先將該區域清空
            for(var x=0;x<questions[0].answers.length;x++)//將一個一個選項內容加到選項區塊
            {
                $("#options").append("<input name='options' type='radio' value="+x+
                ">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            $("#startButton").attr("value", "Next");//將按鈕上文字換成Next或下一題
        }
        else//已開始作答
        {
            //巡訪每個選項是否有被選取
            $.each($(":radio"), function(i,val){
                if(val.checked)
                {
                    //使用者所選取的項目是否已產生最終結果(A~D)
                    if(isNaN
                       
                       
                       
                       (questions[currentQuiz].answers[i][1]))
                    {
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value", "重新開始");
                    }
                    else
                    {
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0;x<questions[currentQuiz].answers.length;x++)
                        {
                            $("#options").append("<input name='options' type='radio' value="+x+" >"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                    }
                    return false;
                }
            });
        }
    });
});