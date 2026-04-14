import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section py-5 position-relative overflow-hidden">
        <div className="container">
            <div className="row align-items-center min-vh-75">
                <div className="col-lg-6 hero-text z-2">
                    <h1 className="display-4 fw-bold text-dark lh-sm mb-4">
                        20 years of digital<br/>
                        transformation in<br/>
                        public service delivery<br/>
                        <span className="text-primary hero-highlight position-relative">It's possible.</span>
                    </h1>
                    <p className="lead text-muted mb-5 pe-lg-5 fs-6">
                        Discover how we use technology to empower frontline workers and communities,
                        to deliver public services locally, at a large scale, faster, better, and cheaper.
                    </p>
                    <div className="d-flex gap-3 flex-wrap">
                        <a href="#" className="btn btn-primary rounded-pill px-4 py-2 hover-lift">Our approach</a>
                        <a href="#" className="btn btn-outline-primary rounded-pill px-4 py-2 hover-lift">Our work</a>
                    </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0 z-2 position-relative">
                    <img src="https://picsum.photos/seed/hero/800/600"
                        className="img-fluid rounded-4 shadow-lg hero-img" alt="Frontline Workers" />
                    <div className="hero-bg-blob"></div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
