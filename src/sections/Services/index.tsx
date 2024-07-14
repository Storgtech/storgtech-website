import { useNav } from '../../hooks/useNav'
import { OurServicesContainer } from './Services.styles'

import {
    ArrowRight,
    CircleWavyCheck,
    DesktopTower,
    WindowsLogo,
    Graph,
} from 'phosphor-react'
import { ReactElement } from "react";
import { Link } from "react-router-dom";


export function     Services() {
    const servicesRef = useNav('services')

    const cardItems: { id: string, icon: ReactElement, title: string, 'description': string , link: string}[] = [
        {
            id: 'app',
            icon: <CircleWavyCheck color="#2BD0C9" size={32} />,
            title: 'Aplicativos webs e Desktops com diversas aplicações',
            description: `Explore nossa variedade de aplicativos webs e desktops,
               oferecendo uma gama diversificada de soluções para atender às
               suas necessidades empresariais, tudo em um só lugar
          `,
            link: 'app'
        },
        {
            id:'sale',
            icon: <DesktopTower color="#2BD0C9" size={32} />,
            title: `Venda & implementação de Subscrição Microsoft 365`,
            description: `Oferecemos serviços especializados em venda e implementação de
                  assinaturas Microsoft 365, garantindo uma transição tranquila
                  e maximizando o potencial dessa poderosa suíte de produtividade para o seu negócio.`,
            link: 'msOffice'
        },
        {
            id: 'other',
            icon:  <WindowsLogo color="#2BD0C9" size={32} />,
            title: `Outros serviços Digitais`,
            description: `Explore nossos serviços digitais abrangentes, desenvolvidos para atender às
            demandas modernas, impulsionar a sua presença online e potencializar o crescimento do seu negócio.`,
            link: 'digitalServices'
        },
        {
            id: 'training',
            icon: <Graph color="#2BD0C9" size={32} />,
            title: `Treinamentos Técnicos, Tecnológicos e Práticos`,
            description: `Capacitação completa: oferecemos treinamentos técnicos,
                tecnológicos e práticos para equipar sua equipe com habilidades atualizadas,
                preparando-os para enfrentar desafios reais e impulsionar o sucesso do seu negócio.`,
            link: 'training'
        }
    ];

    const cardTemplate = () => {

        return cardItems.map((e, k) => {
            return (
                <div key={k} className="col-lg-3 col-md-6 col-sm-6 mb-3">
                    <div className="card our__services__items">
                        <div className="card-header">
                            { e.icon }
                            <h3>{e.title}</h3>
                        </div>
                        <div className="card-body">
                            <p>{e.description}</p>
                        </div>
                        <div className="card-footer col-12 text-center p-3">
                            <Link className='btn btn-outline-primary' to={"/service-details/" + e.link}>Saiba mais</Link>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <OurServicesContainer ref={servicesRef} id="services__section">
            <div className="container">
                <div className="row align-items-center mb__40">
                    <div className="col-lg-6">
                        <div className="our__services__section__left">
                            <h3 className="our__services__title">03 • Nossos Serviços</h3>
                            <h2 className="our__services__subtitle">
                                Fornecemos soluções Tecnológica e Integradas{' '}
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="our__services__section__right">
                            <p>
                                Simplifique sua rotina empresarial com
                                soluções de automação personalizadas, otimizadas para
                                liberar tempo e recursos valiosos, permitindo que sua equipe
                                se concentre no crescimento estratégico.
                            </p>

                            <p className="paragraph__01">
                                <ArrowRight color="#2BD0C9" size={24} />
                                Encontre o domínio ideal para sua marca e fortaleça sua presença online..
                            </p>
                            <p className="paragraph__02">
                                <ArrowRight color="#2BD0C9" size={24} />
                                Descubra soluções de software inovadoras e personalizadas,
                                projetadas para atender às necessidades específicas do seu negócio.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-stretch">
                    { cardTemplate() }
                </div>
            </div>
        </OurServicesContainer>
    )
}
