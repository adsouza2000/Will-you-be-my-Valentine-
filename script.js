const storySteps = [
    "I met a young lad at Bowring...",
    "He was rude",
    "But that's alright... everyone is rude",
    "and vicious.....sometimes......",
    "He ate all the cheesecake",
    "And called me ugly!",
    "But ... were still Friend!",
    "Happy 30th Birthday XD"
];

let storyIndex = 0;

function handleNext() {
    storyIndex++;
    
    if (storyIndex < storySteps.length) {
        // Update the text
        document.getElementById('story-text').textContent = storySteps[storyIndex];
        
        // Optional: Make the "Next" button grow bigger each time like your original code
        const yesButton = document.querySelector('.yes-button');
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.2}px`;

    } else {
        // Story finished! Redirect to the final page
        window.location.href = "yes_page.html";
    }
}

function handleSkip() {
    // Redirect to your snake giphy page
    // Ensure "snake_penalty.html" exists in your GitHub repo
    window.location.href = "snake_penalty.html";
}
