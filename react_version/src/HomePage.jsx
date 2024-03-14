import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function HomePage({data}) {
    return (
        <div id="main">
            <Hero data={data.hero}/>
            <About data={data.about}/>
            <Skills data={data.skills}/>
            <Resume work_experiences={data.work_experiences} education={data.education}/>
            <Portfolio portfolio={data.portfolio}/>
            <Testimonials testimonials={data.testimonials}/>
            <Contact contacts={data.contacts}/>
        </div>
    )
}