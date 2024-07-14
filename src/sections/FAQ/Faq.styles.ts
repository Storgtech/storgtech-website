import styled from 'styled-components'
import { AccordionItem, UncontrolledAccordion } from 'reactstrap'

export const FAQSection = styled.section`
  padding: 80px 15px;

  height: 100%;

  .faq__title {
    padding-top: 2.5rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .faq__subtitle {
    font-size: 2.5rem;
    font-family: 'Mochiy Pop One';
    font-weight: 400;
    line-height: 58px;

    @media screen and (max-width: 992px) {
      br {
        display: none;
      }
    }

    @media screen and (max-width: 760px) {
      font-size: 2rem;
      padding: 0 !important;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.75rem;
      line-height: 48px;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 390px) {
      font-size: 1.5rem;
    }

    color: ${(props) => props.theme['dark-default']};
  }

  .pt__70 {
    padding-top: 70px;
  }
`

export const UncontrolledAccordionCustom = styled(UncontrolledAccordion)`
  border: 0 !important;
`

export const AccordionItemCustom = styled(AccordionItem)`
  border: 0 !important;
  border-radius: 0;

  &.active {
    background-color: transparent !important;
  }

  .accordion-button:not(.collapsed) {
    color: ${(pros) => pros.theme['green-500']} !important;
    background-color: transparent !important;
    box-shadow: none !important;

    &::after {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%232BD0C9'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") !important;
    }
  }

  .accordion-button {
    border: 0 !important;
    font-family: 'Mochiy Pop One', sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
  }

  &:first-of-type .accordion-button {
    border-radius: 0 !important;
  }
`
