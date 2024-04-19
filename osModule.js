const os = require ('node:os');

function getOSInfo() {
    const osInfo = {
        Nombre: os.hostname(),
        Tipo: os.type(),
        Version: os.version(),
        Arquitectura: os.arch(),
        CPUs: os.cpus().length,
        MemoriaTotal: (os.totalmem() / 1024 / 1024 + 'MB'),
        MemoriaLibre: (os.freemem() / 1024 / 1024 + 'MB'),
    };
    return osInfo
}


module.exports = { getOSInfo };