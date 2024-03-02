function navigate() {
  const url = document.getElementById("url").value;
  if (!url.startsWith("https")) {
    url = "https://" + url;
  }
  const iframe = document.getElementById("content");
  iframe.src = url;
}
