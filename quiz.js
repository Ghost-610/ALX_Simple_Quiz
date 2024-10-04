function checkAnswer() {
        // Function body

    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer was selected
    if (!selectedRadio) {
        feedbackElement.textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedRadio.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});