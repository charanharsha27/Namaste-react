import React from "react";
import ReactDOM from "react-dom/client";
// import food_app from "food_app.jpg";
import myImage from './food_app.jpg';

/*
const heading = React.createElement("h1",{
    id:"heading"
},"Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

/* Creating react elements with the help of JSX(Javascript syntax for writing react code easier)

const jsxHeading = (<h1 className="heading">Namaste React</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

*/

/* 
Requirements - Food delivery app
-Header
    -> Logo
    -> Home,about,services..
    ->Cart
-Body
    -> Search option
    -> Restaurent component
    -> Cards
-Footer
    -> Copyright
    -> Links
*/


const resList = [
    {
    "info": {
    "id": "697204",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Guntur",
    "areaName": "Arundelpet",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 3.9,
    "parentId": "721",
    "avgRatingString": "3.9",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 2.3,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-arundelpet-guntur-697204",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "128158",
    "name": "UBQ by Barbeque Nation",
    "cloudinaryImageId": "fwgj6bshggyfoeq4leiw",
    "locality": "Lakshmipruam",
    "areaName": "Lakshmipuram",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 3.8,
    "parentId": "10804",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 51,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "50-55 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-lakshmipruam-lakshmipuram-guntur-128158",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "300365",
    "name": "Barbeque Nation",
    "cloudinaryImageId": "gftxaoivlisgcclvajqu",
    "locality": "Ashok Nagar",
    "areaName": "Lakshmipuram",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "North Indian",
    "Barbecue",
    "Biryani",
    "Kebabs",
    "Mughlai",
    "Desserts"
    ],
    "avgRating": 3.7,
    "parentId": "2438",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 57,
    "lastMileTravel": 5.8,
    "serviceability": "SERVICEABLE",
    "slaString": "55-60 mins",
    "lastMileTravelString": "5.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/barbeque-nation-ashok-nagar-lakshmipuram-guntur-300365",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "319255",
    "name": "Ak Special Hyderabadi Biryani House",
    "cloudinaryImageId": "fqa68ipjnqv1r9xlrfvz",
    "locality": "Kothapet",
    "areaName": "Old Guntur",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Biryani",
    "Chinese"
    ],
    "avgRating": 4.3,
    "parentId": "453106",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 2.1,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "2.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 16:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Biryani.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ak-special-hyderabadi-biryani-house-kothapet-old-guntur-guntur-319255",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "175807",
    "name": "Hotel Subani - Orginal",
    "cloudinaryImageId": "qslksrdev9xyivrstjnn",
    "locality": "Nallpadu",
    "areaName": "nallapadu",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Biryani",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "406465",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 7.1,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "7.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Biryani.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-subani-orginal-nallpadu-nallapadu-guntur-175807",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "120161",
    "name": "Sri Ramachandra Mess",
    "cloudinaryImageId": "vymswviqh31khtwfph8f",
    "locality": "Arundelpet",
    "areaName": "Arundelpet",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "South Indian",
    "Andhra"
    ],
    "avgRating": 4.3,
    "parentId": "6934",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 16:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sri-ramachandra-mess-arundelpet-guntur-120161",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "709577",
    "name": "Hotel Sri Sankara Vilas",
    "cloudinaryImageId": "f34657e4f398eec0e714971b58f8be69",
    "locality": "4th Lane",
    "areaName": "Brodipet & Arundalpet",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Indian",
    "Chinese",
    "Thalis",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "14610",
    "avgRatingString": "4.4",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 16:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-sri-sankara-vilas-4th-lane-brodipet-and-arundalpet-guntur-709577",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "86952",
    "name": "Viceroy Biryani Point",
    "cloudinaryImageId": "g0xlzkudrmfdlfub6yg4",
    "locality": "Arundelpet",
    "areaName": "Brodipet",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "Chinese"
    ],
    "avgRating": 4.4,
    "parentId": "14588",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 16:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Biryani.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/viceroy-biryani-point-arundelpet-brodipet-guntur-86952",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "651540",
    "name": "AK Atif Khan Biryani House",
    "cloudinaryImageId": "be2bfa3b5dde1e71b41144e9b62878a9",
    "locality": "Abudaya Mahila College",
    "areaName": "Lakshmipuram",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "South Indian"
    ],
    "avgRating": 4.3,
    "parentId": "392132",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-05-25 16:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-54d555d9-b49b-4cb6-8843-a1735c5a2b01"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ak-atif-khan-biryani-house-abudaya-mahila-college-lakshmipuram-guntur-651540",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }]

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="left">
                    <img src={myImage} alt="not found"/>
                </div>
                <div className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                </div>
        </div>
    );
}

const Card = ({resObj}) =>{
    console.log(resObj.info.name);
    console.log("hii");
    return(
        
        <div className="card">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObj.info.cloudinaryImageId} alt="Product Image" className="card-image"/>
                <div className="card-content">
                    <h2 className="card-title">{resObj.info.name}</h2>
                    <p className="card-price">{resObj.info.cuisines.join(", ")}</p>
                </div>
            </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="card-container">
            {
                resList.map( (resObj) => {
                    // console.log(res);
                   return  <Card key={resObj.info.id} resObj = {resObj} />
                })
            }
           
           </div>
        </div>
    );
}

const Footer = () => {
    return(
        <div className="footer">

        </div>
    );
}

const Applayout = () => {
    return(
        <div className="myApp">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);