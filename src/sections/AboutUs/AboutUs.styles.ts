import styled from 'styled-components'

export const AboutUsSection = styled.section`
  padding: 70px 15px 0;
  width: 100%;
  clear: both;

  /* @media screen and (min-width: 1280px) {
    height: 130vh;
  }

  @media screen and (min-width: 1440px) {
    height: 120vh;
  } */

  position: relative;

  .about__us__section__left,
  .about__us__section__right {
    padding: 1rem;
    z-index: 200;

    @media screen and (max-width: 575px) {
      padding: 0.25rem;
    }
  }

  .about__us__section__left {
    &::before {
      position: absolute;
      left: -210px;
      top: 0;
      height: 100%;
      width: 100%;
      background-image: url(/images/icons/background-about-us.png);
      background-repeat: no-repeat;
      background-position: center left;
      content: '';

      z-index: -1;
    }
    .about__us__title {
      padding-top: 4.75rem;

      @media screen and (max-width: 760px) {
        padding-top: 3rem;
      }

      font-size: 1.25rem;
      font-weight: 700;

      color: ${(props) => props.theme['green-500']};
    }

    .about__us__subtitle {
      font-size: 2.5rem;
      font-family: 'Mochiy Pop One';
      font-weight: 400;
      line-height: 58px;

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

    .about__us__description {
      font-weight: 400;
      font-size: 1rem;
    }

    .btn__see__services {
      border: 0;
      background-color: transparent;

      font-size: 0.875rem;
      font-weight: 500;

      color: ${(props) => props.theme['green-500']};
    }
  }

  .about__us__section__right {
    padding-top: 3rem;

    @media screen and (min-width: 1440px) {
      margin-bottom: 4rem;
    }

    .about__us__single__Wrapper img {
      width: 100%;
      object-fit: contain;
      height: 560px;

      border-radius: 0.25rem;

      @media screen and (max-width: 991px) {
        display: none;
      }
    }

    .about__us__single__Wrapper__01 {
      img {
        border-radius: 0.25rem;
        position: relative;
      }
    }

    .about__us__single__content {
      border-radius: 0.25rem;

      background-color: ${(props) => props.theme['gray-100']};

      padding: 2rem 1rem;
      margin-top: 2rem;

      text-align: center;

      p {
        font-size: 1rem;
        padding: 0.625rem 0;
        font-family: 'Mochiy Pop One';

        color: ${(props) => props.theme['blue-700']};
      }
    }
  }

  .about__us__objects__items {
    padding: 1rem;
    h3 {
      font-family: 'Mochiy Pop One';
      font-size: 1.75rem;
      color: ${(props) => props.theme['dark-default']};
      margin-bottom: 1rem;

      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
    }

    font-size: 0.875rem;
  }
`
