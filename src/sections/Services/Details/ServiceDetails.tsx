import  { useEffect, useState } from "react";
// import useParams from 'react-router-dom';

import { OurServicesContainer } from '../Services.styles';
import './custom-service.css';

import {Link, useParams} from "react-router-dom";
import bg from '../../../assets/images/carousel/2.jpg';
import ModalComponent from "../../../components/Modal/Modal";

const MsOfficeList = ({ items }: any) => (
    <ul>
        {items.map((item: string, index: number) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

const details = [
    {
        app: [
            {
                service: 'SOFTWARE WEB',
                price: '90 MIL Até 900 MIL /AOA',
                description: <MsOfficeList items={["Facturação", "Gestão", "Designer UI/UX", "E-commerce", "E-learning"]} />,
            },
            {
                service: 'SOFTWARE DESKTOP',
                price: '90 MIL Até 900 MIL  /AOA',
                description: <MsOfficeList items={["Facturação", "Gestão", "Designer UI/UX", "E-commerce", "E-learning"]} />,
            },
            {
                service: 'REDES',
                price: '50 MIL Até 1 MILHÃO /AOA',
                description: <MsOfficeList items={["Configuração e instalação de redes (cabeamentos)", "Cyber Café"]} />,
            },
            {
                service: 'SUPORTE VIRTUAL',
                price: 'Diagnóstico 50 MIL   /AOA',
                description: <MsOfficeList items={["Reparação dos sistemas operacionais", "Servidores"]} />,
            },
            {
                service: 'TELECOMUNICAÇÕES',
                price: '50 MIL Até 1 MILHÃO /AOA',
                description: <MsOfficeList items={["CCTV - montagem e configuração de câmara", "CCTV - segurança Eletrónica"]} />,
            },
            {
                service: 'SUPORTE AO DOMICÍLIO',
                price: "Deslocação 10 MIL /AOA",
                description: <MsOfficeList items={["Reparação de computador hardware & software", "Servidores", "Impressoras"]} />
                ,
            },
        ]
    },
    {
        msOffice: [
            {
                service: 'OFFICE CASA 2021',
                price: '85 MIL AOA /Ano',
                description: <MsOfficeList items={["Compra única para 1 PC ou Mac licença permanente", "Versões clássicas do Word, Excel, PowerPoint e Outlook do Office 2021", "Inclui suporte da StorgTech durante os primeiros 60 dias sem custos adicionais", "Licenciado para utilização doméstica e comercial"]} />,
            },
            {
                service: 'MICROSOFT 365 PESSOAL',
                price: '40 MIL AOA /ANO',
                description: <MsOfficeList items={["Para uma pessoa", "Utilize até cinco dispositivos em simultâneo", "Funciona em PC, Mac, iPhone, iPad, e telemóveis e tablets Android", "1 TB de armazenamento na nuvem"]} />
            },
            {
                service: 'Microsoft 365 FAMILIAR',
                price: '70 MIL AOA /ANO',
                description: <MsOfficeList items={["Para uma a seis pessoas", "Utilize até cinco dispositivos em simultâneo", "Funciona em PC, Mac, iPhone, iPad, e telemóveis e tablets Android", "Até 6 TB de armazenamento na nuvem (1 TB por pessoa)", "Funcionalidades adicionais na aplicação móvel FaMILy Safety"]} />,
            },
            {
                service: 'Microsoft 365 BASIC',
                price: '60 MIL AOA /ANO',
                description: <MsOfficeList items={["Versões Web e para dispositivos móveis do Word, Excel e PowerPoint", "Inclui os aplicativos: Teams, Forms, Planner, Exchange, SharePoint, Bookings e List", "1 TB de armazenamento na nuvem por usuário", "E-mail de nível empresarial (nome@asuaempresa.com)"]} />,
            },
            {
                service: 'Microsoft 365 EMPRESAS',
                price: '60 MIL AOA /ANO',
                description: <MsOfficeList items={["Tudo o que está incluído no Microsoft 365 Empresas Basic e ainda:", <MsOfficeList items={["Versões para computador das aplicações do Office com funcionalidades premium", "Organize webinars facilmente"]} /> ]} />,
            },
            {
                service: 'Microsoft 365 BASIC',
                price: '150 MIL AOA /ANO',
                description: <MsOfficeList items={["Tudo o que está incluído no Microsoft 365 Empresas e ainda:", <MsOfficeList items={["Segurança avançada", "Acesso e controlo de dados", "Proteção contra ciberameaças"]} /> ]} />,
            },
            {
                service: 'PACOTE OFFICE',
                price: '150 MIL AOA',
                description: <MsOfficeList items={["MS Word", "MS PowerPoint", "MS Excel", "MS OneNote"]} />,
            },
            {
                service: 'FERRAMENTA COLABORATIVA',
                price: '50 MIL AOA',
                description: <MsOfficeList items={["MS Outlook", "MS OneNote", "MS Teams", "MS SharePoint"]} />,
            },
            {
                service: 'AUTOMAÇÃO & RELATÓRIOS',
                price: '60 MIL AOA',
                description: <MsOfficeList items={["Power Automate", "Power BI"]} />,
            },
            {
                service: 'MS365 ADMINISTRAÇÃO',
                price: '70 MIL AOA',
                description: <MsOfficeList items={["Administrador do M365", "Administrador SharePoint", "Administrador Exchange"]} />,
            },
        ]

    },
    {
        digitalServices: [
            {
                service: `DOMÍNIOS NACIONAIS`,
                price: '150 MIL  Até 350 MIL AOA /ANO',
                description: <MsOfficeList items={["Domínios do tipo .ao","Domínios do tipo co.ao"]} />,
            },
            {
                service: `ALOJAMENTOS NACIONAIS`,
                price: '500 MIL AOA /ANO',
                description: <MsOfficeList items={["Domínios do tipo .ao","Domínios do tipo co.ao"]} />
            },
            {
                service: `E-MAILS NACIONAIS`,
                price:'30 MIL AOA /ANO',
                description: <MsOfficeList items={[
                    "Domínios do tipo .ao",
                    "Domínios do tipo co.ao"
                ]} />
            },
            {
                service: 'DOMÍNIOS INTERNACIONAIS',
                price: '50 MIL  Até 40 MIL AOA /ANO',
                description: <MsOfficeList items={["Domínios do tipo .com; .org; .net; .pt; .website; .online"]} />
                ,
            },
            {
                service: `ALOJAMENTOS INTERN.`,
                price: "20 MIL Até 80 MIL AOA /ANO",
                description: <MsOfficeList items={["Domínios do tipo .com; .org; .net; .pt; .website; .online"]} />,
            },
            {
                service: `EMAILS INTERNACIONAIS`,
                price: "20 MIL Até 80 MIL AOA /ANO",
                description: <MsOfficeList items={["Domínios do tipo .com; .org; .net; .pt; .website; .online"]} />,
            },
            {
                service: `CARTÃO VISA VIRTUAL`,
                price: "250 MIL AOA",
                description: <MsOfficeList items={["Abertura de conta", "Ativação do cartão", "5$ ou 5€ na conta"]} />
                ,
            }, {
                service: `CARTÃO VISA FÍSICO`,
                price: "450 MIL AOA",
                description: <MsOfficeList items={["Ativação do cartão", "Abertura de conta", "5$ ou 5€ na conta", "Entrega"]} />,
            },
            {
                service: `FACEBOOK`,
                price: "50 MIL AOA /ANO",
                description: <MsOfficeList items={["Patrocina a sua página no Facebook e alcance mais de 1000 pessoas"]} />
                ,
            },
            {
                service: `LINKEDIN`,
                price: "100 MIL AOA /ANO",
                description: <MsOfficeList items={["Patrocina a sua página no LinkedIn e alcance mais de 1000 pessoas"]} />
                ,
            },
            {
                service: `PACOTE DE DESIGNER`,
                price: "40 MIL AOA /ANO",
                description: <MsOfficeList items={["Logotipo", "Flayer, banner, panfletos", "Cartões de visitas", "Cartões PVC para trabalhadores", "Paletas de cores", "Letras"]} />,
            },

        ]
    },
    {
        training: [
            {
                service: 'PROGRAMAÇÃO WEB',
                price: "10 MIL Até 50 MIL AOA",
                description: <MsOfficeList items={["HTML, CSS & Javascript", "HTML, CSS & php", "Next.js, React.js, vue.js, vite.js", "Node.js", "Handlebars"]} />,
            },
            {
                service: 'PROGRAMAÇÃO DESKTOP',
                price: "10 MIL Até 50 MIL AOA",
                description: <MsOfficeList items={["Algoritmo e lógica de programação (linguagem C)", "Linguagem de programação C#", "Linguagem de programação Visual Basic", "Linguagem de programação Java."]} />,
            },
            {
                service: 'SUPORTE TÉCNICO',
                price: "10 MIL Até 50 MIL AOA",
                description: <MsOfficeList items={["Princípios e resolução de problemas", "Reparação de computadores", "Instalação e configuração de servidores.", "Manutenção de sistemas de redes cabeadas."]} />,
            },
            {
                service: 'PROGRAMAÇÃO MOBILE',
                price: "10 MIL Até 50 MIL AOA",
                description: <MsOfficeList items={["Criação de apps", "10 mil kzs Até 50 mil kz"]} />,
            }
        ]
    }
];
let form :any = '';


const ServiceDetails = () => {
    const { ref } = useParams();

    const [modal, setModal] = useState(false);
    const [opt, setOpt] = useState('');

    const Template = (t:any, i:number, keys: string) => {
        return (
            <>
                <div key={i} className="col-lg-3 col-md-6 col-sm-6 mb-3">
                    <div className="card our__services__items">
                        <div className="card-header">
                            {/*{ t.icon }*/}
                            <h3>{t.service}</h3>
                        </div>
                        <div className="card-body">
                            {
                                t.price ?
                                    <div className="price">
                                        <small>Preço</small>
                                        <h3>{t.price}</h3>
                                    </div> : ''
                            }
                            <hr/>
                            <p>{t.description}</p>
                        </div>
                        <div className="card-footer col-12 text-center p-3">
                            {/*<button onClick={() => {*/}
                            {/*    setModal(true);*/}
                            {/*    setOpt(keys)*/}
                            {/*}} className='btn btn-outline-primary'>Contacte-nos</button>*/}
                            <Link className='btn btn-outline-primary' to={`https://wa.me/message/T7MROWWPF2V3E1`}>Saiba mais</Link>
                        </div>
                    </div>
                </div>
                {/*<div key={i} className="card col-lg-3 col-md-6 col-sm-6 m-1 ">*/}
                {/*    <div className="card-header">*/}
                {/*        <div className="title">*/}
                {/*            <h4>{t.service}</h4>*/}
                {/*        </div>*/}
                {/*        {*/}
                {/*            t.price ?*/}
                {/*                <div className="price">*/}
                {/*                    <small>Preço</small>*/}
                {/*                    <h5>{t.price}</h5>*/}
                {/*                </div> : ''*/}
                {/*        }*/}
                {/*        <div className="nav">*/}
                {/*            <a href="#" onClick={() => {*/}
                {/*                setModal(true);*/}
                {/*                setOpt(keys)*/}
                {/*            }} className='btn btn-link btn-outline-primary'>Contacte-nos</a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-12 card-body">*/}
                {/*        <p>*/}
                {/*            {t.description}*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        );
    };

    const cardTemplate = () => {

        const mapMe = function(e: any, keys: string){
            return e.map((t: any, i: number)=>{
                return Template(t, i,keys);
            })
        };

        switch (ref){
            case 'app':             return mapMe(details[0].app, 'app');
            case 'msOffice':        return mapMe(details[1].msOffice, 'msOffice');
            case 'digitalServices': return mapMe(details[2].digitalServices, 'digitalServices');
            case 'training':        return mapMe(details[3].training, 'training');
        }

    };

    const modalBtn = () => {
        const close = document.getElementById('modal-close') as HTMLElement;
        if (close){
            close.addEventListener('click', () => {
                setModal(false);
            });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        modalBtn();
    },[modal, opt]);
    return (
        <> {modal ? <ModalComponent opt={ opt }  /> : ''}
            <OurServicesContainer id='service-details' className={'mb-4'} >
                <div className="container">
                    <div className="row">
                        <div className="col-12" id='bg-page'>
                            <img src={ bg } alt="" />
                        </div>
                    </div>
                    <div className="row align-items-center mb__40">
                        <div className="col-lg-12">
                            <div className="our__services__section__left text-center">
                                <h2 className="our__services__subtitle">
                                    Nossos serviços a seu dispor
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center p-4">
                        <h5>Você merece mais...</h5>
                    </div>
                    <div className="row align-items-stretch">
                        { cardTemplate() }
                    </div>
                </div>
            </OurServicesContainer>

            { form }
        </>
    )
};


export default ServiceDetails;
