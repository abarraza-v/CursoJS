class Celular {
    constructor(nombre, color,peso,rdp,rdc,ram) {
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    InformacionDelSistema() {
        return `<b>Características de ${this.nombre}</b>: <br>
        Color: <b>${this.color}</b> <br> 
        Peso: <b>${this.peso}</b> <br> 
        Resolución de pantalla: <b>${this.rdp}</b> <br> 
        Memoria RAM: <b>${this.ram}</b>`;
    }

    presionarBotónEncendido() {
        if (this.encendido == false) {
            alert(`${this.nombre} ha encendido.`);
            this.encendido = true;
        } else {
            alert("El teléfono se ha apagado.");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando...");
        } else {
            alert("El teléfono está apagado.");
        }
    }

    tomarFoto() {
        if (this.encendido == true) {
            alert(`Foto tomada en resolución ${this.rdc}.`);
        } else {
            alert("El teléfono está apagado.");
        }
    }
    grabarVideo() {
        if (this.encendido == true) {
            alert(`El teléfono está grabando en una resolución ${this.rdc}.`);
        } else {
            alert("El teléfono está apagado.");
        }
    }
}

class CelularAltaGama extends Celular {
    constructor(nombre, color,peso,rdp,rdc,ram,rdce) {
        super(nombre, color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    tomarFoto4k() {
        alert(`Tomando foto en resolución ${this.resolucionDeCamaraExtra}`);
    }

    grabarVideoLento() {
        alert("Estás grabando en Slow Motion.");
    }
    
    reconocimientoFacial() {
        alert("Iniciando reconocimiento facial");
    }

    infoAltaGama() {
        return this.InformacionDelSistema() + `<br> Resolución de Cámara Extra: <b>${this.resolucionDeCamaraExtra}</b>`
    }
}

class App {
    constructor(nombre,descargas,puntuación,peso) {
        this.nombre = nombre;
        this.descargas = descargas;
        this.puntuación = puntuación;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    instalar() {
        if (this.instalada == false) {
            alert(`La App ${this.nombre} ha sido instalada.`);
            this.instalada = true
        } else {
            alert(`ERROR: La App ${this.nombre} ya está instalada.`);
        }
    }
    
    abrir() {
        if (this.iniciada == false) {
            alert(`Abriste la App ${this.nombre}.`);
            this.iniciada = true;
        } else {
            alert(`La app ya está abierta.`);
        }
    }
    
    cerrar() {
        if (this.iniciada == true) {
            alert(`Cerraste la App ${this.nombre}.`);
            this.iniciada = false;
        } else {
            alert(`La app ya está cerrada.`);
        }
    }
    
    desinstalar() {
        if (this.instalada == true) {
            alert(`La app ${this.nombre} ha sido desinstalada.`);
            this.instalada = false;
        } else {
            alert('La app no está instalada.')
        }
    }

    appInfo() {
        return `<b>${this.nombre}</b>: <br> 
        Peso: <b>${this.peso}</b> <br> 
        Puntuación: <b>${this.puntuación}</b> <br> 
        Descargas: <b>${this.descargas}</b>`;
    }
}

celular1 = new Celular("Redmi 10","Azúl","200G","7.0' Pulgadas","Full HD","6GB");
celular2 = new Celular("Galaxy A51","Celeste","170G","6.6'","Full HD","6GB");
celular3 = new Celular("Galaxy A20","Violeta","150G","6.0'","Full HD","4GB");

celularAltaGama1 = new CelularAltaGama("Iphone 14","Negro","120G","7 Pulgadas","Full HD","8GB","4K");
celularAltaGama2 = new CelularAltaGama("Galaxy S22","Verde","129G","7 Pulgadas","Full HD","8GB","4K");

app1 = new App("Subway Surfers","2.8M","4.8 Estrellas","206 MB");
app2 = new App("Clash Royale","5.1M","4.5 Estrellas","895 MB");
app3 = new App("Brawl Stars","3.7M","4.4 Estrellas","1032 MB");

document.write(`
${celular1.InformacionDelSistema()} <br> <br>
${celular2.InformacionDelSistema()} <br> <br>
${celular3.InformacionDelSistema()} <br> <br>
${celularAltaGama1.infoAltaGama()} <br> <br>
${celularAltaGama2.infoAltaGama()} <br> <br>

${app1.appInfo()} <br> <br>
${app2.appInfo()} <br> <br>
${app3.appInfo()} <br> <br>
`);


app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();