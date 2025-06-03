self.addEventListener("install", (event) => {
  console.log("Service worker instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activado.");
});

self.addEventListener("fetch", (event) => {
  // Esto permite que funcione offline si se configura bien
});