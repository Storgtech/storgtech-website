import styled from 'styled-components'
import {
  NavLink as NavLinkReactstrap,
  Nav as NavReactstrap,
  Navbar as NavbarReactstrap,
} from 'reactstrap'

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
  z-index: 2000;
  background-color: ${(props) => props.theme['white-default']};
  /* overflow: hidden; */
  transition: 0.2s ease-in-out;

  &.is__sticky {
    width: 100%;
    left: 0;
    z-index: 2000;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 8%);

    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;

    .navbar {
      padding: 0.25rem;
      animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;

      &-brand img {
        width: 220px;
      }
    }
  }

  .navbar-menu {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['white-default']};
    z-index: 2000;
    .btn__contacts {
      height: 3rem !important;
    }
  }

  .hamburger {
    display: none;
    border: 0;
    background-color: transparent;
  }

  @media screen and (max-width: 1200px) {
    max-width: 100%;

    .hamburger {
      display: block;
    }

    .navbar-menu {
      position: fixed;
      left: -100%;
      top: 100px;

      padding: 0 !important;

      /* align-items: center;
      justify-content: center; */
      flex-direction: column;
      gap: 3rem !important;

      // background-color: ${(props) => props.theme['green-500']};

      width: 100%;
      height: 100%;

      text-align: center;
      transition: 0.3s;
    }

    .navbar-menu.active {
      left: 0;
    }
  }
`

export const Navbar = styled(NavbarReactstrap)`
  padding: 1rem 0 !important;
  transition: 0.2s ease-in-out;

  .navbar-brand img {
    width: 240px;
    cursor: pointer;

    @media screen and (max-width: 320px) {
      width: 200px;
    }
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    .hamburger {
      display: block;
    }
  }
`

export const Nav = styled(NavReactstrap)`
  margin-left: 3rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column !important;
    width: 100%;
    margin-left: 0;
    gap: 3rem !important;

    margin-top: 1rem;

    .nav-link {
      padding: 0 !important;
    }
  }
`

export const NavLink = styled(NavLinkReactstrap)`
  cursor: pointer !important;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;

  color: ${(props) => props.theme['blue-700']} !important;

  display: flex;
  flex-direction: column;

  &:hover {
    color: ${(props) => props.theme['green-500']} !important;

    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme['green-500']};
    }
  }

  &::before {
    position: absolute;

    top: 10px;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['blue-700']};
    opacity: 0.6;
  }

  &.active {
    color: ${(props) => props.theme['green-500']} !important;
    span {
      color: ${(props) => props.theme['green-500']} !important;
    }
  }
`
