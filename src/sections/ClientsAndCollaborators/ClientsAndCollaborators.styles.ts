import styled from 'styled-components'

export const ClientesAndCollaboratorsSection = styled.section`
  padding: 20px 15px 60px;
    background-color: ${(props) => props.theme['blue-700']};
  @media screen and (min-width: 1280px) {
    padding-bottom: 90px;
    height: 76vh;
  }

  .clients__and__collaborators__header {
    padding-top: 1rem;
  }

  .clients__and__collaborators__title {
    padding-top: 2.5rem;

    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['green-500']};
  }

  .clients__and__collaborators__subtitle {
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

  .mt__40 {
    margin-top: 40px;
  }

  .clients__and__collaborators__items {
    position: relative;
  }

  .slick-track {
    display: flex;
    gap: 1rem;
  }
`
