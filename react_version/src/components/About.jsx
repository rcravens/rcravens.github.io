export default function About({data}) {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>{data.summary}</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={data.image} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>{data.title}</h3>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul>
                                    {data.highlights.map((item, index) => (
                                        <li key={index}><i className="bi bi-chevron-right"></i> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}