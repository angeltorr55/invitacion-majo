// script.js

let pantallaActual = 1;

function mostrarPantalla(num) {
  const pantallas = document.querySelectorAll('.pantalla');
  pantallas.forEach(p => p.classList.remove('visible'));

  const siguiente = document.getElementById(`pantalla${num}`);
  if (siguiente) {
    siguiente.classList.add('visible');
    animarTexto(siguiente);
    pantallaActual = num;
  }
}

function animarTexto(pantalla) {
  const textoElemento = pantalla.querySelector('.texto');
  if (!textoElemento) return;

  const textoCompleto = textoElemento.getAttribute('data-text');
  textoElemento.textContent = '';
  let i = 0;

  const interval = setInterval(() => {
    textoElemento.textContent += textoCompleto[i];
    i++;
    if (i >= textoCompleto.length) clearInterval(interval);
  }, 50); // velocidad de letra (50 ms por letra)
}

// Mostrar la primera pantalla al cargar
window.onload = () => {
  mostrarPantalla(1);
};
