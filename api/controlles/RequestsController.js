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
}

module.exports = RequestsController;