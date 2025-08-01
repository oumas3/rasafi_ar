// Handles CV button viewer logic
const cvButtons = document.querySelectorAll('.cv-button');
const viewerSection = document.getElementById('cv-viewer-section');
const iframe = document.getElementById('cv-frame');

cvButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const pdfUrl = this.getAttribute('href');
    iframe.src = pdfUrl;
    viewerSection.style.display = 'block';
    viewerSection.scrollIntoView({ behavior: 'smooth' });
  });
});

function showCV(button, pdfPath) {
  const viewer = button.nextElementSibling;
  const iframe = viewer.querySelector('iframe');
  iframe.src = pdfPath;
  viewer.style.display = 'block';
}
