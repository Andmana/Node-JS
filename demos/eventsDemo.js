import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHanlder(name) {
  console.log("Hello world " + name);
}

function goodbyeHanlder(name) {
  console.log("Goodbye world " + name);
}

// Register event listeners
myEmitter.on("greet", greetHanlder);
myEmitter.on("goodbye", goodbyeHanlder);

myEmitter.emit("greet");
myEmitter.emit("goodbye");

myEmitter.emit("greet", "john");
myEmitter.emit("goodbye", "john");

// error handling
myEmitter.on("error", (err) => {
  console.log("An error occured : ", err);
});

myEmitter.emit("error", new Error("Something went wrong"));
