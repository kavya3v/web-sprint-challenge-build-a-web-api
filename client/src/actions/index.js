import axios from 'axios'
export const FETCH_PROJECTS_START = "FETCH_PROJECTS_START"
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS"
export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE"

export const ADD_PROJECTS_START = "ADD_PROJECTS_START"
export const ADD_PROJECTS_SUCCESS = "ADD_PROJECTS_SUCCESS"
export const ADD_PROJECTS_FAILURE = "ADD_PROJECTS_FAILURE"

export const UPDATE_PROJECTS_START = "UPDATE_PROJECTS_START"
export const UPDATE_PROJECTS_SUCCESS = "UPDATE_PROJECTS_SUCCESS"
export const UPDATE_PROJECTS_FAILURE = "UPDATE_PROJECTS_FAILURE"

export const DELETE_PROJECTS_START = "DELETE_PROJECTS_START"
export const DELETE_PROJECTS_SUCCESS = "DELETE_PROJECTS_SUCCESS"
export const DELETE_PROJECTS_FAILURE = "DELETE_PROJECTS_FAILURE"
//actions
export const FETCH_ACTIONS_START = "FETCH_ACTIONS_START"
export const FETCH_ACTIONS_SUCCESS = "FETCH_ACTIONS_SUCCESS"
export const FETCH_ACTIONS_FAILURE = "FETCH_ACTIONS_FAILURE"

//getprojects
export const fetchProjects=()=>(dispatch)=>{
    dispatch({type:FETCH_PROJECTS_START})
    axios.get('http://localhost:4000/api/projects')
    .then(res=>{
        console.log('res=',res.data)
        dispatch({type:FETCH_PROJECTS_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log('error in fetch projects',err)
        dispatch({type:FETCH_PROJECTS_FAILURE,payload:err.data})
    })
}

//add project
export const addProject=(newProject)=>(dispatch)=>{
    dispatch({type:ADD_PROJECTS_START})
    axios.post('http://localhost:4000/api/projects',newProject)
    .then(res=>{
        console.log('res in add=',res.data)
        dispatch({type:ADD_PROJECTS_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log('error in add projects',err)
        dispatch({type:ADD_PROJECTS_FAILURE,payload:err.data})
    })
}

//update projects
export const updateProjects=(updateProject,projID)=>(dispatch)=>{
    dispatch({type:UPDATE_PROJECTS_START})
    axios.put(`http://localhost:4000/api/projects/${projID}`,updateProject)
    .then(res=>{
        console.log('res in update=',res.data)
        dispatch({type:UPDATE_PROJECTS_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log('error in update projects',err)
        dispatch({type:UPDATE_PROJECTS_FAILURE,payload:err.data})
    })
}
//delete projects

//update projects
export const deleteProject=(projID)=>(dispatch)=>{
    dispatch({type:DELETE_PROJECTS_START})
    axios.delete(`http://localhost:4000/api/projects/${projID}`)
    .then(res=>{
        console.log('res in del=',res.data)
        dispatch({type:DELETE_PROJECTS_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log('error in delete projects',err)
        dispatch({type:DELETE_PROJECTS_FAILURE,payload:err.data})
    })
}

export const fetchActions=()=>(dispatch)=>{
    dispatch({type:FETCH_ACTIONS_START})
    axios.get('http://localhost:4000/api/actions')
    .then(res=>{
        console.log('res=',res.data)
        dispatch({type:FETCH_ACTIONS_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        console.log('error in fetch actions',err)
        dispatch({type:FETCH_ACTIONS_FAILURE,payload:err.data})
    })
}