
import  axios  from 'axios';

export const getData=async()=>{
    let res= await axios.get(`https://rich-gray-scarab-fez.cyclic.app/cart`)
    return res.data
  }

export const deleteProduct=async(id)=>{
    await axios.delete(`https://rich-gray-scarab-fez.cyclic.app/cart/${id}`)
  }