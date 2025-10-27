import { Container } from "robindoc/lib/components/ui/container";

import "./about.scss";

export const About = () => (
    <section className="about" id="about">
        <Container>
            <div className="about-bg-anim">
                <div className="about-card">
                    <div>
                        <h2>Nimpl Motivation</h2>
                    </div>
                    <p>
                        Next.js implements a lot of functionality from release to release. Many innovations are
                        extremely useful, but they have critical differences. These changes can hinder the transition to
                        new versions and new approaches.
                    </p>
                </div>
                <div className="about-card">
                    <div>
                        <h2>Nimpl Plans</h2>
                    </div>
                    <p>
                        Much desired functionality for next.js is still not implemented out of the box. This family of
                        packages solves common next.js tasks. <br />
                        Plans include creating several more packages and continuing to improve existing ones.
                    </p>
                </div>
                <div className="about-card">
                    <div>
                        <h2>Additional</h2>
                    </div>
                    <p>
                        If you have ideas, difficulties, wishes - do not hesitate to create issues. Community is what
                        makes solutions better. <br />
                        Let's make the web not only faster, but also easier together.
                    </p>
                </div>
            </div>
        </Container>
    </section>
);
