// all the needed elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .exit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");

// when start quiz button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeinfo"); //show info box
}

// when exit button is clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo"); // remove info box
}

// when continue button is clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo"); // remove info box
    quiz_box.classList.add("activequiz"); // show quiz box
}