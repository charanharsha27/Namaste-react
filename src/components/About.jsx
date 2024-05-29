import AboutClassCard from './AboutClassCard';
import React from 'react';
class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent Render")
        return(
            <div className='AboutClassCard'>
                <AboutClassCard name="Charan" />
            </div>
        );
    }
}

export default About;


/*

Parent Constructor
About.jsx:15 Parent Render
AboutClassCard.jsx:13 Child Constructor
AboutClassCard.jsx:21 Child Render
AboutClassCard.jsx:13 Child Constructor
AboutClassCard.jsx:21 Child Render
AboutClassCard.jsx:13 Child Constructor
AboutClassCard.jsx:21 Child Render
(3)AboutClassCard.jsx:17 Child componentDidMount // dom updation all done at once in one batch.
About.jsx:11 Parent componentDidMount

*/