import { FormEvent, useState } from 'react'
import { useNav } from '../../hooks/useNav'
import { ContactsSection } from './Contact.styles'
import FormSelect from "./FormSelect";

export function Contacts({ prop, opt } : any ) {
  const contactsRef = useNav('contacts')

  // @ts-ignore
  const [isSending, setIsSending] = useState(false)
  // @ts-ignore
  const [isSent, setIsSent] = useState(false)
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  // @ts-ignore
  const handleClick = (event: FormEvent) => {
      // const emailSubject = encodeURIComponent('Assunto personalizado');
      // const emailBody = encodeURIComponent(`Nome: ${event.name.value}\nE-mail: ${email}\n\n${mensagem}`);
      // const mailtoLink = `mailto:destinatario@example.com?subject=${emailSubject}&body=${emailBody}`;
      //
      // window.location.href = mailtoLink;
  }

  return (
    <ContactsSection ref={contactsRef} id="contacts__section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 mb-4">
            <div className="contacts__section__items">
              <div className="col-lg-7 col-sm-11">
                <div className="contacts__header">
                  <h3 className="contacts__title">05 • Contacta-nos</h3>

                  <h2 className="contacts__subtitle">
                    Entre em contacto connosco
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-11">
            <div className="form__contacts">
              <form onSubmit={handleSubmit} action=''>
                <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Seu Nome"
                      />
                    </div>
                  { prop ? (<div className="form-group">
                              <FormSelect opt={ opt } />
                          </div>): ''}
                <div className="form-group">
                  <input
                    type="text"
                    name={'assunto'}
                    className="form-control"
                    placeholder="Assunto"
                  />
                </div>
                  <div className="form-group">
                  <input
                      type="tel"
                      id="phone"
                    className="form-control"
                    placeholder="Seu Telefone"
                  />
                </div>
                  <div className="form-group">
                  <input
                    type="email"
                    id={'email'}
                    className="form-control"
                    placeholder="Seu Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Sua mensagem
                        "
                    rows={3}
                  ></textarea>
                </div>
                <div className="form-group">
                  <button
                    onClick={handleClick}
                    className={
                      isSending || isSent
                        ? 'btn__send__message sending'
                        : 'btn__send__message'
                    }
                  >
                    <span className="icon material-symbols-outlined">
                      {isSent ? 'check' : 'send'}
                    </span>
                    <span className="text">
                      {isSending
                        ? 'Enviando ...'
                        : isSent
                        ? 'Enviado'
                        : 'Enviar mensagem'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactsSection>
  )
}
