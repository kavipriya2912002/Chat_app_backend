import express from "express";
import { createUser } from "../controller/userController.js";
const router = express.Router();

router.post('/createUser',createUser);


export default router;