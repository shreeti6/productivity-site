body {
    font-family: 'Montserrat', sans-serif;
    background-color: #10061f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
}

.greeting {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.time {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.footer {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
}

.button-group {
    display: flex;
    gap: 1rem;
}

button {
    background-color: #462167;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
}

button:hover {
    background-color: #341054;
}

.music-icon,
.task-icon,
.settings-icon {
    margin-top: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
}

.dialog {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2e0f48;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.dialog-content {
    text-align: left;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
}

.task-input {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 5px;
}

.controls button {
    margin-top: 1rem;
    margin-right: 0.5rem;
}
