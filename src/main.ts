import { setupRoutes } from "./routes/routes";
import Navigo from "navigo";


const router = new Navigo("/", { hash: false });
setupRoutes(router);

