let count = 0;

function increment() {
    count++;
    document.getElementById('counter').innerText = count;
}

function decrement() {
    count--;
    document.getElementById('counter').innerText = count;
}

function reset() {
    count = 0;
    document.getElementById('counter').innerText = count;
}

function toggleEdit() {
    const editInput = document.getElementById('editInput');
    const counterDisplay = document.getElementById('counter');
    if (editInput.style.display === 'none') {
        editInput.style.display = 'inline';
        editInput.value = counterDisplay.innerText;
        editInput.focus();
    } else {
        editInput.style.display = 'none';
        counterDisplay.innerText = editInput.value;
        count = parseInt(editInput.value, 10); // Update count
    }
}

function saveCounter() {
    const editInput = document.getElementById('editInput');
    const counterDisplay = document.getElementById('counter');
    counterDisplay.innerText = editInput.value;
    count = parseInt(editInput.value, 10); // Update count
}
