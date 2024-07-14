import { useNav } from '../../hooks/useNav'
import { NewsletterSection } from './NewsLetter.styles'
import { ArrowRight, Calendar } from 'phosphor-react'
import { Button } from '../../components/Button'

export function NewsLetter() {
  const newsletterRef = useNav('newsletter')

  const images = [
    '/images/blog/blog-10.jpg',
    '/images/blog/blog-5.jpg',
    '/images/blog/blog-4.jpg',
  ]

  return (
    <NewsletterSection ref={newsletterRef} id="newsletter__section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter__section__header">
              {/*<h3 className="newsletter__title">*/}
              {/*  05 • Nosso Boletim informativo*/}
              {/*</h3>*/}

              <h2 className="newsletter__subtitle">
                  Leia os nossos boletins informativos
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch mt__25">
          {images.map(function (content, key) {
            return (
              <div key={key} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                <div className="newsletter__section__items">
                  <img src={content} alt="" className="img-fluid" />

                  <div className="newsletter__items__description">
                    <label className="newsletter__items__date">
                      <Calendar color="#2BD0C9" size={18} /> {'   '} Em Maio
                      14,2021
                    </label>
                    <h3 className="newsletter__items__titles">
                      Vantagens da Async/Await
                    </h3>
                    <p className="newsletter__items__paragraph">
                      Utilize a nossa análise integrada Utilize a nossa análise
                      integrada painel.{' '}
                    </p>

                    <button className="newsletter__btn__see__more">
                      Ver mais <ArrowRight color="#2BD0C9" size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="newsletter__cta">
          <Button className="button__see__more" variant="secondary">
            Ver mais <ArrowRight color="#FFFFFF" size={20} />
          </Button>
        </div>
      </div>
    </NewsletterSection>
  )
}
