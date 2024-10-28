document.getElementById("questionForm").addEventListener("submit",function(event){
    event.preventDefault()

    let valid = true;
    const summaryError = document.getElementById("summaryError");

    const questionInput = document.getElementById("question");
    const questionError = document.getElementById("questionError");
    const question = questionInput.value.trim();
    if (question.length < 2 || question.length > 60){
        questionInput.classList.add("invalid");
        questionError.style.display = "block";
        valid = false;
    }else{
        questionInput.classList.remove("invalid");
        questionError.style.display = "none";
    }
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
        emailInput.classList.add("invalid");
        emailError.style.display = "block";
        valid = false;
    }else{
        emailInput.classList.remove("invalid");
        emailError.style.display = "none";
    }
    if (!valid){
        summaryError.style.display = "block";
    }else {
        summaryError.style.display = "none";
        console.log("Valid")
    }
});