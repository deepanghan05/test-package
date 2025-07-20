import fs from "fs";
import { getClientIp } from "./utils.js";

function collectLogs(req, res, next) {

    const route = req.originalUrl;
    const method = req.method
    let ip = getClientIp(req);
    const timestamp = new Date().toUTCString();

    if(!fs.existsSync("./data.json")) {
        fs.writeFileSync("./data.json", JSON.stringify([]));
    }

    const data = JSON.parse(fs.readFileSync("./data.json"));

    fs.writeFileSync("./data.json", JSON.stringify([ ...data, {
        route : req.originalUrl,
        method : req.method,
        ip : ip,
        timestamp : timestamp
    }]));

    next();

};

export { collectLogs };