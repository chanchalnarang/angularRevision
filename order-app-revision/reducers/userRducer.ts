import {  createReducer, on } from "@ngrx/store";
import { LoginAction } from "actions/users.actions";

const initialState={email:'',password:''}
const _userReducer=createReducer(initialState,
    on(LoginAction,(initialState,action)=>{
        const newState={...initialState}
      console.log(action);
return newState
    })
    
    
    )
export const userReducer=((state=initialState,action:any)=>{
    return _userReducer(state,action);

})
    