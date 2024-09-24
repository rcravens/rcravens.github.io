import {useEffect} from "react";

import {A11y, Autoplay, Navigation, Pagination, Scrollbar, Zoom} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import {Link, useLocation, useParams} from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import 'swiper/css/zoom';

export default function PortfolioPage({projects}) {

    let params = useParams();

    // const swiperElRef = useRef(null);

    let project = projects.hasOwnProperty(params.project) ? projects[params.project] : null;

    let nav_bar_data = Object.keys(projects).map((name, idx) => {
        return [name, projects[name].name];
    });
    nav_bar_data.sort((a, b) => a[1].localeCompare(b[1]));

    let location = useLocation();

    useEffect(() => {

        // let el = document.querySelector('.swiper swiper-container');
        // if (el.hasOwnProperty('swiper')) {
        //     el.swiper.slideTo(0, 0, false);
        // }

    }, [location]);

    function nav_bar_link_class(name) {
        if (name === params.project) {
            return "dropdown-item active";
        }
        return 'dropdown-item';
    }

    return (
        <main id="main">
            <div id="portfolio">
                <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                    <div className="container-fluid">
                        <div className="navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Projects
                                    </a>
                                    <ul className="dropdown-menu">
                                        {nav_bar_data.map((data, idx) => (
                                            <li key={`portfolio-nav-${idx}`}><Link className={nav_bar_link_class(data[0])} to={`/${data[0]}`}>{data[1]}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                            <div className="navbar-brand d-flex">
                                Portfolio Details - {project.name}
                            </div>

                        </div>
                    </div>
                </nav>
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Portfolio Details - {project.name}</h2>
                            <ol>
                                <li><Link to="/#portfolio">Home</Link></li>
                                <li>{project.short_name}</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper">
                                    <Swiper
                                        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, Zoom]}
                                        centeredSlides={true}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        slidesPerView={1}
                                        navigation={false}
                                        pagination={{clickable: true}}
                                        scrollbar={false}
                                        zoom={true}
                                    >
                                        {project.images.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <a href={image} target="_blank"><img src={image} alt=""/></a>
                                            </SwiperSlide>
                                        ))}

                                    </Swiper>
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
                                                    <span>
                                                        <a key={idx} href={project.urls[name]} target="_blank" rel="noopener noreferrer">{name}</a>
                                                        {idx !== (Object.keys(project.urls).length - 1) && <span> | </span>}
                                                    </span>
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
            </div>
        </main>
    )
}