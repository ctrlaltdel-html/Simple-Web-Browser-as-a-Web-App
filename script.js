let history = [];
let currentIdx = -1;

function navigate() {
  const url = document.getElementById("url").value;
  if (!url.startsWith("http")) {
    url = "http://" + url;
  }
  history.push(url); // Add new URL to history
  currentIdx = history.length - 1; // Update current position
  const iframe = document.getElementById("content");
  iframe.src = url;
  document.getElementById("url").value = url; // Update URL input with current URL
}

function goBack() {
  if (currentIdx > 0) {
    currentIdx--;
    const url = history[currentIdx];
    const iframe = document.getElementById("content");
    iframe.src = url;
    document.getElementById("url").value = url;
  }
}

function goForward() {
  if (currentIdx < history.length - 1) {
    currentIdx++;
    const url = history[currentIdx];
    const iframe = document.getElementById("content");
    iframe.src = url;
    document.getElementById("url").value = url;
  }
}
