const https = require('https');

const get = async (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {

            const { statusCode } = response;

            if (statusCode !== 200) {
                reject();
            }

            let rawData = '';
            response.on('data', (chunk) => { rawData += chunk; });
            response.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (error) {
                    reject(error);
                }
            });
        });
    });
};

module.exports = {
    get: get
}