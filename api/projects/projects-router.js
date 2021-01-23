// Write your "projects" router here!
const router=require('express').Router();
//grab the db model
const projectsModel=require('./projects-model');
 
//grab the middleware functions
const {validateProjectId, validateProjectBody}=require('../middleware');

// router.get('/',(req,res)=>{
//     res.status(200).json({message:'hello from my projects router!'})
// })

router.get('/',async (req,res)=>{
    try {
        const projectsList=await projectsModel.get();
        res.status(200).json(projectsList);
    } catch (err) {
        res.status(500).json('Oops something went wrong!')
    }
  })

//note the error handling is done in middleware validation!!!
router.get('/:id',validateProjectId, (req,res)=>{
    res.status(200).json(req.project)
})

router.post('/',validateProjectBody,async(req,res)=>{
    try {
        const newProject= await projectsModel.insert(req.body)
        res.status(201).json(newProject)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/:id',validateProjectId,validateProjectBody, async(req,res)=>{
    try {
        const updatedProject= await projectsModel.update(req.params.id,req.body)
        res.status(201).json(updatedProject)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id',validateProjectId,async(req,res)=>{
    try {
        const deletedP=await projectsModel.remove(req.params.id)
        if(deletedP > 0){
            res.status(200).json(deletedP)
        }else {
            res.status(400).json({message: 'unable to delete the project '})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//retrieve the list of actions for the project id
router.get('/:id/actions', validateProjectId,async(req,res)=>{
    try {
        const pActions= await projectsModel.getProjectActions(req.params.id)
        res.status(200).json(pActions)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
} )
module.exports=router;

