import * as types from "./auth.types"

const inittialstate={
    isAuth:false,
    isLoading:false,
    isError:false,
    msg:""
}

const authreducer=(oldstate=inittialstate,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.POST_SIGNUP_REQUEST:{
            return {
                ...oldstate,
                isLoading:true,
            }
        }
        case types.POST_SIGNUP_SUCCESS:{
            return {
                ...oldstate,
                isLoading:false,
                msg:payload
            }
        }
        case types.POST_SIGNUP_FAILED:{
            return {
                ...oldstate,
               isError:true,
                msg:"Please Signup Again"
            }
        }

        default :{
            return oldstate
        }
    }
}

export default authreducer