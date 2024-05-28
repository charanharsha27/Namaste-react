// used to display the copy of page when the data is rendering

const Shimmer = () => {
    console.log("inside shimmer");

    return (<div className="card">    
                <img src="" alt="Product Image" className="card-image"/>
                <div className="card-content">
                    <h2 className="card-title"></h2>
                    <p className="card-price"></p>
                    <p></p>
                </div>
    </div>
    );





    // <div className="shimmer-container">
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    //     <div className="shimmer-card"></div>
    // </div>
}

export default Shimmer;
