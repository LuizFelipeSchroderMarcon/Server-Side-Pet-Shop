import { tutor } from "../controller/tutor_controller.js";
import express from "express"

const router = express.Router()

router.get('/tutor', tutor.getTutor)
router.post('/tutor', tutor.createTutor)
router.put('/tutor/:id_tutor', tutor.updateTutor)
router.delete('/tutor/:id_tutor', tutor.deleteTutor)

export {router}

