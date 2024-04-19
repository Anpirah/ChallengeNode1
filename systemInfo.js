// systemInfo.js

const { getOSInfo } = require('./osModule');
const { getNetworkInfo } = require('./networkModule');

console.log("Información del Sistema Operativo:");
console.log(getOSInfo());

console.log("\nInformación de las Interfaces de Red:");
console.log(getNetworkInfo());
