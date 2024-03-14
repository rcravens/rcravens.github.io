import {useEffect, useRef} from "react";
import {register} from "swiper/element";
import {Link, useParams} from "react-router-dom";

export default function PortfolioPage({projects}) {

    let params = useParams();

    const swiperElRef = useRef(null);

    let project = projects.hasOwnProperty(params.project) ? projects[params.project] : null;

    useEffect(() => {

        register();

        const params = {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            },
        };

        Object.assign(swiperElRef.current, params);

        swiperElRef.current.initialize();
    }, []);

    return (
        <main id="main">
            <section id="portfolio">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Portfolio Details - {project.name}</h2>
                            <ol>
                                <li><Link to="/#portfolio">Home</Link></li>
                                <li>{project.short_name}</li>
                            </ol>
                        </div>

                        <div>Selected Portfolio Data Goes Here</div>
                    </div>
                </section>

                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper">
                                    <swiper-container init="false" ref={swiperElRef}>
                                        {project.images.map((image, index) => (
                                            <swiper-slide key={index}>
                                                <img src={image} alt=""/>
                                            </swiper-slide>
                                        ))}

                                    </swiper-container>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: {project.category}</li>
                                        <li><strong>Company</strong>: {project.company}</li>
                                        <li><strong>
                                            Project URL</strong>:&nbsp;
                                            {Object.keys(project.urls).length === 0 ? 'Internal Project' :
                                                Object.keys(project.urls).map((name, idx) => (
                                                    <a key={idx} href={project.urls[name]} target="_blank" rel="noopener noreferrer">{name}</a>
                                                ))}
                                        </li>
                                        <li><strong>Technologies</strong>:
                                            {Object.keys(project.tags).map((class_name, idx) => (
                                                <span key={`badge-warp-${idx}`}>
                                                {project.tags[class_name].map((tag, index) => (
                                                    <span key={`${tag}-${index}`} className={`badge ${class_name}`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </span>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>Overview</h2>
                                    {project.paragraphs.map((paragraph, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{__html: paragraph}}></p>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </section>
        </main>
    )
}