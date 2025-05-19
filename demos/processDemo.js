// argv
// console.log(process.argv);
console.log(process.argv[3]); // node processDemo.js import -s  'become =>' -s

// process.env
console.log(process.env);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// memoryUsage()
console.log(process.memoryUsage());

// update()
console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with code ${code}`);
});

// exit()
process.exit(1);

console.log("Hello from after exit");
