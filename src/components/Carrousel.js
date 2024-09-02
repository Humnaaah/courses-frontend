import React, {useState} from 'react';
import { Container,ProgressBar } from 'react-bootstrap';

const Carrousel = ({farmsSlider}) => {
  const length = 4;
  const [index, setIndex] = useState(0);  
  const percentage =  Math.round((100 * (index + 1))/length);
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };


  return (
    <div className="carousel">
      {index !== undefined &&  
        <div> 
          <img className="carousel__Img" src={index !== farmsSlider.length -1 ? farmsSlider[index].bgImg : farmsSlider[farmsSlider.length - 1].bgImg} alt="bgimg" />
          <Container> 
              <div className="content-carousel">
                <span> {index !== farmsSlider.length -1 ? farmsSlider[index].title : farmsSlider[farmsSlider.length - 1].title} </span>
                  <h1> {index !== farmsSlider.length -1? farmsSlider[index].sub_title : farmsSlider[farmsSlider.length - 1].sub_title}</h1> 
              </div> 
              <div className="content__slides"> 
                    <button className="img-container" id="nextSlide" onClick={handleNext}>
                        <img className='Image__slide' src={index !== farmsSlider.length -1 ? farmsSlider[index+1].bgImg : farmsSlider[index].bgImg} />
                        <div className="centered-text">Next</div>
                    </button>
                    <div className='numberItem'>  0{index + 1} <ProgressBar now={percentage} /> 0{farmsSlider.length}</div> 
              </div>
            </Container> 
        </div>
      }
    </div>
  );
};

export default Carrousel ;