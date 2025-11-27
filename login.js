// La función que maneja la lógica de inicio de sesión
function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  // Clave estática para la demo
  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password").value;

  // 2. Realizar la verificación
  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");
    // Redirige a tu página principal
    window.location.href = "LP.html";
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}

// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");
});

// (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia
// btn.classList.toggle("open");
