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
    document.getElementById("text").innerText = "You clicked the button! thankyou.";
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
// --- Terminal / CLI Functionality ---
function handleCliCommand(event) {
    if (event.key === 'Enter') {
        const inputField = document.getElementById('terminalInput');
        const output = document.getElementById('terminalOutput');
        const rawCmd = inputField.value.trim();
        const cmd = rawCmd.toLowerCase();

        if (rawCmd === '') return;

        // Print user input line
        const userLine = document.createElement('p');
        userLine.innerHTML = `<span class="prompt">&gt;</span> ${rawCmd}`;
        output.appendChild(userLine);

        // Process commands
        const response = document.createElement('p');
        response.className = 'response-text';

       switch (cmd) {
    case 'help':
        response.innerText = "Available commands: 'help', 'about', 'clear', 'time', 'secret', 'theme'";
        break;

    // --- NEW THEME COMMAND ---
    case 'theme':
    case 'dark':
    case 'light':
        const modeStatus = toggleTheme();
        response.innerText = modeStatus;
        break;

    case 'about':
        response.innerText = "This is a custom interactive web page hosted directly on GitHub Pages.";
        break;
    case 'time':
        response.innerText = "Current system time: " + new Date().toLocaleTimeString();
        break;
    case 'clear':
        output.innerHTML = "";
        inputField.value = '';
        return;
    case 'secret':
        response.innerHTML = "<span style='color: #00ff00;'>⚡ UNLOCKED: Dark Phonk mode activated! Terminal operational.</span>";
        break;
    default:
        response.innerText = `Command not recognized: '${rawCmd}'. Type 'help' for a list of available commands.`;
}
        output.appendChild(response);
        inputField.value = '';
        output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
    }
}
// --- Theme Toggle Logic ---
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    const btn = document.getElementById('themeToggleBtn');
    if (body.classList.contains('dark-theme')) {
        if (btn) btn.innerText = '☀️ Light Mode';
        return "Dark mode enabled!";
    } else {
        if (btn) btn.innerText = '🌙 Dark Mode';
        return "Light mode enabled!";
    }
}
/* --- Two-Column Layout --- */
.main-layout {
    display: flex;
    flex-direction: row;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    align-items: flex-start;
}

/* --- Left Code Showcase Box --- */
.code-box-container {
    flex: 1.2;
    background-color: #1e1e1e;
    border-radius: 10px;
    border: 1px solid #333;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    text-align: left;
}

.code-box-header {
    background-color: #252526;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #333;
}

.code-box-header h3 {
    margin: 0;
    color: #569cd6;
    font-size: 1.1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.copy-btn {
    background-color: #0e639c;
    color: #ffffff;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background-color 0.2s ease;
}

.copy-btn:hover {
    background-color: #1177bb;
}

.code-box-body {
    padding: 15px;
    background-color: #1e1e1e;
    max-height: 450px;
    overflow-y: auto;
}

.code-box-body pre {
    margin: 0;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 0.9rem;
    color: #d4d4d4;
    white-space: pre-wrap;
    word-break: break-all;
}

.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

/* Responsive adjustment for mobile screens */
@media (max-width: 768px) {
    .main-layout {
        flex-direction: column;
    }
    .code-box-container, .right-content {
        width: 100%;
    }
}
