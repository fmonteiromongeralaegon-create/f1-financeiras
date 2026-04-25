import { Router, type IRouter } from "express";
import healthRouter from "./health";
import leadsRouter from "./leads";
import propostasRouter from "./propostas";

const router: IRouter = Router();

router.use(healthRouter);
router.use(leadsRouter);
router.use(propostasRouter);

export default router;
