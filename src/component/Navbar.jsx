import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
export default function Navbar() {
    return (
        <div className='w-[100vw]'>

            <div  className='pt-3 d-flex justify-content-evenly justify-content-center align-item-center pb-2 navclass'>
                <NavLink to="/">  <img width={50} className='logoimg' src={logo}alt="logo img" /></NavLink>
                <div className='flex items-center gap-3'>

                    <p className='mt-1 text-light'>
                        HOME
                    </p>
                    <div className='lead mb-2.5'>
                        <NavLink to="/cart"> <FaShoppingCart style={{color: 'white'}} />  </NavLink>
                    </div>


                </div>
            </div>




        </div>
    )
}
