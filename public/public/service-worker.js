self.addEventListener("install", (e) => {
  console.log("Service Worker: Instalado");
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Buscando", e.request.url);
});
