import styled from 'styled-components'

export const NewsletterSection = styled.section`
  background-color: ${(props) => props.theme['white-500']};
  padding: 80px 15px;

  @media screen and (min-width: 1280px) {
    height: 142vh;
  }

  @media screen and (min-width: 1440px) {
    height: 138vh;
  }

  .newsletter__header {
    padding-top: 1rem;
  }

  .newsletter__title {
    padding-top: 2.5rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .newsletter__subtitle {
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

  .mt__25 {
    margin-top: 25px;
  }

  .newsletter__section__items {
    width: 100%;
    background-color: ${(props) => props.theme['white-default']};

    box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.07);
    border-radius: 8px;

    img {
      width: 100%;
      height: 212px;
      border-radius: 8px;
      object-fit: cover;
    }

    .newsletter__items__description {
      padding: 1.5rem 2rem 2.5rem;
    }

    .newsletter__items__date {
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;

      width: 160px;
      height: 33px;

      background-color: ${(props) => props.theme['white-500']};
      color: ${(props) => props.theme['green-500']};

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      border-radius: 20px;
    }

    .newsletter__items__titles {
      font-weight: 700;
      font-size: 1.25rem;

      color: ${(props) => props.theme['dark-default']};
      margin-top: 0.875rem;
    }

    .newsletter__items__paragraph {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;

      margin-bottom: 1rem;

      color: ${(props) => props.theme['gray-500']};
    }

    .newsletter__btn__see__more {
      border: 0;
      background-color: transparent;

      font-size: 1rem;
      font-weight: 500;

      color: ${(props) => props.theme['green-500']};
    }
  }

  .newsletter__cta {
    margin-top: 3rem;
  }

  .button__see__more {
    margin-top: 1.375rem;
    padding: 1rem 2rem !important;
  }
`
