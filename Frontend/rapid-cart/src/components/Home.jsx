import {useEffect, useState} from "react";
import './styles/welcomepage.css';
import logo from './../images/RapidCartLogo.png';


function Home(){

  return (
    <div className="text-center my-20 bg-slate-100 items-center min-h-center">
        <div class="flex-6 max-w-12xl p-10"> 
        <div class="grid grid-cols-2 grid-rows-3 gap-4 grid-flow-row-dense "></div>
         <h2 class="text-5xl color: text-yellow-500 font-extrabold leading-6"> Welcome to Rapid Cart! </h2>

          <p class="text-3xl my-6 ">An easy way to order groceries with Rapid Delivery</p> 
            
            <p class="text-1xl my-6 "> Local store pick-ups are brought right to you. </p>
              
              <h3 class="text-2xl my-3 font-semibold">Here is how it works: </h3>

              <p>1. Choose your favorite store from below</p>

                <div class="p-6 pr-12 bg-white border-transparent rounded-sm shadow-md space-y-20 space-x-20">

                <p class= "text-md my-6 font-semibold color: text-green-600 space-y-20 space-x-20 ">PigglyGiggly MartyMarMart Gen Dev Market</p>

                </div>
                <p class="text-1x1 my-3"> 2. Add Items to your Cart</p>
                <p class="text-1x1 my-3">3. Check Out</p>
                <p class="text1x1 my-3">4. Let our Rapid ashers take it from there! Easy as 1..2..3</p>

                
              
        </div>
                
    </div>
  );
}
export default Home;