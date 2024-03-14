export default function Contact({contacts}) {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                </div>

                <div className="row" data-aos="fade-in">

                    {contacts.map((contact, index) => (
                        <div key={`contact-${index}`} className="col-lg-4 d-flex align-items-stretch">
                            <div className="info">
                                <div>
                                    <i className={contact.icon}></i>
                                    <h4>{contact.title}</h4>
                                    <p dangerouslySetInnerHTML={{__html: contact.text}}></p>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>

            </div>
        </section>
    )
}