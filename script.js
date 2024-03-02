let history = [];
let currentIdx = -1;

function navigate() {
  const url = document.getElementById("url").value;
  if (!url.startsWith("http")) {
    url = "http://" + url;
  }
  history.push(url);
  currentIdx = history.length - 1;
  const iframe = document.getElementById("content");
  iframe.src = url;
  document.getElementById("url").value = url;
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

function refreshPage() {
  const iframe = document.getElementById("content");
  const url = iframe.src;
  iframe.src = url;
}
