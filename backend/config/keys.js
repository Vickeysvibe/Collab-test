const fs = require('fs');
const path = require('path');
require('dotenv').config();

const privateKeyPath = path.resolve(__dirname, '..', process.env.PRIVATE_KEY_PATH);
const publicKeyPath = path.resolve(__dirname, '..', process.env.PUBLIC_KEY_PATH);

let privateKey;
let publicKey;

try {
    privateKey = fs.readFileSync(privateKeyPath, 'utf8');
} catch (err) {
    console.error(`Error reading private key from ${privateKeyPath}:`, err.message);
    process.exit(1);
}

try {
    publicKey = fs.readFileSync(publicKeyPath, 'utf8');
} catch (err) {
    console.error(`Error reading public key from ${publicKeyPath}:`, err.message);
    process.exit(1);
}

module.exports = {
    privateKey,
    publicKey,
};
