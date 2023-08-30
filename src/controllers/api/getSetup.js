const {getAllSetup, getSetupById} = require('../../services')
const {setupFile} = require('../../config')

module.exports = async (req, res, next) =>{
  try{
    let setup = await getAllSetup()
    res.send(setup)
  }catch (e){
    next(e)
  }
}
