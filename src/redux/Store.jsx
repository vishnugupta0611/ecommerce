import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slices/Cartslice";



export const store=configureStore({
    reducer:{
        cart: Cartslice,
        //ye jo cart hai ye slice ka naam hai jo slice vale fun me diya gaya hai
        //aur jo value hai vo slice funtion ka name hai
    }
})