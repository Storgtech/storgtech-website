
const FormSelect = ({ opt }: any) => {
    return (
        <select className={'form-control'}>
            { opt === 'training' ?
                <>
                    <optgroup label="PROGRAMAÇÃO WEB - 10 MIL Até 50 MIL AOA">
                        <option><strong>Treinamento:</strong> HTML, CSS & Javascript</option>
                        <option><strong>Treinamento:</strong> HTML, CSS & php</option>
                        <option><strong>Treinamento:</strong> Next.js, React.js, vue.js, vite.js</option>
                        <option><strong>Treinamento:</strong> Node.js</option>
                        <option><strong>Treinamento:</strong> Handlebars</option>
                    </optgroup>

                    <optgroup label="SUPORTE TÉCNICO - 10 MIL Até 50 MIL AOA">
                        <option><strong>Treinamento:</strong> Princípios e resolução de problemas</option>
                        <option><strong>Treinamento:</strong> Reparação de computadores</option>
                        <option><strong>Treinamento:</strong> Instalação e configuração de servidores.</option>
                        <option><strong>Treinamento:</strong> Manutenção de sistemas de redes cabeadas.</option>
                    </optgroup>

                    <optgroup label="PROGRAMAÇÃO DESKTOP - 10 MIL Até 50 MIL AOA">
                        <option><strong>Treinamento:</strong> Algoritmo e lógica de programação (linguagem C)</option>
                        <option><strong>Treinamento:</strong> Linguagem de programação C#</option>
                        <option><strong>Treinamento:</strong> Linguagem de programação Visual Basic</option>
                        <option><strong>Treinamento:</strong> Linguagem de programação Java.</option>
                    </optgroup>

                    <optgroup label="PROGRAMAÇÃO MOBILE - 10 MIL Até 50 MIL AOA">
                        <option><strong>Treinamento:</strong> Criação de apps</option>Encomenda/Compra:
                    </optgroup>
                </>
                : ''}
            { opt === 'app' ?
                <>
                    <optgroup label="SOFTWARE WEB - 90 MIL Até 900 MIL AOA">
                        <option>Encomenda: Software Web - Facturação</option>
                        <option>Encomenda: Software Web - Gestão</option>
                        <option>Encomenda: Software Web - Designer UI/UX</option>
                        <option>Encomenda: Software Web - E-commerce</option>
                        <option>Encomenda: Software Web - E-learning</option>
                    </optgroup>

                    <optgroup label="SOFTWARE DESKTOP - 90 MIL Até 900 MIL AOA">
                        <option>Encomenda: Software Desktop - Facturação</option>
                        <option>Encomenda: Software Desktop - Gestão</option>
                        <option>Encomenda: Software Desktop - Designer UI/UX</option>
                        <option>Encomenda: Software Desktop - E-commerce</option>
                        <option>Encomenda: Software Desktop - E-learning</option>
                    </optgroup>

                    <optgroup label="REDES - 50 MIL Até 1 MILHÃO AOA">
                        <option>Encomenda: Configuração e instalação de redes (cabeamentos)</option>
                        <option>Encomenda: Cyber Café</option>
                    </optgroup>

                    <optgroup label="SUPORTE VIRTUAL - Diagnóstico 50 MIL AOA">
                        <option>Encomenda: SUPORTE VIRTUAL - Reparação dos sistemas operacionais</option>
                        <option>Encomenda: SUPORTE VIRTUAL - Servidores</option>
                    </optgroup>

                    <optgroup label="TELECOMUNICAÇÕES - 50 MIL Até 1 MILHÃO AOA">
                        <option>Encomenda: CCTV - montagem e configuração de câmara</option>
                        <option>Encomenda: CCTV - segurança Eletrónica</option>
                    </optgroup>

                    <optgroup label="SUPORTE AO DOMICÍLIO - Deslocação/Diagnóstico 10 MIL AOA">
                        <option>Encomenda: SUPORTE AO DOMICÍLIO: Reparação de computador hardware & software</option>
                        <option>Encomenda: SUPORTE AO DOMICÍLIO: Servidores</option>
                        <option>Encomenda: SUPORTE AO DOMICÍLIO: Impressoras</option>
                    </optgroup>
                </> : ''
            }

            { opt === 'msOffice' ?
                <>
                    <optgroup label="MICROSOFT OFFICE">
                        <option>MICROSOFT OFFICE CASA 2021 - 85 MIL AOA /Ano</option>
                    </optgroup>

                    <optgroup label="MICROSOFT 365 PESSOAL">
                        <option>MICROSOFT 365 PESSOAL - 40 MIL AOA /ANO</option>
                    </optgroup>

                    <optgroup label="MICROSOFT 365 FAMILIAR">
                        <option>"MICROSOFT 365 FAMILIAR - 70 MIL AOA /ANO"</option>
                    </optgroup>

                    <optgroup label="MICROSOFT 365 BASIC">
                        <option>MICROSOFT 365 BASIC - 60 MIL AOA /ANO</option>
                    </optgroup>

                    <optgroup label="MICROSOFT 365 EMPRESAS">
                        <option>MICROSOFT 365 EMPRESAS - 60 MIL AOA /ANO</option>
                    </optgroup>

                    <optgroup label="MICROSOFT 365 EMPRESAS">
                        <option>MICROSOFT 365 EMPRESAS - 150 MIL AOA /ANO</option>
                    </optgroup>

                    <optgroup label="PACOTE OFFICE">
                        <option>PACOTE OFFICE - 150 MIL AOA</option>
                    </optgroup>

                    <optgroup label="FERRAMENTA COLABORATIVA">
                        <option>FERRAMENTA COLABORATIVA - 50 MIL AOA</option>
                    </optgroup>

                    <optgroup label="AUTOMAÇÃO & RELATÓRIOS">
                        <option>AUTOMAÇÃO & RELATÓRIOS - 60 MIL AOA</option>
                    </optgroup>

                    <optgroup label="MS365 ADMINISTRAÇÃO">
                        <option>MS365 ADMINISTRAÇÃO - 70 MIL AOA</option>
                    </optgroup>
                </>
                : ''}

            { opt === 'digitalServices' ?
                <>
                    <optgroup label="DOMÍNIOS NACIONAIS - 150 MIL Até 350 MIL AOA /ANO">
                        <option>Domínios do tipo .ao</option>
                        <option>Domínios do tipo co.ao</option>
                    </optgroup>

                    <optgroup label="ALOJAMENTOS NACIONAIS - 500 MIL AOA /ANO">
                        <option>Domínios do tipo .ao</option>
                        <option>Domínios do tipo co.ao</option>
                    </optgroup>

                    <optgroup label="E-MAILS NACIONAIS - 30 MIL AOA /ANO">
                        <option>Domínios do tipo .ao</option>
                        <option>Domínios do tipo co.ao</option>
                    </optgroup>

                    <optgroup label="DOMÍNIOS INTERNACIONAIS - 50 MIL Até 40 MIL AOA /ANO">
                        <option>Domínios do tipo .com; .org; .net; .pt; .website; .online</option>
                    </optgroup>

                    <optgroup label="ALOJAMENTOS INTERN. - 20 MIL Até 80 MIL AOA /ANO">
                        <option>Domínios do tipo .com; .org; .net; .pt; .website; .online</option>
                    </optgroup>

                    <optgroup label="EMAILS INTERNACIONAIS - 20 MIL Até 80 MIL AOA /ANO">
                        <option>Domínios do tipo .com; .org; .net; .pt; .website; .online</option>
                    </optgroup>

                    <optgroup label="CARTÃO VISA VIRTUAL">
                        <option>CARTÃO VISA VIRTUAL - 250 MIL AOA</option>
                    </optgroup>

                    <optgroup label="CARTÃO VISA FÍSICO">
                        <option>CARTÃO VISA FÍSICO - 450 MIL AOA</option>
                    </optgroup>

                    <optgroup label="FACEBOOK">
                        <option>Patrocínio: FACEBOOK - 50 MIL AOA /ANO</option>
                    </optgroup>

                    <optgroup label="LINKEDIN">
                        <option>Patrocínio: LINKEDIN - 100 MIL AOA /ANO</option>
                    </optgroup>

                    <optgroup label="PACOTE DE DESIGNER">
                        <option>PACOTE DE DESIGNER - 40 MIL AOA /ANO</option>
                    </optgroup>
                </>
                : ''
            }
        </select>

    );
}


export default FormSelect;
