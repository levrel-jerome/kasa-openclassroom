import React from 'react';


function Rating (props) {

    const rating = props.rating;
    const stars = [1,2,3,4,5];
      
    return (
        <div className="rate">
            {stars.map((star) => {
                if(star <= rating) {
                return  <img key={star} src='../asset/stars-orange.png' alt=''/>
            } else {
                return <img key={star} src='../asset/stars-grey.png' alt=''/>
            }
        }             
    )}
        </div>
    );
};

export default Rating;





 /*const [stars, setStars] = useState(null);

    let arrayStar = [];

    const newStar = () => {
        for(let i = 0; i < 5; i++) {
            if(i <= props.rating) {
             arrayStar.push("rating") 
            } else {
              arrayStar.push("norating")
            }
        
        }
        return  setStars(arrayStar);

    }


    useEffect(() => {
        return newStar(arrayStar);
    } );*/


    
    /*if(stars != null) */