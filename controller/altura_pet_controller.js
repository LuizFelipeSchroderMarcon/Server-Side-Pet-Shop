import { alturaPet } from "../models/altura_pet_model.js";

const altura_pet = {}


function classificarAltura(altura){
    if(altura <= 13 ) return 'Pequeno'
    if(altura > 13 && altura < 40) return 'Médio'
    else return 'Alto'
}

altura_pet.getAltura = async(req,res)=>{
    try {
        const altura = await alturaPet.findAll()
        res.send(altura)
    } catch (e) {
        console.log("Erro ao tentar consultar a altura do pet......", e)
    }
}

altura_pet.createAltura = async(req,res)=>{
    try {
        const {altura, codigo_pet} = req.body;
        const alturaClassificada = classificarAltura(altura)

        const novaAltura = await alturaPet.create({
            altura: alturaClassificada,
            codigo_pet: codigo_pet
        })
        
        res.send(novaAltura)

    } catch (error) {
        console.log('Erro ao criar uma nova altura', error)
    }
}

altura_pet.updateAltura = async(req,res)=>{
    try {
        const {id_altura} = req.params
        const {altura, codigo_pet} = req.body

        const alturaClassificada = classificarAltura(altura)

        await alturaPet.update(
            {altura:alturaClassificada, codigo_pet: codigo_pet},
            {where:{id_altura:id_altura}}
        )
        const alturaAtualizada = await alturaPet.findByPk(id_altura)
        res.send(alturaAtualizada)
    } catch (error) {
        console.log('Erro ao atualizar uma altura', error)
    }
}

altura_pet.deleteAltura = async(req,res)=>{
    try {
        const {id_altura} = req.params
        await alturaPet.destroy({
            where:{id_altura:id_altura}
        })

        res.send({message: 'Altura deletada com sucesso'})
    } catch (error) {
        console.log("Erro ao tentar deletar uma altura.......", error)
    }
}


export {altura_pet}