import { useContext, useEffect, useState } from 'react'
import { NavbarBrand, NavItem } from 'reactstrap'
import { List } from 'phosphor-react'
import { NavContext } from '../../contexts/NavContext'
import { Button } from '../Button'
import { handleClickSmoothScrolling, handleHeaderSticky } from '../../utils'
import { HeaderContainer, Nav, Navbar, NavLink } from './Header.styles'

import logo from './../../assets/logoazul.png'
import { Link } from "react-router-dom";

const navLinks = [
    {
        name: 'Home',
        ref: 'home',
        counter: '01',
    },
    {
        name: 'Sobre Nós',
        ref: 'about__us',
        counter: '02',
    },
    {
        name: 'Serviços',
        ref: 'services',
        counter: '03',
    },
    {
        name: 'Clientes',
        ref: 'clients__and__collaborators',
        counter: '04',
    },
    // {
    //     name: 'Boletim Informativo',
    //     ref: 'newsletter',
    //     counter: '05',
    // }

];

interface NavLinksProps {
    name: string
    ref: string
    counter: string
}

function HeaderX() {
    const { activeLinkId } = useContext(NavContext)
    const [toggle, setToggle] = useState(false)

    const handleMenuToggle = () => setToggle(!toggle)
    const closeMenuToggle = () => setToggle(false)

    useEffect(() => {
        window.addEventListener('scroll', handleHeaderSticky)
        return () => {
            window.removeEventListener('scroll', handleHeaderSticky)
        }
    })

    function renderNavLink(data: NavLinksProps) {
        const { name, ref } = data

        return (
            <NavItem key={ref}>
                <NavLink
                    onClick={() => {
                        handleClickSmoothScrolling(ref)
                        closeMenuToggle()
                    }}
                    className={activeLinkId === ref ? 'active' : ''}
                >
                    {/*<span>{counter}</span>*/}
                    <Link to={'/#' + ref} style={{textDecoration: 'none'}}> {name}</Link>
                </NavLink>
            </NavItem>
        )
    }

    return (
        <HeaderContainer>
            <div className="container">
                <Navbar>
                    <NavbarBrand onClick={() => handleClickSmoothScrolling('home')}>
                        <img src={logo} alt="logo" />
                    </NavbarBrand>
                    <button className="hamburger" onClick={handleMenuToggle}>
                        {toggle ? (
                            <List color="#010101" size={32} />
                        ) : (
                            <List color="#010101" size={32} />
                        )}
                    </button>
                    <div className={toggle ? 'navbar-menu active' : 'navbar-menu'}>
                        <Nav className="me-auto">
                            {navLinks.map((data: NavLinksProps) => renderNavLink(data))}
                        </Nav>
                        <Button
                            onClick={() => handleClickSmoothScrolling('contacts')}
                            className="btn__contacts"
                            variant="primary"
                        >
                            Contacta-nos
                        </Button>
                    </div>
                </Navbar>
            </div>
        </HeaderContainer>
    )
}

export default HeaderX
