body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* --- Two-Column Dashboard Layout --- */
.main-layout {
    display: flex;
    flex-direction: row;
    gap: 25px;
    max-width: 1300px;
    margin: 20px auto;
    padding: 0 20px;
    align-items: flex-start;
}

/* Left Code Showcase Box */
.code-box-container {
    flex: 1.2;
    background-color: #1e1e1e;
    border-radius: 10px;
    border: 1px solid #333;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    text-align: left;
    position: sticky;
    top: 20px;
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
    font-size: 1rem;
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
    max-height: 500px;
    overflow-y: auto;
}

.code-box-body pre {
    margin: 0;
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 0.85rem;
    color: #d4d4d4;
    white-space: pre-wrap;
    word-break: break-all;
}

/* Right Column Content */
.right-content {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Greeting & Clock Container */
.greeting-container {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 12px 20px;
    margin-bottom: 20px;
    display: inline-block;
    border: 1px solid #ddd;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
}

.greeting-container h2 {
    margin: 0;
    color: #333;
    font-size: 1.4rem;
}

#clock {
    margin: 4px 0 0 0;
    font-size: 1rem;
    font-weight: bold;
    color: #007acc;
}

/* Interactive Elements */
button {
    padding: 8px 16px;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    color: #333;
    transition: all 0.3s ease;
    margin: 10px 0;
}

button:hover {
    background-color: #f0f0f0;
}

/* Terminal / CLI Container Styling */
.terminal-container {
    background-color: #0d1117;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    margin: 20px 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
    border: 1px solid #30363d;
    text-align: left;
    box-sizing: border-box;
}

.terminal-header {
    background-color: #161b22;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #30363d;
}

.dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
}
.red { background-color: #ff5f56; }
.yellow { background-color: #ffbd2e; }
.green { background-color: #27c93f; }

.terminal-title {
    color: #8b949e;
    font-size: 0.85rem;
    margin-left: 8px;
}

.terminal-body {
    padding: 15px;
    height: 160px;
    overflow-y: auto;
    color: #58a6ff;
    font-size: 0.9rem;
}

.terminal-body p {
    margin: 4px 0;
}

.highlight {
    color: #e3b341;
}

.response-text {
    color: #c9d1d9;
}

.terminal-input-line {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #161b22;
    border-top: 1px solid #30363d;
}

.prompt {
    color: #238636;
    font-weight: bold;
    margin-right: 8px;
}

#terminalInput {
    background: transparent;
    border: none;
    outline: none;
    color: #f0f6fc;
    font-family: inherit;
    font-size: 0.9rem;
    width: 100%;
}

/* Feedback Box */
.feedback-box {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    border: 1px solid #ddd;
    text-align: left;
    box-sizing: border-box;
    margin-top: 10px;
}

.feedback-box h3 {
    margin-top: 0;
    color: #333;
}

.feedback-box textarea {
    width: 100%;
    height: 80px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    box-sizing: border-box;
    font-family: inherit;
}

#charCount {
    font-size: 0.8rem;
    color: #666;
    margin: 6px 0 12px 0;
    text-align: right;
}

/* Dark Theme Overrides */
body.dark-theme {
    background-color: #121212;
    color: #e0e0e0;
}

body.dark-theme .greeting-container,
body.dark-theme .feedback-box {
    background-color: #1e1e1e;
    border-color: #333;
    color: #fff;
}

body.dark-theme .greeting-container h2,
body.dark-theme .feedback-box h3 {
    color: #fff;
}

body.dark-theme textarea {
    background-color: #2a2a2a;
    color: #fff;
    border-color: #444;
}

body.dark-theme button {
    background-color: #2b2b2b;
    color: #fff;
    border-color: #555;
}

body.dark-theme button:hover {
    background-color: #3a3a3a;
}

/* Responsive Layout */
@media (max-width: 768px) {
    .main-layout {
        flex-direction: column;
    }
    .code-box-container, .right-content {
        width: 100%;
    }
}
