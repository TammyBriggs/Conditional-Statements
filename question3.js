var x = prompt("What is your score?");
if (x >= 80 && x <= 100)
    {document.getElementById("answer").innerHTML="You got an A"}
else if(x >= 70 && x < 80)
    {document.getElementById("answer").innerHTML="You got a B"}
else if(x >= 60 && x < 70)
    {document.getElementById("answer").innerHTML="You got a C"}
else if(x >= 50 && x < 60)
    {document.getElementById("answer").innerHTML="You got a D"}
else if(x < 50 && x >= 0)
    {document.getElementById("answer").innerHTML="You got an E"}
else if(x < 0 || x > 100)
    {document.getElementById("answer").innerHTML="Invalid Input. Try Again"}