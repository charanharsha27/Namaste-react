import {resList} from '../utils/mockdata';
import Card from './Card';
import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
const Body = () => {

    const [resList1,setResList] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [search,setText] = useState("");
    // const arr = useState(resList);
    // console.log(arr[0]);
    useEffect( () => {
        fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        let json = await data.json();

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        json = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(json);
        setFiltered(json);
    };

    if(resList1.length === 0 || filtered.length === 0){
        {console.log("shimmer replaced")}
        return <Shimmer />;
    }
    return(
        <div className="body">
            <input type="text" onChange={ (e) => {
                setText(e.target.value);
            }}/> 

            {console.log("Body rendered")}
            
            
            <button onClick={ () => {
                let result1 = resList1.filter( (res) =>{
                    return res.info.name.includes(search);
                } )
                setFiltered(result1);
            }}>Search</button>
            <button style={{margin: '12px'}} className="btn-change" onClick={ () => {

                result = resList1.filter( (res)=>{
                    return res.info.avgRating > 4;
                })

                setResList(result);

            }}
            >Show rating more than 4</button>
            <div className="card-container">
            {
                filtered.map( (resObj) => {
                   return  <Card key={resObj.info.id} resObj = {resObj} />
                })
            }
           
           </div>
        </div>
    );
}

export default Body;