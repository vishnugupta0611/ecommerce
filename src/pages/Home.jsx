import React, { useEffect, useState } from 'react'
import Spinner from '../component/Spinner';
import Product from '../component/Product'
import Footer from '../component/Footer';
export default function Home() {
  const [loading,setloading]=useState(false);
  const [post,setpost]=useState([]);
    async function fetchdata()
    {
        setloading(true);
       let url=await fetch('https://fakestoreapi.com/products')
       let data=await url.json();
       setpost(data);
       console.log(data);
       setloading(false)
    }

    useEffect(()=>{fetchdata()},[])



  return (
    <>
    
    <div className='w-100 d-flex justify-content-center align-items-center mt-4 mb-4'>
     {loading? <Spinner></Spinner>:post.length>1?
     <div className='cardscontainer'> 
        
        {post.map((item)=>(
             <Product  key={item.id} data={item}></Product>
        ))}
     </div>:<div>no post found {post} h</div>}
    
    </div>


    <Footer></Footer>
    
    </>
    
  )
}
