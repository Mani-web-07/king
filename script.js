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
function changeText() {
    document.getElementById("text").innerText = "You clicked the button! The JavaScript file is working properly.";
}

function updateCharCount() {
    const textarea = document.getElementById('feedbackText');
    const charCountDisplay = document.getElementById('charCount');
    
    const maxLength = 200;
    const currentLength = textarea.value.length;
    
    charCountDisplay.textContent = `${currentLength} / ${maxLength} characters`;
    
    if (currentLength >= maxLength) {
        charCountDisplay.style.color = 'red';
    } else if (currentLength >= maxLength * 0.8) {
        charCountDisplay.style.color = 'orange';
    } else {
        charCountDisplay.style.color = '#666';
    }
}
