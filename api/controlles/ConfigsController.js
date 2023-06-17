const database = require('../models');

class ConfigsController{
    static async pegaConfig(req, res){
        const {id} = req.params
        try{
            const config = await database.Config.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(config);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaConfig(req, res){
        const novoConfig = req.body;
        try{
            const novoConfigCriado = await database.Config.create(novoConfig);
            return res.status(200).json(novoConfigCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaConfig(req, res){
        const {id} = req.params;
        const novasInfos = req.body;
        try{
            await database.Config.update(novasInfos, { where: { id: Number(id) } });
            const configAtualizada = await database.Config.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(configAtualizada);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ConfigsController;