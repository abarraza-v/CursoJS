const contenedor = document.querySelector(".flex-container")

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function crearLlave(nombre, modelo, precio) {
    let img = "<img src='llave.png' alt='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id= ${modelo}>Modelo ${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img, nombre, modelo, precio]
}

let documentFragment = document.createDocumentFragment();

for (let i = 1 ; i <= 20 ; i++) {
    let precioRandom = getRndInteger(10, 30);
    let modeloRandom = getRndInteger(1000, 10000);

    let llave = crearLlave(`Llave ${i}`, modeloRandom, precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{
        document.querySelector(".key-data").value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave.join("");
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);