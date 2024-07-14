import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme['blue-700']};

  padding: 3.75rem 1rem;

  @media screen and (min-width: 1280px) {
    margin-top: 10rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 6rem;
  }

  .separator {
    position: relative;

    width: 100%;
    height: 1px;

    margin: 48px 0 40px;

    background: ${(props) => props.theme['white-500']};
    opacity: 0.1;
  }

  .footer__logo {
    .img-fluid {
      width: 64%;
      cursor: pointer;
    }
  }

  .footer__menu {
    position: relative;

    .nav__list {
      padding: 0.5rem 0 !important;
      display: flex;
      align-items: center !important;

      gap: 2rem;

      .nav-item {
        position: relative;

        &:nth-child(2) {
          .btn__navigator {
            position: relative;
            cursor: pointer !important;

            &::after,
            &::before {
              content: '*';
              position: absolute;

              color: ${(props) => props.theme['white-500']} !important;

              font-size: 1.2rem;
              font-weight: 600;

              top: 3px;
            }

            &::after {
              left: -1.2rem;
            }

            &::before {
              right: -1.2rem;
            }
          }
        }

        .btn__navigator {
          color: ${(props) => props.theme['white-500']};
          transition: all 0.2s;
          background-color: transparent;
          border: 0;

          &:hover {
            color: ${(props) => props.theme['green-500']};
          }
        }
      }
    }
  }

  .footer__social__networks {
    position: relative;
    text-align: right;

    .nav__list {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      @media screen and (max-width: 760px) {
        gap: 2rem;
        justify-content: center;
      }

      padding: 0.5rem 0;

      .nav-link {
        background-color: rgba(245, 247, 251, 0.1);
        color: ${(props) => props.theme['white-500']};

        width: 38px;
        height: 38px;
        border-radius: 120px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.25rem;

        transition: all 0.3s;

        &:hover {
          color: ${(props) => props.theme['green-500']};
          margin-top: -0.5rem;
        }
      }
    }
  }

  .footer__copyright {
    background-color: rgba(245, 247, 251, 0.1);
    border-radius: 0.25rem;

    padding: 1rem;
    margin-top: 1rem;

    text-align: center;
    color: ${(props) => props.theme['white-500']};

    a {
      color: ${(props) => props.theme['white-500']};
      font-family: cursive;
      font-weight: 400;

      &:hover {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`

export const InputCard = styled.div`
  display: flex;
  background-color: rgba(245, 247, 251, 0.1);

  padding: 0.45rem;

  box-shadow: 0 0.375rem 1.5rem 0 rgb(140 152 164 / 13%);
  border-radius: 0.25rem;

  .input-card-form {
    position: relative;
  }

  .form-control,
  .input-group-prepend {
    border: 0;
    background: transparent;
  }

  .input-group-prepend {
    padding: 0 5px 0 10px;
  }

  .form-control {
    box-shadow: none;
    outline: none;
    /* padding: 0.75rem 5px; */
    font-size: 1rem;
    color: ${(props) => props.theme['white-500']};
    opacity: 0.8;

    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme['white-500']};
      opacity: 0.8;
    }

    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }

`
