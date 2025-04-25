let q1 = document.getElementById('question1');
let q2 = document.getElementById('question2');
let q3 = document.getElementById('question3');
let q4 = document.getElementById('question4');
let question_list = [q1, q2, q3, q4];
let i = 0;


question_list.forEach(function (question) {
    question.style.display = "none";
});

const question_bank = document.querySelector(".question_bank");
const default_child = q1;
question_bank.appendChild(default_child);
default_child.style.display = "block";
let curQues =q1;
option(curQues)
function nextQuestion(q) {
    q.style.display = "block";
    while (question_bank.firstChild) {
        question_bank.removeChild(question_bank.firstChild);
    }
    question_bank.appendChild(q);
    option(q);    
}
// console.log(curQues)
function option(curQues){
    curQues.querySelectorAll('button').forEach(button => {
        button.addEventListener("click", function(e) {
            curQues.querySelectorAll('button').forEach(btn => {
                if(btn.className === "answer"){
                    if(btn === e.target){
                        btn.style.backgroundColor = "rgba(106, 233, 191, 0.636)";
                    }else{
                        e.target.style.backgroundColor = "#f97942bd"
                        btn.style.backgroundColor = "rgba(106, 233, 191, 0.636)";
                    }
                }
                // if(btn !== e.target){
                //     btn.style.background = "none"
                // }
                btn.disabled = true;
                btn.style.cursor = "not-allowed"
            });
        });
    });
}

document.getElementById('next').addEventListener('click', () => {
    i++;
    if (i < question_list.length) {
        nextQuestion(question_list[i]);
    }
});
