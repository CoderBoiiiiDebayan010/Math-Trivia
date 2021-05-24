player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML=player1name+":";  
document.getElementById("player2_name").innerHTML=player2name+":";

document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML= "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML= "Answer Turn - " + player2name;

function send() {
   var num1 = document.getElementById("Number1").value;
   var num2 = document.getElementById("Number2").value;
   correctanswer = parseInt(num1)*parseInt(num2);

   question_word = "<h4 id='word_display'> Q. "+num1+"x" +num2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number1").value = "";
    document.getElementById("Number2").value = "";
}
var question_turn = "player1";
answer_turn = "player2";
function check() 
{

answer = document.getElementById("input_check_box").value;
console.log("answer is "+ answer);
if(answer == correctanswer)
{
    if(answer_turn == "player1")
    {
        player1score = player1score +1;
        document.getElementById("player1_score").innerHTML = player1score;
    }
    else
    {
        player2score = player2score +1;
        document.getElementById("player2_score").innerHTML = player2score;
    }
}
if(question_turn == "player1")
{

question_turn = "player2";
document.getElementById("player_question").innerHTML = "Question Turn - " +player2name;
}
else
{
    question_turn = "player1";
document.getElementById("player_question").innerHTML = "Question Turn - " +player1name;
}

if(answer_turn == "player1")
{
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " +player2name;
}
else
{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " +player1name;
}
document.getElementById("output").innerHTML = "";
}