import { Children } from 'react'
import { AccordionBody, AccordionHeader } from 'reactstrap'
import { useNav } from '../../hooks/useNav'
import {
  AccordionItemCustom,
  FAQSection,
  UncontrolledAccordionCustom,
} from './Faq.styles'

const allFAQDatas = [
  {
    title: 'O que é a Storgtech?',
    content: `A Storgtech é uma empresa especializada em tecnologias de informação e comunicação. 
    Comercializamos software para desktop e web, oferecemos serviços de design gráfico e UI/UX, e 
    implementamos soluções empresariais como criação de domínios, e-mails corporativos, marketing digital 
    e subscrições de produtos Microsoft. Também proporcionamos formação no uso de ferramentas tecnológicas.`,
  },
  {
    title: 'Quais tipos de software a Storgtech comercializa?',
    content: `Comercializamos uma ampla gama de software, incluindo aplicações de desktop e web. 
    Trabalhamos com soluções personalizadas para atender às necessidades específicas dos nossos clientes.`,
  },
  {
    title: 'Que serviços de design a Storgtech oferece?',
    content: `Oferecemos serviços de design gráfico e UI/UX, ajudando a criar interfaces atraentes e 
    funcionais para websites e aplicações, além de materiais gráficos para marketing e branding.`,
  },
  {
    title: 'Como a Storgtech pode ajudar na criação de domínios e e-mails corporativos?',
    content: `A Storgtech oferece serviços completos de criação e gestão de domínios e e-mails corporativos, 
    garantindo uma presença online profissional e eficiente para a sua empresa.`,
  },
  {
    title: 'O que está incluído nas soluções de marketing digital da Storgtech?',
    content: `As nossas soluções de marketing digital incluem estratégias de SEO, gestão de redes sociais, 
    campanhas de publicidade online e análise de desempenho, visando aumentar a visibilidade e o alcance 
    da sua empresa na internet.`,
  },
  {
    title: 'Quais subscrições de produtos Microsoft a Storgtech oferece?',
    content: `Oferecemos subscrições para uma variedade de produtos Microsoft, incluindo o Microsoft 365, 
    que proporciona ferramentas essenciais para produtividade e colaboração empresarial.`,
  },
  {
    title: 'A Storgtech oferece formação em que áreas?',
    content: `Proporcionamos formação especializada no uso de diversas ferramentas tecnológicas, incluindo 
    software de produtividade, ferramentas de design, e soluções empresariais da Microsoft, entre outras.`,
  },
  {
    title: 'Como posso solicitar um orçamento ou mais informações sobre os serviços da Storgtech?',
    content: `Pode solicitar um orçamento ou mais informações contactando-nos através do nosso botão
    de contacto no site que o levará para o nosso whatsapp, enviando um e-mail para geral@storgtech.com, ou telefonando para o nosso serviço 
    de apoio ao cliente +244923298908`,
  },
  {
    title: 'A Storgtech oferece suporte técnico aos seus clientes?',
    content: `Sim, oferecemos suporte técnico para todos os serviços e produtos que comercializamos. 
    O nosso objetivo é garantir que os nossos clientes obtenham o máximo rendimento das soluções adquiridas.`,
  },
  {
    title: 'Onde está localizada a Storgtech?',
    content: `Estamos localizados em Viana-Vila, Rua 11 de Novembro. Para mais informações ou para agendar uma visita, 
    por favor contacte-nos.`,
  },
]

export function FAQ() {
  const faqRef = useNav('faq')

  // const arrayInfo = [
  //   'What is StorgTech?',
  //   'What sector does the company operate in?',
  //   'What is its target audience?',
  //   'Does the company have a slogan? What is it?',
  // ]

  // @ts-ignore
  // @ts-ignore
  return (
    <FAQSection ref={faqRef} id="faq__section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <div className="faq__section_left">
              {/*<h3 className="faq__title">06 • FAQ</h3>*/}

              <h2 className="faq__subtitle">Perguntas mais frequentes</h2>
              <p>
                Utilize a nossa análise integrada Utilize a nossa análise
                integrada painel de instrumentos Use o nosso painel de
                instrumentos anal ytics embutido para puxar valioso ins.{' '}
              </p>
            </div>
          </div>
          <div className="col-lg-6 pt__70">

            {/* @ts-ignore */}
            <UncontrolledAccordionCustom defaultOpen="1">
              {Children.toArray(
                  allFAQDatas.map((data, count) => (
                      <AccordionItemCustom>
                        <AccordionHeader targetId={String(count + 1)}>
                          {data.title}
                        </AccordionHeader>
                        <AccordionBody accordionId={String(count + 1)}>
                          <p>{data.content}</p>
                        </AccordionBody>
                      </AccordionItemCustom>
                  )),
              )}
            </UncontrolledAccordionCustom>
          </div>
        </div>
      </div>
    </FAQSection>
  )
}
