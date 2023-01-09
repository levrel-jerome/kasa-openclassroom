import React, {useState} from 'react';

function Carousel (props) {

    const length = props.image.length;

    const [count, setCount] = useState(0);

    console.log(count+1);
    const lastImage = () => {
        if(count > 0) {
            setCount(count -1)
        } else {
            setCount(length-1)
        }
    }

    const nextImage = () => {
        if(count < length -1) {
            setCount(count +1)
        } else {
            setCount(0)
        }
    }

    const hideButtonLeft = () => {
        if(length > 1){
        
        return <button onClick={lastImage} className="fleche-gauche"><img src="/asset/fleche-gauche.png" alt=""/></button>
        } 
    }

    const hideButtonRight = () => {
        if(length > 1){
        
        return <button onClick={nextImage} className="fleche-droite"><img src="/asset/fleche-droite.png" alt=""/></button>
        }
    }

    return (

        <div className="image-logement-id">
                  {hideButtonLeft()}
                  <img src={props.image[count]} alt="" />
                  <p className='compteur'>{count+1}/{length}</p>
                  {hideButtonRight()}
        </div>
    )

}

export default Carousel

/*() => setCount(count <= 0  ? count : count - 1)*/