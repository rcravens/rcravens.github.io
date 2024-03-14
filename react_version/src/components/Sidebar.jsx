import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Sidebar({data}) {

    useEffect(() => {
        let navbar_links = document.querySelectorAll('#navbar .scrollto')

        window.addEventListener('scroll', () => {
            let position = window.scrollY + 200
            navbar_links.forEach(navbar_link => {
                if (!navbar_link.hash) return
                let hash = navbar_link.hash.startsWith('#/') ? navbar_link.hash.substring(2) : navbar_link.hash;
                let section = document.querySelector(hash)
                if (!section) return
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbar_link.classList.add('active')
                } else {
                    navbar_link.classList.remove('active')
                }
            })
        })
    })

    return (
        <div>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src={data.image} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><Link to="/">{data.name}</Link></h1>
                        <div className="social-links mt-3 text-center">
                            {data.socials.map(social => (
                                <a key={social.name} href={social.url} className={social.name}><i className={`bx ${social.icon}`}></i></a>
                            ))}
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><HashLink to="/#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></HashLink></li>
                            <li><HashLink to="/#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></HashLink></li>
                            <li><HashLink to="/#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></HashLink></li>
                            <li><HashLink to="/#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i><span>Portfolio</span></HashLink></li>
                            <li><HashLink to="/#testimonials" className="nav-link scrollto"><i className="bx bx-chat"></i> <span>Testimonials</span></HashLink></li>
                            <li><HashLink to="/#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></HashLink></li>
                            <li><a href={data.resume} className="nav-link" target="_blank" rel="noreferrer"><i className="bx bi-download"></i> <span>Resume</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}