import { Button } from '../../components/Button'
import { useNav } from '../../hooks/useNav'
import { ArrowRight } from 'phosphor-react'
import { HomeSection } from './Home.styles'
import { handleClickSmoothScrolling } from '../../utils'
import CarouselSlide from "../Carousel/CarouselSlide";
import React from "react";

export function Home() {
    const homeRef = useNav('home');

    const infoSectionRightItens = [
        {
            amount: 2,
            symbol: '+',
            title: 'Anos de Experiências',
        },
        {
            amount: 1000,
            symbol: '+',
            title: 'Serviços Prestados',
        },
        {
            amount: 200,
            symbol: '+',
            title: 'Clientes no Mercado',
        },

        {
            amount: 1,
            symbol: 'k+',
            title: 'Profissionais Formados'
        },
    ]


    return (
        <HomeSection ref={homeRef} id="home__section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="home__section__left">
                            <h1>
                                Nós criamos <span>soluções integradas,</span> únicas & eficientes
                            </h1>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="home__section__right">
                            <p>
                                Storgtech é uma empresa especializada em tecnologias de informação e comunicação, com foco na comercialização de software para desktop e web, design gráfico e UI/UX...
                            </p>
                            <Button
                                onClick={() => handleClickSmoothScrolling('about__us')}
                                className="button__get__in__touch"
                                variant="secondary"
                            >
                                Continuar <ArrowRight color="#FFFFFF" size={20} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="home__bottom">
                    <div className="row pt__86">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            {/*<div className="home__section__left">*/}
                            {/*    /!*<img src={img} alt="" />*!/*/}
                            {/*</div>*/}
                            <CarouselSlide />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="home__section__right row">
                                {React.Children.toArray(
                                    infoSectionRightItens.map(({ amount, symbol, title }) => (
                                        <div className="col-sm-6 col-lg-12">
                                            <div className="home__section__right__items">
                                                <h4>
                                                    {amount}
                                                    <span>{symbol}</span>
                                                </h4>
                                                <p>{title}</p>
                                            </div>
                                        </div>
                                    )),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeSection>
    )
}

