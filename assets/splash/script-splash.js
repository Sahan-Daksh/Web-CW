const splashScreen = document.getElementById('splash-screen');
const splashVideo = document.getElementById('splash-video');

// Display splash screen content for 4 seconds
setTimeout(() => {
  splashScreen.style.display = 'none';
  splashVideo.style.opacity = 1; // Make video visible after splash screen fades
}, 6000); // Change 4000 to adjust display time in milliseconds

// Play video for 4 seconds and then redirect
splashVideo.addEventListener('loadedmetadata', () => {
  setTimeout(() => {
    window.location.href = "index.html"; // Homepage link
  }, splashVideo.duration * 2000); // Redirect after video duration (in seconds)
});
