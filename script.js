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

    const greetingElem = document.getElementById('greeting');
    const clockElem = document.getElementById('clock');
    
    if (greetingElem) greetingElem.innerText = greetingText;
    if (clockElem) clockElem.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

updateClockAndGreeting();
setInterval(updateClockAndGreeting, 1000);

// --- Interactive Text Button ---
function changeText() {
    const textElem = document.getElementById('text');
    if (textElem) {
        textElem.innerText = "Awesome! You clicked the button and updated the script live!";
    }
}

// --- Character Counter ---
function updateCharCount() {
    const feedbackText = document.getElementById('feedbackText');
    const charCount = document.getElementById('charCount');
    if (feedbackText && charCount) {
        charCount.innerText = feedbackText.value.length + " / 200 characters";
    }
}

// --- Theme Toggle ---
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

// --- Terminal / CLI Functionality ---
function handleCliCommand(event) {
    if (event.key === 'Enter') {
        const inputField = document.getElementById('terminalInput');
        const output = document.getElementById('terminalOutput');
        if (!inputField || !output) return;

        const rawCmd = inputField.value.trim();
        const cmd = rawCmd.toLowerCase();

        if (rawCmd === '') return;

        const userLine = document.createElement('p');
        userLine.innerHTML = `<span class="prompt">&gt;</span> ${rawCmd}`;
        output.appendChild(userLine);

        const response = document.createElement('p');
        response.className = 'response-text';

        switch (cmd) {
            case 'help':
                response.innerText = "Available commands: 'help', 'about', 'clear', 'time', 'secret', 'theme'";
                break;
            case 'theme':
            case 'dark':
            case 'light':
                response.innerText = toggleTheme();
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
        output.scrollTop = output.scrollHeight;
    }
}

// --- Copy Code Snippet Logic ---
function copyCode() {
    const codeSnippet = document.getElementById('codeSnippet');
    if (!codeSnippet) return;
    
    const codeText = codeSnippet.innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.innerText = 'Copied! ✅';
            setTimeout(() => {
                copyBtn.innerText = 'Copy Code';
            }, 2000);
        }
    });
}
