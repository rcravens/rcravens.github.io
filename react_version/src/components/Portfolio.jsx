import {Link} from "react-router-dom";
import {useEffect} from "react";
import Isotope from 'isotope-layout';
import AOS from 'aos';

export default function Portfolio({portfolio}) {

    useEffect(() => {
        window.addEventListener('load', () => {
            let portfolioContainer = document.querySelector('.portfolio-container');
            let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

            if (portfolioContainer) {
                let portfolioIsotope = new Isotope(portfolioContainer, {
                    itemSelector: '.portfolio-item'
                });

                portfolioFilters.forEach(e => e.addEventListener('click', function (e) {
                    e.preventDefault();
                    portfolioFilters.forEach(function (el) {
                        el.classList.remove('filter-active');
                    });
                    this.classList.add('filter-active');

                    portfolioIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    portfolioIsotope.on('arrangeComplete', function () {
                        AOS.refresh()
                    });
                }));
            }
        });
    })
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