// Function to check the answer
function checkAnswer() {
    // The correct answer
    var correctAnswer = "4";

    // Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    var feedback = document.getElementById("feedback");

    // Check if an answer is selected
    if (userAnswer) {
        userAnswer = userAnswer.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If no answer is selected, provide feedback
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
