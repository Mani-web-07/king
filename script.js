function changeText() {
    document.getElementById("text").innerText = "Boom! JavaScript is working!";
    alert("Button clicked successfully!");
}
function submitFeedback() {
    let userText = document.getElementById("feedbackInput").value;
    let responseParagraph = document.getElementById("feedbackResponse");

    if (userText.trim() === "") {
        responseParagraph.style.color = "red";
        responseParagraph.innerText = "Please write something first!";
    } else {
        responseParagraph.style.color = "green";
        responseParagraph.innerText = "Thanks for your feedback!";
        document.getElementById("feedbackInput").value = ""; // Clear input
    }
}