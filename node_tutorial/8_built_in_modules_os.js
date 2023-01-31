const os = require('os');

// info about current user
const user = os.userInfo()

console.log(user);

// method returns the system uptime in seconds

const uptime = os.uptime();

hours = Math.floor(uptime / 3600);
minutes = Math.floor((uptime % 3600) / 60);
seconds = Math.floor((uptime % 3600) % 60);

console.log(`The System Uptime is ${hours} hours, ${minutes} minutes and ${seconds} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);