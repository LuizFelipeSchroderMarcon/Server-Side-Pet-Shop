import { tutor } from "../controller/tutor_controller.js";
import express from "express"
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router()

router.get('/tutor', authenticateToken, tutor.getTutor)
router.post('/tutor', tutor.createTutor)
router.put('/tutor/:id_tutor', tutor.updateTutor)
router.delete('/tutor/:id_tutor', tutor.deleteTutor)

export {router}

