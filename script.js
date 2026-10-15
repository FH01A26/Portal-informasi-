// Efek transisi navigasi yang aman: tidak menghalangi tautan eksternal atau tab baru.
document.querySelectorAll('a[href]').forEach(a => {
  a.addEventListener('click', () => {
    if (a.target !== '_blank' && a.origin === window.location.origin) {
      document.body.classList.add('leaving');
    }
  });
});

/* ==========================================================
   LEGAL ARENA — FH 01
   Format soal: [kategori, pertanyaan, JAWABAN BENAR, salah1, salah2, salah3, pembahasan]
   Urutan opsi diacak otomatis setiap ronde.
========================================================== */
(() => {
  "use strict";
  const root = document.getElementById("legal-arena");
  if (!root || root.dataset.initialized === "true") return;
  root.dataset.initialized = "true";

  const $ = id => document.getElementById(id);
  const ui = {
    intro: $("arena-intro"), game: $("arena-game"), result: $("arena-result"),
    start: $("arena-start"), restart: $("arena-restart"), next: $("arena-next"),
    hint: $("arena-hint"), number: $("arena-number"), timer: $("arena-timer"),
    progress: $("arena-progress-fill"), score: $("arena-score"),
    combo: $("arena-combo"), best: $("arena-best"), category: $("arena-category"),
    question: $("arena-question"), options: $("arena-options"),
    feedback: $("arena-feedback"), resultIcon: $("arena-result-icon"),
    resultTitle: $("arena-result-title"), resultDesc: $("arena-result-desc"),
    finalScore: $("arena-final-score"), bestResult: $("arena-best-result"),
    correct: $("arena-correct"), accuracy: $("arena-accuracy"),
    share: $("arena-share"), shareStatus: $("arena-share-status")
