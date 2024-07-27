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
                Esta seção foi criada para esclarecer as suas dúvidas de forma rápida e eficaz. 
                Se precisar de mais informações, não hesite em entrar em contacto connosco. 
                Estamos sempre prontos para ajudar!
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
