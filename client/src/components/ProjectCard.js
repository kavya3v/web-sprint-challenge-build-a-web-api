import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchProjects,deleteProject } from '../actions';
import {Button,Card,CardTitle,CardText} from 'reactstrap';

function ProjectCard(props){
    const history=useHistory();
    const {deleteProject} = props
    
    const handleDelete=()=>{
     deleteProject(props.item.id);
    }

    const handleUpdate=()=>{
        history.push(`/updateprojects/${props.item.id}`)
       }

    const handleActions=()=>{
        history.push(`/${props.item.id}/actions`)
    }
return(
    <div className="projectCard">
    <Card>
        <CardTitle className= "m-3"><b>Project Name :</b><br/>{props.item.name}</CardTitle>
        <CardText><b>Project Description:</b><br/>{props.item.description}</CardText>
        <div className="modifyProj">
        <Button color="info"
            className= "m-3"
            onClick={handleUpdate}>Update</Button>

           <Button color="danger"
             className= "m-3"
             outline="border"
             onClick={handleDelete}>Delete</Button>
            
            <Button color="warning"
             className= "m-3"
             outline="border"
             onClick={handleActions}>Actions</Button>
        </div>
    </Card>
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

export default connect(mapStateToProps,{fetchProjects,deleteProject})(ProjectCard);