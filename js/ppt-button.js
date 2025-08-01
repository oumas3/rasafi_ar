document.getElementById('presentation-button').addEventListener('click', function(e) {
  e.preventDefault();

  const iframe = document.getElementById('presentation-iframe');
  const pdfUrl = this.getAttribute('href');

  if (iframe.style.display === 'none') {
    iframe.src = pdfUrl;
    iframe.style.display = 'block';
    iframe.scrollIntoView({ behavior: 'smooth' });
  } else {
    // If clicked again, hide the iframe
    iframe.style.display = 'none';
    iframe.src = '';
  }
});
