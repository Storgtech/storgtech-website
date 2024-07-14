import  { FormEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./Checker.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalComponent from "../../components/Modal/Modal";

function CheckIsValidDomain(domain: string): RegExpMatchArray | null {
    const re = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
    return domain.match(re);
}

function clearDomain(url: string): string {

    const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+)\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/;
    const match = url.match(domainRegex);

    if (match && match[2]) {
        return match[2];
    } else {
        return url;
    }
}

const app_url: string = 'http://localhost:8000/api/v1/domain/verify/';

const SearchWhoIs = () => {
    const [domain, setDomain] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState('');
    const [whoisData, setWhoisData] = useState<any>(true);
    const [dot, setDot] = useState<any>('.com');


    function PrintWhoIs( domain : string) {

        return (
            <div id='success'>
                {domain} <span style={{ color: "lightgreen" }}> está disponível</span>,&nbsp;
                <Link to={'#'} onClick={ () => setModal(true)} style={{color: "blue"}}>solicitar orçamento</Link>.
            </div>
        );
    }

    const searchWhoIs = async () => {

        setDomain(clearDomain(domain));

        if (CheckIsValidDomain(domain + dot)) {
            setLoading(true);
            setError('');

            try {
                console.clear();
                const response: any = await axios.get(`${app_url + domain + dot}`);
                console.log(domain + dot);
                if (response.status === 200) {
                    const data = await response.data;
                    setError('');
                    if (data.domain){
                        setError(domain + dot)
                        console.log(data);
                    }
                }
            } catch (error: any) {
                setError('');
                if (!error.domain) setWhoisData(PrintWhoIs(domain + ' está disponível!'));
                else setError('Erro não identificado!');
            }

            setLoading(false);
        } else {
            setError('');
            setError('Atenção: digite um domínio válido!');
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        searchWhoIs();
    }

    const modalBtn = () => {
        const close = document.getElementById('modal-close') as HTMLElement;
        if (close){
            close.addEventListener('click', () => {
                setModal(false);
            });
        }
    }

    useEffect(() => {
        // window.scrollTo(0, 0);
        modalBtn();
    },[modal, error]);

    return (
        <div>
            {modal ? <ModalComponent opt={'digitalServices'}/> : ''}
            <div className="searchBar">
                <Form id="searchWhoIs" className="searchBar row" onSubmit={handleSubmit}>
                    <div className="form-goup p-1 col-sm-12 col-md-6 col-lg-6">
                        <input
                            id="searchQueryInput"
                            type="text"
                            name="dominio"
                            placeholder="dominio.com"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group p-1 col-sm-12 col-md-3 col-lg-3">
                        <Form.Select id='selectQueryInput' onChange={(e)=> setDot(e.target.value)}>
                            <option>.com</option>
                            <option>.net</option>
                            <option>.org</option>
                            <option>.en</option>
                        </Form.Select>
                    </div>
                    <div className="form-group col-sm-12 col-md-3 col-lg-3">
                        <button type="submit" id='form-btn' name="searchQuerySubmit">
                            Verificar
                        </button>
                    </div>
                </Form>
            </div>
            <div id="whois_result" className='mt-5'>
                {loading ? <div className="loading-pulse"></div> : whoisData}</div>
                {error && <div className="" role="alert">
                <strong>{error} <span style={{color: "red"}}>já está registrado </span></strong>
            </div>}
        </div>
    );
};

const Checker = () => {
    return (
        <div id='checker' className='container'>
            <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="text-left">
                        <div className="col-12">
                            <span className="line"></span>
                        </div>
                        <h2 className="">
                            Adquira agora mesmo um domínio para sua empresa!
                        </h2>
                        <p>
                            Solicite um domínio do tipo suaempresa.com, net, org e outros.
                            Use a caixa de verificação ao lado para saber se seu domínio está disponível para compra.
                        </p>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 m-auto align-items-end justify-content-end p-5">
                    <div className="wrapper center_search position-relative" id="busca_whois">
                        <SearchWhoIs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checker;
