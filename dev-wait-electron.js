// since the dev server takes a while to load, electron startup should be delayed
const net = require('net');

// foreman increments the port number of each consequetive service in Procfile
const port = process.env.PORT - 100;
const client = new net.Socket();

let startedElectron = false;

// wait for a response from the react dev server
const tryConnection = () => client.connect({port: port}, () => {
        client.end();
        if(!startedElectron) {
            console.log('starting electron');
            startedElectron = true;
            const exec = require('child_process').exec;
            exec('yarn electron');
        }
    }
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});
