const embedUrlInput = document.getElementById('embedUrl');
const loadButton = document.getElementById('loadButton');
const powerbiFrame = document.getElementById('powerbiFrame');

loadButton.addEventListener('click', () => {
  const rawUrl = embedUrlInput.value.trim();
  if (!rawUrl) {
    alert('Por favor, cole a URL do embed do Power BI.');
    return;
  }

  try {
    const url = new URL(rawUrl, window.location.href);
    powerbiFrame.src = url.href;
  } catch (error) {
    alert('URL inválida. Verifique e tente novamente.');
  }
});
