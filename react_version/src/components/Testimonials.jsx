import {useEffect, useRef} from 'react';
import {register} from 'swiper/element/bundle';

export default function Testimonials({testimonials}) {
    const swiperElRef = useRef(null);

    useEffect(() => {

        register();

        const params = {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 3,
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },

                1200: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        };

        Object.assign(swiperElRef.current, params);

        swiperElRef.current.initialize();
    }, []);

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <swiper-container init="false" ref={swiperElRef}>

                        {testimonials.map((testimonial, index) => (
                            <swiper-slide key={`testimonial-${index}`}>
                                <div className="testimonial-item" data-aos="fade-up">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        <span dangerouslySetInnerHTML={{__html: testimonial.text}}></span>
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src={testimonial.image} className="testimonial-img" alt=""/>
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.title}</h4>
                                </div>
                            </swiper-slide>
                        ))}

                    </swiper-container>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}