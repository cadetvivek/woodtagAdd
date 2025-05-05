document.addEventListener('DOMContentLoaded', function() {
    // Animation for Stage 1
    setTimeout(function() {
        document.getElementById('stage1').classList.add('active');
    }, 500);
    
   
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;
    let currentQuestion = 1;
    
   
    document.getElementById('start-game').addEventListener('click', function() {
        document.getElementById('stage1').style.display = 'none';
        document.getElementById('stage2').style.display = 'flex';
    });
    
    
    const mapContainer = document.getElementById('map-container');
    const mapImg = document.getElementById('map-img');
    
    mapContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.pageX - mapContainer.offsetLeft;
        startY = e.pageY - mapContainer.offsetTop;
        scrollLeft = mapImg.offsetLeft;
        scrollTop = mapImg.offsetTop;
        mapImg.style.cursor = 'grabbing';
    });
    
    mapContainer.addEventListener('mouseleave', function() {
        isDragging = false;
        mapImg.style.cursor = 'grab';
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        mapImg.style.cursor = 'grab';
    });
    
    mapContainer.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - mapContainer.offsetLeft;
        const y = e.pageY - mapContainer.offsetTop;
        
        const walkX = (x - startX);
        const walkY = (y - startY);
        
        mapImg.style.left = `${scrollLeft + walkX}px`;
        mapImg.style.top = `${scrollTop + walkY}px`;
    });
    
   
    const pins = document.querySelectorAll('.pin');
    const feedback = document.getElementById('feedback');
    const targetDesc = document.querySelector('.target-desc');
    
    pins.forEach(pin => {
        pin.addEventListener('click', function() {
            const country = this.getAttribute('data-country');
            
            if (currentQuestion === 1 && country === 'ITALY') {
                feedback.textContent = 'CORRECT';
                feedback.style.color = '#4CAF50';
                targetDesc.textContent = 'He just left by plane to meet a guy at the banks of the Seine river.';
                currentQuestion = 2;
                setTimeout(() => {
                    feedback.textContent = '';
                }, 1500);
            } else if (currentQuestion === 2 && country === 'FRANCE') {
                document.getElementById('stage2').style.display = 'none';
                document.getElementById('stage3').style.display = 'flex';
            } else {
                feedback.textContent = 'INCORRECT';
                feedback.style.color = '#F44336';
                setTimeout(() => {
                    feedback.textContent = '';
                }, 1500);
            }
        });
    });
});