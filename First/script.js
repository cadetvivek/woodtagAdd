document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-player');
    const unmuteButton = document.getElementById('unmuteButton');
    
    unmuteButton.addEventListener('click', function() {
      if (video.muted) {
        video.muted = false;
        unmuteButton.textContent = '🔊';
      } else {
        video.muted = true;
        unmuteButton.textContent = '🔇';
      }
    });
    
   
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
      
      console.log('CTA button clicked');
     
    });
    
    
    video.addEventListener('ended', function() {
      video.play();
    });
  });