import { pet } from '../controller/pet_controller.js'

import express from 'express'

const router = express.Router()

router.get('/pet', pet.getPet)
router.post('/pet', pet.createPet)
router.put('/pet/:codigo_pet', pet.updatePet)
router.delete('/pet/:codigo_pet', pet.deletePet)

export {router} 




