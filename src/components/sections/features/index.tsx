import { Container } from "robindoc/lib/components/ui/container";

import "./features.scss";

export const Features = () => (
    <section className="features" id="features">
        <Container>
            <div className="features-grid">
                <div className="features-card features-card-1">
                    <h3>Inspired by next.js</h3>
                    <div className="features-film">
                        <span className="features-dot features-dot-pink features-dot-big" />
                        <span className="features-dot features-dot-pink features-dot-small features-1-dot-anim features-1-dot-anim-1" />
                        <span className="features-dot features-dot-pink features-dot-small features-1-dot-anim features-1-dot-anim-2" />
                        <span className="features-dot features-dot-pink features-dot-small features-1-dot-anim features-1-dot-anim-3" />
                        <span className="features-dot features-dot-pink features-dot-small features-1-dot-anim features-1-dot-anim-4" />
                        <span className="features-dot features-dot-blue features-dot-big features-1-dot-1" />
                        <span className="features-dot features-dot-blue features-dot-big features-1-dot-2" />
                        <span className="features-dot features-dot-blue features-dot-big features-1-dot-3" />
                        <span className="features-dot features-dot-blue features-dot-big features-1-dot-4" />
                    </div>
                </div>
                <div className="features-card features-card-2">
                    <h3>Uses the latest features</h3>
                    <div className="features-film">
                        <span className="features-line features-2-line-anim" />
                        <span className="features-dot features-dot-big features-dot-pink" />
                        <span className="features-dot features-dot-big features-dot-neutral features-2-dot-2" />
                        <span className="features-dot features-dot-big features-dot-blue features-2-dot-3" />
                    </div>
                </div>
                <div className="features-card features-card-3">
                    <h3>Adapted for App Router</h3>
                    <div className="features-film">
                        <span className="features-line features-3-line-anim" />
                        <span className="features-dot features-dot-blue features-dot-big features-3-dot-1" />
                        <span className="features-dot features-dot-blue features-dot-big features-3-dot-2" />
                        <span className="features-dot features-dot-blue features-dot-big features-3-dot-3" />
                    </div>
                </div>
                <div className="features-card features-card-4">
                    <h3>Plug-and-Play solutions</h3>
                    <div className="features-film">
                        <span className="features-dot features-dot-small features-dot-neutral features-4-dot-1-anim" />
                        <span className="features-dot features-dot-small features-dot-neutral features-4-dot-2-anim" />
                        <span className="features-dot features-dot-small features-dot-neutral features-4-dot-3-anim" />
                        <span className="features-dot features-dot-small features-dot-neutral features-4-dot-4-anim" />
                        <span className="features-dot features-dot-big features-dot-neutral features-4-dot-1" />
                        <span className="features-dot features-dot-big features-dot-blue features-4-dot-2" />
                        <span className="features-dot features-dot-big features-dot-pink features-4-dot-3" />
                    </div>
                </div>
                <div className="features-card features-card-5">
                    <h3>Simple and Fast APIs</h3>
                    <div className="features-film">
                        <span className="features-dot features-dot-big features-dot-blue features-5-dot-1" />
                        <span className="features-dot features-dot-big features-dot-neutral features-5-dot-2" />
                        <span className="features-dot features-dot-big features-dot-blue features-5-dot-3" />
                        <span className="features-dot features-dot-middle features-dot-blue features-5-dot-1-anim" />
                        <span className="features-dot features-dot-middle features-dot-blue features-5-dot-2-anim" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
);
