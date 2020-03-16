import React,{useEffect} from 'react';


const Items = () => {
    useEffect(()=>{
        fetchItemDetail()
    },[])

    const fetchItemDetail = async ()=>{}

    return (
        <h1>Item</h1>
    )
}

export default Items