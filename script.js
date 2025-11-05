// CAMBIO DE TEMA
const body = document.getElementById("body");
const btnTheme = document.getElementById("btnTheme");

btnTheme.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// BOTÓN ENVIAR MENSAJE
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();  // evita que recargue
    msg.classList.remove("hidden");
    msg.textContent = `✅ Gracias ${name.value}, tu mensaje fue enviado.`;

    form.reset();
});
