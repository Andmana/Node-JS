// Read File method
// import fs from "fs";
import fs from "fs/promises";

// readFile() -  callback
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log("data : ", data);
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log("data sync : ", data);

// readFile() - Promise .then()
fs.readFile("./test.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// readFile() - asycn/awai
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, i'm writting to this file");
    console.log("Writting to ...");
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to");
  } catch (error) {
    console.log(error);
  }
};

// writeFile();
appendFile();
readFile();
