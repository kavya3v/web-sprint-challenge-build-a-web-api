import {FETCH_PROJECTS_START,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    ADD_PROJECTS_START,
    ADD_PROJECTS_SUCCESS,
    ADD_PROJECTS_FAILURE,
    UPDATE_PROJECTS_START,
    UPDATE_PROJECTS_SUCCESS,
    UPDATE_PROJECTS_FAILURE,
    DELETE_PROJECTS_START,
    DELETE_PROJECTS_SUCCESS,
    DELETE_PROJECTS_FAILURE,
    FETCH_ACTIONS_START,
    FETCH_ACTIONS_SUCCESS,
    FETCH_ACTIONS_FAILURE,
} from '../actions/index';

const initialState={
    isLoading:false,
    isChanged:false,
    projects:[],
    actions:[],
    error:""
}    
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PROJECTS_START:{
            return{
                ...state,
                error:"",
                isLoading:true,
                isChanged:false,
            }
        }
        case FETCH_PROJECTS_SUCCESS:{
            return{
                ...state,
                error:"",
                isLoading:false,
                projects:action.payload
            }
        }
        case FETCH_PROJECTS_FAILURE:{
            return{
                ...state,
                error:action.payload,
                isLoading:false,
                isChanged:false,
            }
        }
        //add
        case ADD_PROJECTS_START:{
            return{
                ...state,
                error:"",
                isLoading:true,
                isChanged:false,
            }
        }
        case ADD_PROJECTS_SUCCESS:{
            return{
                ...state,
                error:"",
                isLoading:false,
                isChanged:true,
                // projects:action.payload
            }
        }
        case ADD_PROJECTS_FAILURE:{
            return{
                ...state,
                error:action.payload,
                isLoading:false,
                isChanged:false,
            }
        }
        //update
        case UPDATE_PROJECTS_START:{
            return{
                ...state,
                error:"",
                isLoading:true,
                isChanged:false,
            }
        }
        case UPDATE_PROJECTS_SUCCESS:{
            return{
                ...state,
                error:"",
                isLoading:false,
                isChanged:true,
                // projects:action.payload
            }
        }
        case UPDATE_PROJECTS_FAILURE:{
            return{
                ...state,
                error:action.payload,
                isLoading:false,
                isChanged:false,
            }
        }
        //delete proj
        case DELETE_PROJECTS_START:{
            return{
                ...state,
                error:"",
                isLoading:true,
                isChanged:false,
            }
        }
        case DELETE_PROJECTS_SUCCESS:{
            return{
                ...state,
                error:"",
                isLoading:false,
                isChanged:true,
                // projects:action.payload
            }
        }
        case DELETE_PROJECTS_FAILURE:{
            return{
                ...state,
                error:action.payload,
                isLoading:false,
                isChanged:false,
            }
        }
        //get actions
        case FETCH_ACTIONS_START:{
            return{
                ...state,
                error:"",
                isLoading:true,
                isChanged:false,
            }
        }
        case FETCH_ACTIONS_SUCCESS:{
            return{
                ...state,
                error:"",
                isLoading:false,
                isChanged:false,
                actions:action.payload
            }
        }
        case FETCH_ACTIONS_FAILURE:{
            return{
                ...state,
                error:action.payload,
                isLoading:false,
                isChanged:false,
            }
        }
        default:
            return state;
    }

}

 