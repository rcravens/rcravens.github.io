import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';

import Sidebar from "./components/Sidebar";
import HomePage from "./HomePage";
import {Route, Routes} from "react-router-dom";
import PortfolioPage from "./PortfolioPage";

export default function Layout({data}) {

    useEffect(() => {
        let back_to_top = document.querySelector('.back-to-top')

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                back_to_top.classList.add('active')
            } else {
                back_to_top.classList.remove('active')
            }
        })

        window.addEventListener('load', () => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            })
        });
    })

    return (
        <div className="layout">
            <Sidebar data={data.sidebar}/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage data={data}/>}/>
                    <Route path="/:project" element={<PortfolioPage projects={data.portfolio.projects}/>}/>
                </Routes>
            </main>
            <a href="/#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}