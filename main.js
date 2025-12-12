window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("popup").style.display = "flex";
  }, 10000); // 10秒後
});

document.getElementById("popup-close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
