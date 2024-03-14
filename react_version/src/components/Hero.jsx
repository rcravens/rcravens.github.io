import {ReactTyped} from "react-typed";

export default function Hero({data}) {

    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{backgroundImage: `url(${data.image})`}}>
            <div className="hero-container" data-aos="fade-in">
                <h1>{data.name}</h1>
                <p>&nbsp;&nbsp;&nbsp;
                    <ReactTyped
                        strings={data.words}
                        startDelay={300}
                        typeSpeed={150}
                        backSpeed={100}
                        backDelay={500}
                        loop={true}
                        showCursor={false}
                    >
                        <span></span>
                    </ReactTyped>
                </p>

            </div>
        </section>
    );
}