import { useEffect, useState } from "react";

const useItemDetail = itemId => {

    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://paiting-tools-manufacturer-server-side.vercel.app/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId, item]);
    return [item]
}

export default useItemDetail;