export default function Skills({data}) {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>{data.trait_summary}</p>
                </div>

                <div className="text-center" data-aos="fade-up">
                    <div className="badges badges-large">
                        <div className="row mb-4">
                            {data.traits.map((item, index) => (
                                <span key={`trait-${index}`} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                                    <span className="badge text-bg-success">{item}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-title">
                    <p>{data.category_summary}</p>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up">
                        {data.categories.left.map((item, idx1) => (
                            <div key={`skill-${idx1}`} className="badges">
                                <span className="skill">{item.name}</span>
                                {item.items.map((name, idx2) => (
                                    <span key={`skill-${idx1}-${idx2}`} className={`badge ${item.icon}`}>{name}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        {data.categories.right.map((item, idx1) => (
                            <div key={`skill-${idx1}`} className="badges">
                                <span className="skill">{item.name}</span>
                                {item.items.map((name, idx2) => (
                                    <span key={`skill-${idx1}-${idx2}`} className={`badge ${item.icon}`}>{name}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}