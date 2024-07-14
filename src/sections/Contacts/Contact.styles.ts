import styled from 'styled-components'

export const ContactsSection = styled.section`
  background-color: ${(props) => props.theme['white-default']};
  padding: 80px 15px;
    select.form-control {
        color: black !important;
    }
  @media screen and (max-width: 600px) {
    .container {
      padding: 0;
      .col-lg-12 {
        padding: 0;
      }
    }
  }

  width: 100%;
  height: 100% !important;

  .contacts__section__items {
    background-color: ${(props) => props.theme['blue-700']};
    width: 100%;

    padding: 1rem;
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  .contacts__title {
    padding: 2.5rem 0 0.75rem 0;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['white-default']};
  }

  .contacts__subtitle {
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

    color: ${(props) => props.theme['white-default']};
  }

  .contacts__description {
    color: ${(props) => props.theme['white-default']};
    opacity: 0.6;
  }

  .contacts__header {
    text-align: center;

    padding: 3.75rem 0;
  }

  .form__contacts {
    background-color: ${(props) => props.theme['white-default']};
    padding: 1.875rem;

    box-shadow: 0px 50px 50px -30px rgb(148 165 143 / 27%);

    margin-top: -8rem;

    .form-control {
      border-radius: 0;
      padding: 1.25rem;

      background-color: ${(props) => props.theme['white-500']};
      color: ${(props) => props.theme['gray-500']};

      font-size: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']} !important;
      }

      &:focus {
        box-shadow: none;
      }
    }

    .form-group:not(:last-child) {
      padding-bottom: 1.25rem;
    }

    .btn__send__message {
      padding: 1rem 2.75rem;
    }
  }

  button.btn__send__message {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 56px;
    width: 280px;
    border: 0;
    border-radius: 0.25rem;
    color: ${(props) => props.theme['white-default']};
    background: ${(props) => props.theme['blue-700']};
    cursor: pointer;

    .icon {
      font-size: 28px;
    }
  }

  button.sending .text {
    animation: textAnimation 5s both;
  }

  button.sending .icon {
    animation: iconAnimation 5s both;
  }

  @keyframes textAnimation {
    0%,
    30% {
      translate: 0 0;
    }
    39.9% {
      translate: 0 100px;
    }
    40% {
      translate: 300px 100px;
    }
    40.1% {
      translate: 300px -60px;
    }
    40.2% {
      translate: 33px -60px;
    }
    45% {
      translate: 33px 0;
    }
    95% {
      translate: 33px 0;
    }
    100% {
      translate: 0 0;
    }
  }

  @keyframes iconAnimation {
    0%,
    5% {
      translate: 0 0;
    }
    20%,
    30% {
      translate: -250px 0;
    }
    40% {
      translate: 200px 0;
      scale: 2;
    }
    40.1% {
      translate: 200px -60px;
      scale: 1;
    }
    40.2% {
      translate: 34px -60px;
    }
    45%,
    95% {
      translate: 34px 0;
    }
    100% {
      translate: 0 0;
    }
  }
`
