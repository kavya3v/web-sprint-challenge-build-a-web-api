import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchActions } from '../actions';
import {Button,Card,CardTitle,CardText} from 'reactstrap';

function ActionCard(props){
    const history=useHistory();
    
    
    // const handleDelete=()=>{
    //  deleteProject(props.item.id);
    // }

    const handleUpdate=()=>{
        history.push(`/updateactions/${props.item.id}`)
       }

return(
    <div className="projectCard">
    <Card>
        <CardTitle><b>Task Description:</b><br/>{props.item.description}</CardTitle>
        <CardText><b>Task Notes:</b><br/>{props.item.notes}</CardText>
        <CardText><b>Task Completion:</b><br/>{props.item.completed}</CardText>

        <div className="modifyProj">
        <Button color="info"
            className= "m-3"
            onClick={handleUpdate}>Update</Button>

           {/* <Button color="danger"
             className= "m-3"
             outline="border"
             onClick={handleDelete}>Delete</Button> */}
            
    
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
    actions:state.actions,
    error:state.error
}
}

export default connect(mapStateToProps,{fetchActions})(ActionCard);