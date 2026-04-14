import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5 border-top mt-5">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-4">
                    <a className="navbar-brand text-primary fw-bold fs-3 mb-3 d-block" href="#">
                        <span className="text-warning">e</span>Gov
                    </a>
                    <p className="text-muted small w-75">
                        Catalyzing digital transformation in
                        public service delivery at population scale.
                    </p>
                    <div className="d-flex gap-3 mt-4">
                        <div className="rounded-circle border border-secondary d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}}>
                            <span className="text-secondary small">f</span>
                        </div>
                        <div className="rounded-circle border border-secondary d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}}>
                            <span className="text-secondary small">in</span>
                        </div>
                        <div className="rounded-circle border border-secondary d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}}>
                            <span className="text-secondary small">X</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-3">Useful Links</h5>
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><a href="#" className="text-muted text-decoration-none small">Home</a></li>
                                <li><a href="#" className="text-muted text-decoration-none small">Our Projects</a></li>
                                <li><a href="#" className="text-muted text-decoration-none small">DIGIT Platform</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><a href="#" className="text-muted text-decoration-none small">Our People</a></li>
                                <li><a href="#" className="text-muted text-decoration-none small">Careers</a></li>
                                <li><a href="#" className="text-muted text-decoration-none small">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h5 className="fw-bold mb-3">Subscribe Now</h5>
                    <p className="text-muted small mb-3">Don't miss the latest resources and insights from our team.</p>
                    <form className="d-flex">
                        <input type="email" className="form-control rounded-start-pill shadow-sm border-0" placeholder="Email Address" />
                        <button className="btn btn-warning rounded-end-pill px-4 text-white shadow-sm border-0" type="submit">{">"}</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="bg-primary text-white text-center py-3 mt-5">
            <p className="mb-0 small">© 2024 eGov Foundation. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
