player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML=player_1+":";
document.getElementById("player_2").innerHTML=player_2+":";
document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_que").innerHTML="question turn - "+ player_1;
document.getElementById("player_ans").innerHTML="answer turn - "+ player_2;

function send() {
 getword = document.getElementById("word").value;
 word = getword.toLowerCase();
 console.log("word in lower case = " + word);
 
 char1 = word.charAt(1);
 console.log(char1);

 length2 = Math.floor(word.length/2);
 char2 = word.charAt(length2);
 console.log(char2);

 length_minus = word.length-1;
 char3 = word.charAt(length_minus);
 console.log(char3);

 remove1 = word.replace(char1,"_");
 remove2 = remove1.replace(char2,"_");
 remove3 = remove2.replace(char3,"_");
 console.log(remove3);

 question = "<h4 id='word_display'> Q."+remove3+"</h4>";
 
 inputBox = "<br>Answer : <input type='text' id='input_box'>" ;
 check_box = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>" ;
 row = question + inputBox + check_box ;
 document.getElementById("output").innerHTML=row ;
 document.getElementById("word").value="" ;
}

question_turn = "player1" ;
answer_turn = "player2" ;

function check() {
get_answer = document.getElementById("input_box").value ;
answer = get_answer.toLowerCase() ;
console.log("answer in lowercase-" + answer) ;

if(answer == word)
{
if(answer_turn == "player1") {
player1_score = player1_score + 1;
document.getElementById("player1score").innerHTML=player1_score ;    
}
else {
player2_score = player2_score + 1;
document.getElementById("player2score").innerHTML=player2_score ;    
}     
}
if(question_turn == "player1") {
question_turn = "player2" 
document.getElementById("player_que").innerHTML="Question turn - "+ player_2 ;    
}
else {
    question_turn = "player1" 
    document.getElementById("player_que").innerHTML="Question turn - "+ player_1 ;     
}
if(answer_turn == "player1") {
    answer_turn = "player2" 
    document.getElementById("player_ans").innerHTML="Answer turn - "+ player_2 ;    
    }
    else {
        answer_turn = "player1" 
        document.getElementById("player_ans").innerHTML="Answer turn - "+ player_1 ;     
    }
document.getElementById("output").innerHTML = "" ;    
}

