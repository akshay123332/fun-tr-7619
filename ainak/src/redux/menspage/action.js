import axios from "axios";
import {GET_DATA_LOADING,GET_DATA_SUCCESS,GET_DATA_FAILURE} from "./actionTypes";


const GetdataLoading=()=>({type:GET_DATA_LOADING})

 const GetdataSuccess=(payload)=>({type:GET_DATA_SUCCESS,payload})

 const GetdataFailure=()=>({type:GET_DATA_FAILURE})

 export const getData=(paramObj)=>(dispatch)=>{
    dispatch(GetdataLoading())
    axios.get(`https://rich-gray-scarab-fez.cyclic.app/eyeglasses`,paramObj).then((res)=>{
        dispatch(GetdataSuccess(res.data))
    }).catch((err)=>{
        dispatch(GetdataFailure())
    })
  }
