import { useEffect, useState } from "react";

const useItems =()=>{
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://paiting-tools-manufacturer-server-side.vercel.app/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return[items, setItems]
}
export default useItems;