"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const https_1 = __importDefault(require("https"));
const port = 443;
class App {
    constructor(port) {
        this.port = port;
        const app = (0, express_1.default)();
        app.use(express_1.default.static(path_1.default.join(__dirname, "../client")));
        app.use("/build/three.module.js", express_1.default.static(path_1.default.join(__dirname, "../../node_modules/three/build/three.module.js")));
        app.use("/jsm/:folder/:file", (req, res) => {
            res.sendFile(path_1.default.join(__dirname, "../../node_modules/three/examples/jsm/" + req.params.folder + "/" + req.params.file + ".js"));
        });
        app.use("/assets/:folder/:file", (req, res) => {
            res.sendFile(path_1.default.join(__dirname, "../../dist/client/assets/" + req.params.folder + "/" + req.params.file));
        });
        const options = {
            key: fs_1.default.readFileSync('c:/GitRepos/localhost-key.pem'),
            cert: fs_1.default.readFileSync('c:/GitRepos/localhost.pem')
        };
        this.server = https_1.default.createServer(options, app);
    }
    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map