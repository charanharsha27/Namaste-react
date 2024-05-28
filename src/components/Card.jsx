import { myImage } from "../utils/constants";

const Card = ({resObj}) =>{
    console.log(resObj.info.name);
    console.log("hii");
    return(
        
        <div className="card">
                {console.log(resObj.info.avgRating)}
                
                <img src={myImage+resObj.info.cloudinaryImageId} alt="Product Image" className="card-image"/>
                <div className="card-content">
                    <h2 className="card-title">{resObj.info.name}</h2>
                    <p className="card-price">{resObj.info.cuisines.join(", ")}</p>
                    <p>Rating : {resObj.info.avgRating}</p>
                </div>
        </div>
    )
}

export default Card;