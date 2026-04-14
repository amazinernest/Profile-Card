function updateTime() {
  const timeElement = document.getElementById('epoch-time');
  if (timeElement) {
    const now = Date.now();
    timeElement.innerHTML = `${now}<span class="time-unit">ms</span>`;
    timeElement.setAttribute('aria-label', `Current time: ${now} milliseconds`);
  }
}

// Update immediately and then every second
updateTime();
setInterval(updateTime, 1000);
