import Slider from 'react-slick';
import { useNav } from '../../hooks/useNav';
import { ClientesAndCollaboratorsSection } from './ClientsAndCollaborators.styles'
import img1 from '../../assets/images/clients/11.jpg';
import img22 from '../../assets/images/clients/22.jpg';
import img33 from '../../assets/images/clients/33.jpg';
import img44 from '../../assets/images/clients/44.jpg';

const images = [
    img1,
    img22,
    img33,
    img44,
];

export function ClientesAndCollaborators() {
  const clientsAndCollaboratorsRef = useNav('clients__and__collaborators')

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 2000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <ClientesAndCollaboratorsSection
      ref={clientsAndCollaboratorsRef}
      id="clients__and__collaborators__section"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="clients__and__collaborators__header">
                <h3 className="clients__and__collaborators__title">
                    04 • Nossos Clientes e Colaboradores
                </h3>

                <h2 className="clients__and__collaborators__subtitle" style={{color: "#fff"}}>
                Conheça os nossos <br /> clientes e colaboradores
              </h2>
            </div>
          </div>
        </div>

        <Slider className="mt__40" {...settings}>
          {images.map(function (e, key) {
            return (
              <div key={key} className="clients__and__collaborators__items">
                <img
                  src={e}
                  alt=""
                  className="img-fluid"
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </ClientesAndCollaboratorsSection>
  )
}
