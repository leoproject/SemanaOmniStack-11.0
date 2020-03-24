const connection = require('../dataBase/connection');


module.exports ={
    async create(request,response){
        const {id} = request.body;

        const ong = await connection('ongs')
         .where('id',id)
         .select('*')
         .first()

        if(!ong){
            return response.status(400).json({error: "No found ong with this id!!"});
        }

        return response.json(ong);
    }

}