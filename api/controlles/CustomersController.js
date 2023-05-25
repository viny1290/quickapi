const database = require('../models');

class CustomersController{
    static async pegaTodosOsCustomers(req, res){
        try{
            const todasOsCustomers = await database.customers.findAll();
            return res.status(200).json(todasOsCustomers);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmCustomers(req, res){
        const {id} = req.params
        try{
            const umCustomer = await database.customers.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(umCustomer);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmCustomersEmail(req, res){
        const {id} = req.params
        try{
            const umCustomer = await database.customers.findOne( {
                where: { email: id }
            });
            return res.status(200).json(umCustomer);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async criaCustomer(req, res){
        const novoCustomer = req.body;
        try{
            const novoCustomerCriado = await database.customers.create(novoCustomer);
            return res.status(200).json(novoCustomerCriado);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async atualizaCustomer(req, res){
        const {id} = req.params;
        const novasInfos = req.body;
        try{
            await database.customers.update(novasInfos, { where: { id: Number(id) } });
            const customerAtualizada = await database.customers.findOne( {
                where: { id: Number(id) }
            });
            return res.status(200).json(customerAtualizada);
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async apagaCustomer(req, res){
        const{ id } = req.params;
        try{
            await database.customers.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deletado.` });
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = CustomersController;