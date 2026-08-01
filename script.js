const pages = [...document.querySelectorAll(".page")];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("pageDots");
const startBtn = document.querySelector(".start-btn");
const restartBtn = document.querySelector(".restart-btn");
let currentPage = 0;

// Reemplazar por el número real que recibirá las confirmaciones.
// Formato internacional sin +, espacios ni guiones. Ejemplo Colombia: 573001234567.
const NUMERO_WHATSAPP = "12672342685";

function createDots() {
  pages.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "page-dot";
    dot.setAttribute("aria-label", `Ir a la página ${index + 1}`);
    dot.addEventListener("click", () => showPage(index));
    dotsContainer.appendChild(dot);
  });
}

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((page, i) => page.classList.toggle("active", i === currentPage));

  [...dotsContainer.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === currentPage);
  });

  prevBtn.disabled = currentPage === 0;
  nextBtn.textContent = currentPage === pages.length - 1 ? "Volver al inicio" : "Siguiente →";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

prevBtn.addEventListener("click", () => showPage(currentPage - 1));
nextBtn.addEventListener("click", () => {
  if (currentPage === pages.length - 1) showPage(0);
  else showPage(currentPage + 1);
});
startBtn.addEventListener("click", () => showPage(1));
restartBtn.addEventListener("click", () => showPage(0));

createDots();
showPage(0);

const weddingDate = new Date("2026-09-05T16:00:00-04:00");

// Fecha de revelación configurada para el 8 de agosto de 2026 al mediodía.
// Cambie estos tres valores cuando tenga el lugar y la hora definitivos.
const revealDate = new Date("2026-08-08T12:00:00-04:00");
const LUGAR_BODA = "Dirección exacta por agregar, Pensilvania, Estados Unidos";
const HORA_BODA = "Hora por agregar";
const URL_MAPA = "#";

function updateCountdown() {
  const difference = weddingDate.getTime() - Date.now();
  const safeDifference = Math.max(0, difference);

  const days = Math.floor(safeDifference / 86400000);
  const hours = Math.floor((safeDifference % 86400000) / 3600000);
  const minutes = Math.floor((safeDifference % 3600000) / 60000);
  const seconds = Math.floor((safeDifference % 60000) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;
  const guestCount = document.getElementById("guestCount").value;
  const dietary = document.getElementById("dietary").value.trim() || "Ninguna";
  const song = document.getElementById("song").value.trim() || "Sin sugerencia";

  const message = [
    "Confirmación de asistencia",
    "",
    `Invitado: ${name}`,
    `Respuesta: ${attendance}`,
    `Número de asistentes: ${guestCount}`,
    `Restricciones alimentarias: ${dietary}`,
    `Canción sugerida: ${song}`,
    "",
    "Boda de Luis Felipe Cano y Ana María Cárdenas",
    "5 de septiembre de 2026"
  ].join("\n");

  const result = document.getElementById("rsvpResult");
  result.classList.add("show");
  result.textContent = "Abriendo WhatsApp para enviar la confirmación…";

  const whatsappUrl = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});


function updateRevealCountdown() {
  const difference = revealDate.getTime() - Date.now();
  const isRevealed = difference <= 0;
  const safeDifference = Math.max(0, difference);

  const days = Math.floor(safeDifference / 86400000);
  const hours = Math.floor((safeDifference % 86400000) / 3600000);
  const minutes = Math.floor((safeDifference % 3600000) / 60000);
  const seconds = Math.floor((safeDifference % 60000) / 1000);

  const ids = {
    revealDays: days,
    revealHours: hours,
    revealMinutes: minutes,
    revealSeconds: seconds
  };

  Object.entries(ids).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });

  const details = document.getElementById("revealedDetails");
  const message = document.getElementById("revealMessage");
  const countdown = document.querySelector(".reveal-countdown");
  const boardingPlace = document.getElementById("boardingPlace");
  const boardingTime = document.getElementById("boardingTime");
  const placeCardText = document.getElementById("placeCardText");
  const placeCardButton = document.getElementById("placeCardButton");
  const finalPlace = document.getElementById("finalPlace");
  const finalTime = document.getElementById("finalTime");
  const mapButton = document.getElementById("mapButton");

  if (isRevealed) {
    if (details) details.hidden = false;
    if (countdown) countdown.hidden = true;
    if (message) message.textContent = "¡La dirección exacta y la hora han sido reveladas!";
    if (boardingPlace) boardingPlace.textContent = "PENSILVANIA, EE. UU.";

    if (boardingTime) boardingTime.textContent = HORA_BODA;
    if (placeCardText) placeCardText.textContent = `${LUGAR_BODA} · ${HORA_BODA}`;
    if (finalPlace) finalPlace.textContent = LUGAR_BODA;
    if (finalTime) finalTime.textContent = HORA_BODA;

    [placeCardButton, mapButton].forEach((button) => {
      if (!button) return;
      button.href = URL_MAPA;
      button.classList.remove("disabled-link");
      button.removeAttribute("aria-disabled");
    });
  } else {
    if (details) details.hidden = true;
    if (countdown) countdown.hidden = false;
  }
}

updateRevealCountdown();
setInterval(updateRevealCountdown, 1000);
