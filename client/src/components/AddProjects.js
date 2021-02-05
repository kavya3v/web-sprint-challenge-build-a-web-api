import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Form,Label,Input,Button} from 'reactstrap';
import {connect} from 'react-redux';
import { addProject } from '../actions';

function AddProjects(props){
    const {addProject}=props
    const history=useHistory();
    const [newProject,setNewProject]=useState({
        name:"",
        description:"",
        completed:false
    })

    const handleChange=(e)=>{
        e.persist();
        setNewProject({
            ...newProject,
            [e.target.name]:e.target.value
        })
    }

    const handleCompleted=(e)=>{
        e.persist();
        setNewProject({
            ...newProject,
             completed: !newProject.completed
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();  
         console.log('submit=',newProject)
        addProject(newProject);
        history.push('/')
    }
 const handleBack=()=>{
     history.push('/')
 }
return(
<div className="addForm p-3">
    <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Project Name:</Label>
        <Input name="name"
        id="name"
        value={newProject.name}
        onChange={handleChange}/>

        <Label htmlFor="description">Project Description:</Label>
        <Input name="description"
        id="name"
        value={newProject.description}
        onChange={handleChange}/>

        <Label htmlFor="completed" className="mr-4 mt-2">Project Completed?</Label>
        <Input name="completed"
        id="completed"
        type="checkbox"
        className="mt-3 ml-1"
        value={newProject.completed}
        onChange={handleCompleted}/>
        <br/>
        <Button color="primary">
            Add Project!
        </Button>
        <Button className="m-3" onClick={handleBack}>
            Back
        </Button>
    </Form>


</div>
)
}
const mapStateToProps=(state)=>{
    return{
    isLoading:state.isLoading,
    isChanged:state.isChanged,
    projects:state.projects,
    error:state.error
}
}

export default connect(mapStateToProps,{addProject})(AddProjects);
