import React, { useState } from 'react'
import {add} from "../redux/slices/Cartslice"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Product({data}) {
  let [clickstate,setclickstate]=useState(false);
  let dispatch=useDispatch();



   function cartstore(data)
   {
     setclickstate(!clickstate)
    if(clickstate)
    {
    //  dispatch( remove(data))
    }
    else{
      dispatch(add(data))
      toast.success("item added")
        }
   }



  return (
    <div className='cardbox'>
      

  <div className='fw-semi-bolder fs-6 text-center'>
    <p>{data.title.slice(0,Math.floor(data.title.length/3))}..</p>
  </div>
      
 <div className='content'>
  <p> {data.description.slice(0, Math.floor(data.description.length / 5))}....</p>
 </div>

<div>
  <img src={data.image} alt="" width={65} />
</div>


<div className='mt-4 d-flex w-100 justify-content-center align-items-center justify-content-evenly'>
<div className='mt-2 price'>
  <p>${data.price}</p>
</div>

<button className='cardbtn' onClick={()=>cartstore(data)}>
   {clickstate? <p>Remove item</p>:<p>Add item</p>}
</button>
</div>
 
    </div>
  )
}
