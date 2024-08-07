import contactCSS from './Contact.module.css'

function Contact () {
    return(
        <div className={`${contactCSS.ContactWrapper} section`}>
            <h2>Contatos</h2>
            <p className={contactCSS.pera}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className={contactCSS.ContactContainer}>
                <div className={contactCSS.ContactInfo}>
                    <div className={contactCSS.card}>
                        <i className="ri-phone-line"></i>
                        <h3>+55 11 97609 5858</h3>
                    </div>
                    <div className={contactCSS.card}>
                        <i className="ri-mail-line"></i>
                        <h3>pedrodrlvbarbas@gmail.com</h3>
                    </div>
                    <div className={contactCSS.card}>
                        <i className="ri-map-pin-line"></i>
                        <h3>São Paulo, SP, Brasil</h3>
                    </div>
                </div>
                {/* <div className={contactCSS.Contactform}>
                    <h3>Entre em contato</h3>

                    <div className={contactCSS.inputWrapper}>
                        <input type="text" placeholder="Nome *" />
                    </div>
                    <div className={contactCSS.inputWrapper}>
                        <input type="email" placeholder="Email *" />
                    </div>
                    <textarea placeholder="Mensagem"></textarea>

                    <button type="submit">
                        Enviar
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Contact
