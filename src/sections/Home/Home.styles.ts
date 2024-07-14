import styled from 'styled-components'

export const HomeSection = styled.section`
  width: 100%;
  height: 999.6px;

  padding-top: 12rem;

  @media screen and (max-width: 992px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 760px) {
    padding-top: 6rem;
  }

  background-color: ${(props) => props.theme['white-default']};

  align-items: flex-start !important;

  .home__section__left,
  .home__section__right {
    position: relative;
    padding: 1rem;
  }

  .pt__86 {
    padding-top: 3rem;
  }

  @media (max-width: 992px) {
    .home__bottom {
      display: none;
    }
    height: 100% !important;
  }

  .home__section__left {
    h1 {
      font-size: 2.875rem;
      font-family: 'Mochiy Pop One', sans-serif;

      @media screen and (max-width: 760px) {
        font-size: 2.5rem;
        padding: 0 !important;
      }

      @media screen and (max-width: 480px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 390px) {
        font-size: 1.75rem;
      }

      @media screen and (max-width: 360px) {
        font-size: 1.625rem;
      }

      color: ${(props) => props.theme['dark-default']};
      line-height: 1.5;

      span {
        color: ${(props) => props.theme['green-500']};
        line-height: 0;
      }

      @media screen and (min-width: 1280px) {
        padding-left: 9rem;
      }

      @media screen and (min-width: 1440px) {
        padding-left: 14rem;
      }

      @media screen and (max-width: 992px) {
        padding-bottom: 1.5rem;
      }
    }

    img {
    //  position: absolute;


    //  object-fit: cover;
    //
    //  border-radius: 0px 0.75rem 0.75rem 0px;

      @media screen and (min-width: 1440px) {
        width: 62.5rem;
      }
    //
      @media screen and (max-width: 1200px) {
        position: relative;
        width: 56rem;
        margin-left: -5rem !important;
      }
    //
      @media screen and (max-width: 1199px) {
        position: relative;
        width: 50rem !important;
        height: 100%;
      }

      @media screen and (max-width: 991px) {
        position: relative;
        width: 100% !important;
      }
    }

    .ellipse__btn {
      position: absolute;
      bottom: -10rem;
      left: 30rem;
      display: flex;
      width: 6rem;
      height: 6rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 120px;
      border: 0;

      z-index: 10;

      background-color: ${(props) => props.theme['green-500']};

      @media screen and (max-width: 992px) {
        display: none;
      }
    }
  }

  .home__section__right {
    p {
      font-weight: 400;
      font-size: 0.875rem;
    }

    .button__get__in__touch {
      margin-top: 1.375rem;
      padding: 1rem 1.75rem !important;
    }

    &__items {
      padding: 1rem 0;
      margin-left: 1.5rem;
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};

      &:last-child {
        border-bottom: 0;
      }

      @media screen and (min-width: 1440px) {
        margin-left: 4.25rem;
      }

      @media screen and (max-width: 991px) {
        margin-top: 1rem !important;
      }

      h4 {
        font-size: 2.5rem;
        font-family: 'Mochiy Pop One', sans-serif;
        font-weight: 400;

        margin: 0;

        text-transform: lowercase;

        color: ${(props) => props.theme['dark-default']};

        span {
          color: ${(props) => props.theme['green-500']};
          font-size: 1.875rem;
        }
      }

      p {
        font-size: 0.875rem;
        font-weight: 500;

        margin: 0;
      }
    }
  }
`
