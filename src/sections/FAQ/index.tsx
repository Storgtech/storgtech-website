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
    title: 'O que é a StorgTech?',
    content: `A StorgTech é uma empresa do ramo das tecnologias de informação e comunicação vocacionada na
    comercialização de softwares desktop e web, implementação de soluções empresariais incluindo
    subscrições Microsoft e capacitação no uso de ferramentas tecnológicas. `,
  },

  {
    title: 'Qual o setor de actuação da empresa?',
    content: `A StorgTech é uma empresa do ramo das tecnologias de informação e comunicação vocacionada na
    comercialização de softwares desktop e web, implementação de soluções empresariais incluindo
    subscrições Microsoft e capacitação no uso de ferramentas tecnológicas. `,
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
