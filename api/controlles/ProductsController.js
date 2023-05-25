const database = require('../models');

class ProductsController{
    static async pegaTodosOsProducts(req, res){
        try{
            const todasOsProducts = await database.products.findAll();
            return res.status(200).json(todasOsProducts);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmProducts(req, res){
        const {id} = req.params
        try{
            const umProducts = await database.products.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(umProducts);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaProducts(req, res){
        const novoProducts = req.body;
        try{
            const novoProductsCriado = await database.products.create(novoProducts);
            return res.status(200).json(novoProductsCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaProducts(req, res){
        const {id} = req.params;
        const novasInfos = req.body;
        try{
            await database.products.update(novasInfos, { where: { id: Number(id) } });
            const productsAtualizada = await database.products.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(productsAtualizada);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaProducts(req, res){
        const{ id } = req.params;
        try{
            await database.products.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deletado.` });
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ProductsController;