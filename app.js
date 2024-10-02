const yesBtn = document.getElementById("yes")
const noBtn = document.getElementById("no")
const okBtn = document.getElementById("ok")
const yesContent = document.getElementById("yes-container")
let noClickCount = 0;
const visuals = document.querySelector(".visuals")

noBtn.addEventListener("click", ()=>{
   
})


yesBtn.addEventListener("click", () => {
    yesContent.style.display = "flex"; // Show the element
    setTimeout(() => {
        yesContent.style.opacity = 1; // Fade in
    }, 10); // Small delay to ensure display kicks in before opacity transition
});

okBtn.addEventListener("click", () => {
    yesContent.style.opacity = 0; // Fade out
    setTimeout(() => {
        yesContent.style.display = "none"; // Hide the element after fading out
    }, 500); // Match the duration of the opacity transition (0.5s)
});


noBtn.addEventListener("click", () => {
    // Increase click count each time No button is clicked
    noClickCount++;

    // Get the dimensions of the button
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Calculate random positions while ensuring the button stays within the viewport
    const randomX = Math.random() * (window.innerWidth - buttonWidth);
    const randomY = Math.random() * (window.innerHeight - buttonHeight);

    // Set the position of the No button
    noBtn.style.position = "absolute"; // Ensure the button is absolutely positioned
    noBtn.style.left = `${randomX}px`; // Set random X position
    noBtn.style.top = `${randomY}px`; // Set random Y position

    // Optional: Add a little animation for the move
    noBtn.style.transition = "left 0.5s ease, top 0.5s ease"; // Smooth transition effect

    // Check if No button has been clicked 3 times
    if (noClickCount === 3) {
        visuals.style.display = "flex"; // Show the visuals element
    }
});
