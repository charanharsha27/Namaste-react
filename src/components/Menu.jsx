import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
    // const [resId] = useParams();
    const [menu,setMenu] = useState([]);
    const [name,setName] = useState("");
    useEffect( () => {
        fetchData();
    },[])

    const fetchData = async () => {
        let jsonData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.3066525&lng=80.4365402&restaurantId=697204&catalog_qa=undefined&submitAction=ENTER");
        jsonData = await jsonData.json();
        // jsonData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[1].title.temp;
        // console.log(`Data : ${jsonData}`);
        let temp = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        console.log(temp);
        setName(jsonData?.data?.cards[0]?.card?.card?.text);
        setMenu(temp);

    }

    if(menu.length == 0){
        return <Shimmer />
    }
    
    return (
        
        <div className="Menu">
            <h1 style={{padding : '10px'}}>{name}</h1>
            {menu.map((item) => {
                console.log(item?.card?.info?.name);
                return (
                    <div className="MenuItem" key={item?.card?.info?.id}>
                        <h1>{item?.card?.info?.name}</h1>
                        {/* <p>{item?.card?.info?.description}</p> */}
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;