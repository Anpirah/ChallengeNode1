// networkModule.js

const os = require('node:os');

function getNetworkInfo() {
    const networkInfo = {};
    const interfaces = os.networkInterfaces();
    
    for (const interfaceName in interfaces) {
        const interfaceData = interfaces[interfaceName];
        const interfaceInfo = [];

        interfaceData.forEach(data => {
            interfaceInfo.push({
                Familia: data.family,
                Dirección: data.address,
                Interno: data.internal
            });
        });

        networkInfo[interfaceName] = interfaceInfo;
    }
    
    return networkInfo;
}

module.exports = { getNetworkInfo };

