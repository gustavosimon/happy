import { Router } from "express";

import multer from "multer";
import multerConfig from "./config/upload";

import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();

const upload = multer(multerConfig);

routes.post("/orphanages", OrphanagesController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", upload.array("images"), OrphanagesController.show);

export default routes;