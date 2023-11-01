import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect (()=> {
        axios("data.json").then((res)=>setData(res.data));
    },[])

return <DataContext.Provider value={{ data, cart , setCart }}> {children} </DataContext.Provider>
    
}

export default DataContext;
