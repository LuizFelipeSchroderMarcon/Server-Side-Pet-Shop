import { altura_pet } from "../controller/altura_pet_controller.js";
import express from "express"

const router = express.Router()

router.get('/alturaPet', altura_pet.getAltura)
router.post('/alturaPet', altura_pet.createAltura)
router.put('/alturaPet/:id_altura', altura_pet.updateAltura)
router.delete('/alturaPet/:id_altura', altura_pet.deleteAltura)

export {router}
