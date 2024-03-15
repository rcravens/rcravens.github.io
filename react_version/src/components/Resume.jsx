import React from 'react';

export default function Resume({work_experiences, education}) {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        {work_experiences.left.map((section, idx1) => (
                            <div key={`resume-left-${idx1}`}>
                                <h3 className="resume-title">{section.title}</h3>
                                {section.items.map((item, idx2) => (
                                    <div key={`resume-left-${idx1}-${idx2}`} className="resume-item">
                                        <h4>{item.title}</h4>
                                        <h5>{item.dates}</h5>
                                        <p><em>{item.company}</em></p>
                                        <ul>
                                            {item.highlights.map((text, idx3) => (
                                                <li key={`resume-left-${idx1}-${idx2}-${idx3}`}>{text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {education.left.map((section, idx1) => (
                            <div key={`education-left-${idx1}`}>
                                <h3 className="resume-title">{section.title}</h3>
                                {section.items.map((item, idx2) => (
                                    <div key={`education-left-${idx1}-${idx2}`} className="resume-item">
                                        <h4>{item.degree}</h4>
                                        <p><em>{item.school}</em></p>
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        {work_experiences.right.map((section, idx1) => (
                            <div key={`resume-right-${idx1}`}>
                                <h3 className="resume-title" dangerouslySetInnerHTML={{__html: section.title}}></h3>
                                {section.items.map((item, idx2) => (
                                    <div key={`resume-right-${idx1}-${idx2}`} className="resume-item">
                                        <h4>{item.title}</h4>
                                        <h5>{item.dates}</h5>
                                        <p><em>{item.company}</em></p>
                                        <ul>
                                            {item.highlights.map((text, idx3) => (
                                                <li key={`resume-right-${idx1}-${idx2}-${idx3}`}>{text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {education.right.map((section, idx1) => (
                            <div key={`education-right-${idx1}`}>
                                <h3 className="resume-title">{section.title}</h3>
                                {section.items.map((item, idx2) => (
                                    <div key={`education-right-${idx1}-${idx2}`} className="resume-item">
                                        <h4>{item.degree}</h4>
                                        <p><em>{item.school}</em></p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}