import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchProjects } from '../actions';
import ProjectCard from './ProjectCard';
import {Button} from 'reactstrap';

function Projects(props){
    const history=useHistory();
    const {fetchProjects} = props
    
    useEffect(()=>{
        fetchProjects()
    },[fetchProjects,props.isChanged])

    const addProjects=()=>{
        history.push('./addprojects')
    }

    return(
        <div className="projects">
            <Button className="addButton"
            color="success"
            onClick={addProjects}>
            <b>Add new Projects!</b>
            </Button>
            <h3>Here are your projects list!</h3>
            {props.isLoading ? "Please wait...loading" :
            props.projects.map(item=>{
                 return <ProjectCard key={item.id} item={item}/>
             })
            }
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

export default connect(mapStateToProps,{fetchProjects})(Projects);
