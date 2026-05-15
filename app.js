const embedUrlInput = document.getElementById('embedUrl');
const loadButton = document.getElementById('loadButton');
const powerbiFrame = document.getElementById('powerbiFrame');
const framePlaceholder = document.getElementById('framePlaceholder');

function showPlaceholder() {
  framePlaceholder.hidden = false;
  powerbiFrame.hidden = true;
  powerbiFrame.src = 'about:blank';
}

function showFrame(url) {
  framePlaceholder.hidden = true;
  powerbiFrame.hidden = false;
  powerbiFrame.src = url;
}

loadButton.addEventListener('click', () => {
  const rawUrl = embedUrlInput.value.trim();
  if (!rawUrl) {
    alert('Por favor, cole a URL do embed do Power BI.');
    return;
  }

  try {
    const url = new URL(rawUrl, window.location.href);
    showFrame(url.href);
  } catch (error) {
    alert('URL inválida. Verifique e tente novamente.');
    showPlaceholder();
  }
});

showPlaceholder();
