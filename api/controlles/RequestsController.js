const database = require('../models');

class RequestsController{
    static async pegaTodosOsRequests(req, res){
        try{
            const todasOsRequests = await database.requests.findAll();
            return res.status(200).json(todasOsRequests);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmRequests(req, res){
        const {id} = req.params
        try{
            const umRequests = await database.requests.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(umRequests);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaRequests(req, res){
        const novoRequests = req.body;
        try{
            const novoRequestsCriado = await database.requests.create(novoRequests);
            return res.status(200).json(novoRequestsCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaRequests(req, res){
        const {id} = req.params;
        const novasInfos = req.body;
        try{
            await database.requests.update(novasInfos, { where: { id: Number(id) } });
            const requestsAtualizada = await database.requests.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(requestsAtualizada);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaRequests(req, res){
        const{ id } = req.params;
        try{
            await database.requests.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deletado.` });
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = RequestsController;