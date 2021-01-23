//grab the data model
const actionsModel=require('./actions/actions-model');
const projectsModel=require('./projects/projects-model');

function validateActionId(req,res,next){
   const id= req.params.id;
 
   actionsModel.get(id)
   .then(action=>{
       if(action){
           console.log('action=',action)
           req.action=action;
           next();
       }else{
            // invoking the common error handler pass arg to next!!
            next({statusCode:404, message:'sorry given action Id is not found!'})
       }
   })
   .catch(err=>{
       res.status(500).json({message: err.message})
   })
}

function validateProjectId(req,res,next){
    const id= req.params.id;
    projectsModel.get(id)
    .then(project=>{
        if(project){
            console.log('project=',project)
            req.project=project;
            next();
        }else{
            res.status(404).json({message: "Given project Id is not found!"})
        }
    })
    .catch(err=>{
        res.status(500).json({message: err.message})
    })
 }

 
function validateActionBody(req,res,next){
  const actionBody=req.body;
  
  if (!actionBody.description || !actionBody.notes || !actionBody.project_id){
      res.status(400).json({message: "Please provide description and notes and project id property for the action"})
  }else {
      next();
  }
}

  function validateProjectBody(req,res,next){
    const projectBody=req.body;
    if (!projectBody.name || !projectBody.description){
        res.status(400).json({message: "Please provide Project name and description"})
    }else{
        next();
    }

}
module.exports={validateActionId,validateActionBody,validateProjectId,validateProjectBody}