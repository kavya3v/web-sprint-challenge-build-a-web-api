import React,{useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import {Form,Label,Input,Button} from 'reactstrap';
import {connect} from 'react-redux';
import { updateProjects } from '../actions';

function UpdateProjects(props){
    const {updateProjects}=props
    const params=useParams();
    const history=useHistory();
    const updateP= props.projects.find(item=>item.id == Number( params.id))
    console.log('updateP',updateP)

    const [updateProject,setUpdateProject]=useState(updateP)

    const handleChange=(e)=>{
        e.persist();
        setUpdateProject({
            ...updateProject,
            [e.target.name]:e.target.value
        })
    }

    const handleCompleted=(e)=>{
        e.persist();
        setUpdateProject({
            ...updateProject,
             completed: !updateProject.completed
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();  
        console.log('submit=',updateProject)
        updateProjects(updateProject,params.id);
        history.push('/')
    }

return(
<div className="addForm p-3">
    <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Project Name:</Label>
        <Input name="name"
        id="name"
        value={updateProject.name}
        onChange={handleChange}/>

        <Label htmlFor="description">Project Description:</Label>
        <Input name="description"
        id="name"
        value={updateProject.description}
        onChange={handleChange}/>

        <Label htmlFor="completed" className="mr-4 mt-2">Project Completed?</Label>
        <Input name="completed"
        id="completed"
        type="checkbox"
        className="mt-3 ml-1"
        value={updateProject.completed}
        onChange={handleCompleted}/>
        <br/>
        <Button>
            Update Project!
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

export default connect(mapStateToProps,{updateProjects})(UpdateProjects);
