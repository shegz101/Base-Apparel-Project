var button=document.getElementsByTagName("button")[0];
var input=document.getElementById("style");

button.addEventListener("click",function () {
    if (input.value == "") {
     alert('please enter your email');
     input.style.bordercolor="red";
     return false;
    }
})