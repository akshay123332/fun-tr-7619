
import  axios  from 'axios';

export const getData=async()=>{
    let res= await axios.get(`https://rich-gray-scarab-fez.cyclic.app/cart`)
    return res.data
  }

export const deleteProduct=async(id)=>{
    await axios.delete(`https://rich-gray-scarab-fez.cyclic.app/cart/${id}`)
  }


let price=0
let data=JSON.parse(localStorage.getItem("cartItems"))||[];

for(let el of data){
  price+=(el.price)
}
localStorage.setItem("ee",JSON.stringify(price))

