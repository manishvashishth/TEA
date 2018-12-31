import { Router, Request, Response, NextFunction } from 'express';
import api from './api';

const router: Router = Router();

// Api Routes
router.use("/api", api);

router.get("/", function(req: Request, res: Response, next: NextFunction){
	res.render("client");
});

router.get("/admin/*", function(req: Request, res: Response, next: NextFunction){
	res.render("admin");
});


export default router;