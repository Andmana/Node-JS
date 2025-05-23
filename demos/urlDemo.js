import url, { URLSearchParams } from "url";

const urlString = "https:///www.google.com/search?q=hello+world";

// URL Object
const urlObj = new URL(urlString);
console.log(urlObj);

// format()
console.log(url.format(urlObj));

// import.meta.url - file URL
console.log(import.meta.url);

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
params.append("limit", "5");
// get value param
console.log(params.get("q"));
console.log(params);
