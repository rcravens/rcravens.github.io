import {Link} from "react-router-dom";

export default function Portfolio({portfolio}) {

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p dangerouslySetInnerHTML={{__html: portfolio.summary}}></p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            {portfolio.filters.map((filter, idx) => (
                                <li key={`portfolio-filter-${idx}`} data-filter={`.filter-${filter}`}>{filter}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    {Object.keys(portfolio.projects).map((name, idx) => (
                        <div key={idx} className={`col-lg-4 col-md-6 portfolio-item filter-${portfolio.projects[name].filter}`}>
                            <div className="portfolio-wrap">
                                <img src={portfolio.projects[name].image} className="img-fluid" alt=""/>
                                <div className="portfolio-links">
                                    <Link to={`/${name}`} title="More Details" target="_blank"><i className="bx bx-link"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                
            </div>
        </section>
    )
}