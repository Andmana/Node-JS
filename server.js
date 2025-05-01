import http from "http";
import url from "url";
import path from "path";
import fs from "fs/promises";
import { error } from "console";

const PORT = process.env.PORT;

// Get cyrrent PATH
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === "GET") {
            let filePath;
            if (req.url === "/")
                filePath = path.join(__dirname, "public", "index.html");
            else if (req.url === "/about")
                filePath = path.join(__dirname, "public", "about.html");
            else {
                throw new error("Not Found");
            }

            const data = await fs.readFile(filePath);
            res.setHeader("content-type", "text/html");
            res.write(data);

            res.end();
        } else {
            throw new error("Method not Allowed");
        }
    } catch (error) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.end(`Server error`);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
