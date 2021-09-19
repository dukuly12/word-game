player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
var player1_score=0;
var player2_score=0;
var question_turn=player1_name;
var Answer_turn=player2_name;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2_name;

function ask_question() {
    var word=document.getElementById("word").value;
     lowercase_word=word.toLowerCase();
    var char1=lowercase_word.charAt(1);
    var length_divide_2=Math.floor(lowercase_word.length/2);
    var char2=lowercase_word.charAt(length_divide_2);
    var char3=lowercase_word.charAt(lowercase_word.length-1)
    var replace1=lowercase_word.replace(char1, "_");
    var replace2=replace1.replace(char2, "_");
    var final_word=replace2.replace(char3, "_");
    var question="<h4 id='word_display'> Q. "+final_word+"</h4> <br>";
    var input_box="Answer : <input type='text' id='input_check_box'> <br> <br>";
    var check_button="<button class='btn btn-info' onclick='check()'> Check </button>";
    var row=question+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check() {
    var Answer=document.getElementById("input_check_box").value;
    var lower_case_answer=Answer.toLowerCase();
    if (lower_case_answer==lowercase_word) {
        if (Answer_turn==player1_name) {
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else if (Answer_turn==player2_name) {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if (question_turn==player1_name) {
        question_turn=player2_name;
        document.getElementById("player_question").innerHTML="Question turn - "+question_turn;
    }
    else if (question_turn==player2_name){
        question_turn=player1_name;
        document.getElementById("player_question").innerHTML="Question turn - "+question_turn;
    }

    if (Answer_turn==player1_name) {
        Answer_turn=player2_name;
        document.getElementById("player_answer").innerHTML="Answer turn - "+Answer_turn;
    }
    else if(Answer_turn==player2_name){
        Answer_turn=player1_name;
        document.getElementById("player_answer").innerHTML="Answer turn - "+Answer_turn;
    }
    document.getElementById("output").innerHTML="";
}