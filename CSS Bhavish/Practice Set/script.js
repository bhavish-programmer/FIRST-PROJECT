window.onload = function() {
    let progressBar = document.getElementById('progress-bar');
    let width = 0;
    let interval = setInterval(frame, 20);
  
    function frame() {
      if (width >= 100) {
        clearInterval(interval);
        progressBar.classList.add('bounce');
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }
  };
  