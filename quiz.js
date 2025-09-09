// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selected = document.querySelector('input[name="quiz"]:checked');

    // If user selected an option
    if (selected) {
        const userAnswer = selected.value;
        const feedback = document.getElementById('feedback');

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // No option selected
        document.getElementById('feedback').textContent = "Please select an answer!";
        document.getElementById('feedback').style.color = "orange";
    }
}

// Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
