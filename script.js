/* EASTER EGG */
let secret = "";
const target = "beratakkurt";

document.addEventListener("keydown", (e) => {
  secret += e.key.toLowerCase();
  if (!target.startsWith(secret)) {
    secret = "";
  }
  if (secret === target) {
    window.location.href = "beratakkurtözelsayfa.html";
  }
});

function openBetaModal() {
  document.getElementById("betaModal").style.display = "flex";
}

function closeBetaModal() {
  document.getElementById("betaModal").style.display = "none";
}
