import { useState } from "react";
import PackageContext from "./Context";

const Provider=()=>{
    const [cricketer,setcCicketer]=useState(
        {
            name: "Sachin Tendulkar",
            age:45,
            country: "India",
            heighestScore: 200
        }
    )
    return(
        <PackageContext.Provider>
            value ={
                {
                    data: cricketer,
                }
            }
        </PackageContext.Provider>
    )
}
