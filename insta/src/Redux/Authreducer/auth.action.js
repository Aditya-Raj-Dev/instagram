import * as types from "./auth.types"
import {axios} from "axios"

const Signup=(text)=>(dispatch)=>{
    dispatch({type:types.POST_SIGNUP_REQUEST})
    return axios({
        url:"http://localhost:8080/signup",
        method:"POST",
        data:{
            name:text.name,
            username:text.username,
            mobile:text.mobile,
            password:text.password
        }
    }).then((r)=>{
        dispatch({type:types.POST_SIGNUP_SUCCESS,payload:r.data.msg})
    })
    .cathch((e)=>{
        dispatch({type:types.POST_SIGNUP_FAILED})
    })
}


export {Signup}