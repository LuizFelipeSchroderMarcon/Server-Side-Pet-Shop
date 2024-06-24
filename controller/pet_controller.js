import { Pet } from "../models/pet_model.js";

const pet = {}

pet.getPet = async(req,res)=>{
    try {
        const pets = await Pet.findAll()
        res.send(pets)
    } catch (e) {
        console.log("Erro ao tentar consultar a tabela.......", e)
    }
}

pet.createPet = async(req,res)=>{
    try {
        const {nome_pet, genero_pet, id_tutor} = req.body

        const novoPet = await Pet.create({
            nome_pet: nome_pet,
            genero_pet: genero_pet,
            id_tutor: id_tutor
        })

        res.send(novoPet)

    } catch (e) {
        console.log('Erro ao tentar inserir um novo pet...........', e)
    }
}

pet.updatePet = async(req,res)=>{
    try {
        const {codigo_pet} = req.params
        const {nome_pet, genero_pet, id_tutor} = req.body

        await Pet.update(
            {nome_pet:nome_pet, genero_pet:genero_pet, id_tutor:id_tutor},
            {where:{codigo_pet: codigo_pet}}
        )

        const petAtualizado = await Pet.findByPk(codigo_pet)
        res.send(petAtualizado)
    } catch (e) {
        console.log("Erro ao tentar atualizar um caso........", e)
    }
}

pet.deletePet = async(req,res)=>{
    try {
        const {codigo_pet} = req.params
        await Pet.destroy({
            where:{codigo_pet:codigo_pet}
        })
    } catch (e) {
        console.log("Não possivel Deletar.......", e)
    }
}

export {pet}