let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;
let fullUrl = window.location.href;

let html = `URL del sitio: <b><span> ${fullUrl}</span></b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `Protocolo: <b>${protocol}</b><br>`;

document.write(html);