import { Container } from "robindoc/lib/components/ui/container";

import "./about.scss";

export const About = () => (
    <section className="about" id="about">
        <Container>
            <div className="about-layout">
                <div className="about-manifesto">
                    <p className="about-manifesto-label">Nimpl</p>
                    <p className="about-manifesto-text">
                        Let&apos;s make the web not only faster, but also easier together.
                    </p>
                </div>
                <div className="about-sequence">
                    <article className="about-card about-card_motivation">
                        <span className="about-step">01</span>
                        <h2 className="about-heading">Nimpl Motivation</h2>
                        <p className="about-text">
                            Next.js implements a lot of functionality from release to release. Many innovations are
                            extremely useful, but they have critical differences. These changes can hinder the
                            transition to new versions and new approaches.
                        </p>
                    </article>
                    <article className="about-card about-card_plans">
                        <span className="about-step">02</span>
                        <h2 className="about-heading">Nimpl Plans</h2>
                        <p className="about-text">
                            Much desired functionality for next.js is still not implemented out of the box. This family
                            of packages solves common next.js tasks.
                            <br />
                            Plans include creating several more packages and continuing to improve existing ones.
                        </p>
                    </article>
                    <article className="about-card about-card_additional">
                        <span className="about-step">03</span>
                        <h2 className="about-heading">Additional</h2>
                        <p className="about-text">
                            If you have ideas, difficulties, wishes - do not hesitate to create issues. Community is
                            what makes solutions better.
                            <br />
                            Let&apos;s make the web not only faster, but also easier together.
                        </p>
                    </article>
                </div>
            </div>
        </Container>
    </section>
);
