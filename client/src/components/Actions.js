import React,{useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchActions} from '../actions';
import ActionCard from './ActionCard'
import { Button } from 'reactstrap';

function Actions(props){
    const {fetchActions} = props
    const params= useParams();
    const history=useHistory();
    useEffect(()=>{
        fetchActions()
    },[fetchActions,props.isChanged])

    const chosenProject= props.projects.find(item=>item.id === Number(params.id));
    console.log('chosen',chosenProject)
    const handleBack=()=>{
        history.push('/')
    }
    return(
        <div>
            <Button onClick={handleBack}>Back</Button>
            <h3>Task for your Project </h3>
            {chosenProject.name ? <h3>{chosenProject.name}</h3> : null}
            {props.isLoading ? "Please wait...loading" :
             <div>
             {props.actions.map(item=>{
                  return <ActionCard key={item.id} item={item}/>
             })
            }
             </div>}
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

export default connect(mapStateToProps,{fetchActions})(Actions);
