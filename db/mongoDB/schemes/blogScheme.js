const mongoose = require('mongoose')
const projectTeamSchema = require('./projectTeamSchema')


const blogSchema = new mongoose.Schema({
  name: String,
  id: String,
  style: {
    type: String,
    validate:{
      validator: value =>{
        //TODO: find all styles
        return value === 'text-white' || value === 'text-bg-black';
      },
      message: props => `${props.value} is not in the list`
    }
  },
  description: String,
  type: String,
  cover: String,
  embedVideo: String,
  carousel: [String],
  projectTeam: [projectTeamSchema],
  body: String,
  created: Date
})


const Blog =   mongoose.model('blogs', blogSchema )

module.exports ={
  Blog
}
