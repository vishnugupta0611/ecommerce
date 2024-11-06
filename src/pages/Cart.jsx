import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import {remove} from "../redux/slices/Cartslice"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {

   let dispatch=useDispatch();
    


  const [totalprice,settotalprice]=useState(0)
  const data = useSelector((state) => (state))
  console.log(data.cart)
  console.log(data.cart)


  useEffect(() => {
    const price = data.cart.reduce((acc, item) => acc + item.price, 0);
    settotalprice(price);
}, [data]);

  return (
    <div className='maincartbox'>


      {
        data.cart.length > 0 ? (<div className='d-flex cartclass '>

<div className='totalcard'>

          {
            data.cart.map((item) => (

              //bahar ka box

        <>
                  <div key={item.id} className='cartcard'>
                <div className='cardleft'>
                  <img src={item.image} width={110} alt="" />
                </div>

                <div className='cardright'>

                  <div className='cartcardtitle'><p>{item.title}</p></div>


                  <div className='cartdesc'> <p>{item.description}</p></div>
                      
                   <div className='cartpriceandbtn'>
                    
                    <div className='cartprice fw-bolder'>
                       {item.price}
                    </div>

                    <div>
                    <MdDelete onClick={()=>{
                          dispatch(remove(item.id));
                          toast.success("item deleted")
                    }} style={{color: "red"}} />
                    </div>
                    
                    </div>   
                </div>



               </div>
                

              
        </>
              
          

            ))
          }

</div>


<div className='right'>
<div>
  <p className='totallistcarttext'>Your Cart</p></div>
  <div><p className='summary'>SUMMARY</p></div>
  <div><p className='fw-bold'> Total item :  {data.cart.length}</p>
  </div>

   <div>
    <div><p className='fw-bolder'>Total Amount : {Math.floor(totalprice)}  </p></div>
   </div>
  <button className='checkoutbtn'>Checkout Now</button>
</div>
      





        </div>) : (<div className='emptybox'>

          <div className='fw-bolder'>

            Cart is Empty
          </div>


          
          <Link to="/">
            <button className='emptyshopbtn'>
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  )
}
