import img1 from '../../assets/images/carousel/1.jpg';
import img2 from '../../assets/images/carousel/2.jpg';
import img3 from '../../assets/images/carousel/3.jpg';

import Carousel from 'react-bootstrap/Carousel';


const CarouselSlide = () => {

    const imageList : [string, string, string] = [img1, img2, img3];

    const contents  = () => {
        return imageList.map((i, k) => {
            return (
                <Carousel.Item key={k} >
                    <img src={i} alt="Slide image" />
                    <Carousel.Caption >
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });
    }

    return (
        <Carousel>
            {contents()}
        </Carousel>
    );
}

export default CarouselSlide;
