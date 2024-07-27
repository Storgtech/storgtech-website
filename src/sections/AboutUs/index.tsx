import { useNav } from '../../hooks/useNav'
import { AboutUsSection } from './AboutUs.styles'
import img1 from '../../assets/images/single-img-14.jpg';

import {
  ArrowRight,
  CircleWavyCheck,
  Quotes,
  GlobeHemisphereEast,
  Rocket,
} from 'phosphor-react'

export function AboutUS() {
  const aboutUsRef = useNav('about__us')

  function handleClickServices() {
    document
      .getElementById('services__section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AboutUsSection ref={aboutUsRef} id="about__us__section">
      <div className="container">
        <div className="row align-items-center mb__30">
          <div className="col-lg-6">
            <div className="about__us__section__left">
              <h3 className="about__us__title">02 • Sobre nós</h3>
              <h2 className="about__us__subtitle">
                “O treinamento faz parte do nosso programa de desenvolvimento”
              </h2>

              <p className="about__us__description">
                Storgtech é uma empresa especializada em tecnologias de informação e comunicação, 
                com foco na comercialização de software para desktop e web, design gráfico e UI/UX. 
                Oferecemos soluções empresariais abrangentes, incluindo a criação de domínios e e-mails corporativos, 
                marketing digital e subscrições de produtos Microsoft. Além disso, proporcionamos formação especializada no uso de ferramentas tecnológicas, 
                ajudando empresas e profissionais a aprimorar as suas competências e a maximizar a utilização das tecnologias disponíveis.
              </p>

              <button
                onClick={handleClickServices}
                className="btn__see__services"
              >
                Ver nossos serviços <ArrowRight color="#2BD0C9" size={16} />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__us__section__right">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about__us__single__Wrapper">
                    <img
                      className="img-fluid"
                      src={img1}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="about__us__single__Wrapper__01 mb__30">
                        <img
                          className="img-fluid"
                          src="/images/single-img-13.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="about__us__single__content">
                        <Quotes size={62} color="#2BD0C9" />
                        <p>
                            O nosso objectivo é criar soluções integradas de bases personalizadas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt__80">
          <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
            <div className="about__us__objects__items">
              <h3>
                <Rocket color="#2BD0C9" size={42} /> Missão
              </h3>
              <p>
                Ajudar as pessoas singulares e coletivas (empresas), nacionais e
                internacionais alcançarem todo seus potenciais.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
            <div className="about__us__objects__items">
              <h3>
                <GlobeHemisphereEast color="#2BD0C9" size={42} /> Visão
              </h3>
              <p>
                Ser uma referência no mercado nacional e internacional em
                tecnologias, soluções empresariais e capacitação de pessoas
                singulares ou coletivas (empresas).
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
            <div className="about__us__objects__items">
              <h3>
                <CircleWavyCheck color="#2BD0C9" size={42} /> Valores
              </h3>
              <p>
                Transparência • Criatividade • Inovação • Responsabilidade
                social • Personalização • Produtividade • Valorização do capital
                humano.
              </p>
              {/* <ul>
                <li>Creativity</li>
                <li>Innovation</li>
                <li>Social responsibility</li>
                <li>Personalization</li>
                <li>Productivity</li>
                <li>Human capital valorization</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </AboutUsSection>
  )
}
