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
// --- Dynamic Clock & Greeting ---
function updateClockAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    
    let greetingText = "Good Evening!";
    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning!";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Good Afternoon!";
    } else if (hours >= 17 && hours < 22) {
        greetingText = "Good Evening!";
    } else {
        greetingText = "Good Night!";
    }

    document.getElementById('greeting').innerText = greetingText;

    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('clock').innerText = timeString;
}

// Start clock immediately and update every second
updateClockAndGreeting();
setInterval(updateClockAndGreeting, 1000);
