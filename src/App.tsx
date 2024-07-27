import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import Header from './components/Header'
import HeaderX from './components/Header/index.2'
import NavProvider from './contexts/NavContext'

import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/css/app.css';
import './assets/css/imagehover.min.css';

import { Home } from './sections/Home'
import { AboutUS } from './sections/AboutUs'
import { Services } from './sections/Services'
import { ClientesAndCollaborators } from './sections/ClientsAndCollaborators'
import { Contacts } from './sections/Contacts'
import { FAQ } from './sections/FAQ'
import { Footer } from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min';
import './assets/css/custom.css';
import {HashRouter, Route, Routes} from "react-router-dom";
// import { DomainChecker } from "./sections/DomainVerify/DomainChecker";
import Checker from "./sections/DomainVerify/Checker";
import ServiceDetails from "./sections/Services/Details/ServiceDetails";


function App() {
  return (
    <HashRouter base="/">
        <Routes>
            <Route path={'/'} element={<Index content={<StartPage />}/> } />
            <Route path={'/service-details/:ref'} element={<ServicesPage/>} />
            {/*<Route path={'/service-details/:ref'} element={<Index content={<ServiceDetails/>}/>} />*/}
            {/*<Route path={'/login'} element={<Index content={<Login/>}/>} />*/}
        </Routes>
    </HashRouter>
  )
}

const Index = function({ content }: { content: any | Element }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <NavProvider>
                <Header />
                { content }
                <Footer />

            </NavProvider>
        </ThemeProvider>
    )
};



const ServicesPage = function() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <NavProvider>
                <HeaderX />
                <ServiceDetails/>
            </NavProvider>
            {/*<Footer />*/}
        </ThemeProvider>
    )
};



const StartPage = function() {
    return (
        <>
            <Home />
            <AboutUS />
            <Services />
            <Checker />
            <ClientesAndCollaborators />
            {/*<Projects />*/}
            {/*<NewsLetter />*/}
            <FAQ />
            {/*<Contacts />*/}

        </>
    )
};

export default App
