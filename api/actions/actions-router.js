// Write your "actions" router here!
const router=require('express').Router();
const actionsModel=require('./actions-model');
const {validateActionId, validateActionBody}=require('../middleware');

// router.get('/',(req,res)=>{
//     res.status(200).json({message:'hello from my actions router!'})
// })

router.get('/',async (req,res)=>{
  try {
      const actionsList=await actionsModel.get();
        res.status(200).json(actionsList);
  } catch (err) {
      res.status(500).json('Oops something went wrong!')
  }
})

router.get('/:id', validateActionId, async(req,res)=>{
  try {
    res.status(200).json(req.action)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

//create an action - note 
// make sure the project_id provided belongs to an existing project - !!!!!!!! Kavya- I think project_id can come in as id param instead ?? so we can validateProjectId and then let the post happen for the action!!!!!

router.post('/',validateActionBody,async(req,res)=>{
  try {
    const postedAction= await actionsModel.insert(req.body)
      res.status(201).json(postedAction)
  }
   catch (err) {
    res.status(500).json({message: "Oops something went wrong!"})
  }
})

router.put('/:id',validateActionId,validateActionBody, async(req,res)=>{
  try {
    const updatedAction= await actionsModel.update(req.params.id,req.body)
    res.status(200).json(updatedAction);
  } catch (err) {
    res.status(500).json({message: "something went wrong!"})
  }
})

//delete action with id
router.delete('/:id',validateActionId, async(req,res,next)=>{
try {
  const deleted=await actionsModel.remove(req.params.id)
  console.log('deleted=',deleted);
  if(deleted === 1){
    res.status(204).json(deleted);
  }else{
    // invoking the common error handler pass arg to next!!
      next({code:500, message:'Unable to remove this action...'})
  }
} catch (err) {
  res.status(500).json({message: err.message})
}
})

module.exports=router;
