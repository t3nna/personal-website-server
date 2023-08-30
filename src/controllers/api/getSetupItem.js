const {getSetupById} = require('../../services')

module.exports = async (req, res, next) =>{
  try{
   const id = req.params.id
    const setupItem = await getSetupById(id)
    console.log(setupItem);
   if(!setupItem){
     return next()
   }
   res.send()

  }catch(e){
    next(e)
  }
}
