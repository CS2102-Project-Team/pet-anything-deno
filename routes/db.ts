import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();
// controller
import dbcontroller from "../controllers/db.ts";
router
  .post("/query", dbcontroller.query);

export default router;
