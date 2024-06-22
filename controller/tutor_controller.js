import { Tutor } from "../models/tutor_model.js";

const tutor = {}

tutor.getTutor = async(req, res) => {
    try {
        const tutores = await Tutor.findAll()
        res.send(tutores)
    } catch (e) {
        console.log('Erro ao acessar a tabela.......', e)
    }
}

tutor.createTutor = async(req, res) => {
    try {
        const {cpf, nome, email} = req.body;

        const novoTutor = await Tutor.create({
            cpf: cpf,
            nome: nome,
            email: email
        })

        res.send(novoTutor);
    } catch (e) {
        console.log('Erro ao inserir um novo tutor......', e)
    }
}


tutor.updateTutor = async(req, res) =>{
    try {
        const {id_tutor} = req.params
        const {cpf, nome, email} = req.body
        
        await Tutor.update(
            {
                cpf: cpf,
                nome: nome,
                email: email
            },
            {where: {id_tutor: id_tutor}}
        )
        const tutorAtualizado = await Tutor.findByPk(id_tutor)
        
        res.send(tutorAtualizado)
    } catch (e) {
        console.log("Erro ao atualizar.........", e)
    }
}

tutor.deleteTutor = async(req,res) => {
    try {
        const {id_tutor} = req.params

        await Tutor.destroy({
            where: {id_tutor: id_tutor}
        })

        res.send({message: 'Tutor deletado com sucessor'})

    } catch (e) {
        console.log('Não foi possivel deletar.....', e)
    }
}

export {tutor}