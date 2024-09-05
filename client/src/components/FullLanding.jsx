import React from 'react';
import '../index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useForm, ValidationError } from '@formspree/react';

const Masthead = () => {
    return (
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Welcome To Our Industrial Machinery App!</div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#services">
                    Tell Me More
                </a>
            </div>
        </header>
    );
};

const Services = () => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">
                        Industrial machinery inventory.
                    </h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Inventory Tracking</h4>
                        <p className="text-muted">
                        Easily track and manage your machinery inventory, ensuring everything is organized and up-to-date.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3"> Maintenance Alerts</h4>
                        <p className="text-muted">
                        Automate maintenance reminders and receive alerts to keep your machines in top condition, minimizing downtime.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-cog fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3"> Reporting & Analytics</h4>
                        <p className="text-muted">
                        Get quick insights with data-driven reports to optimize machine performance and maintenance schedules.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">
                        Our areas of expertise.
                    </h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="src/assets/ind1.jpg" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Agricultural Sector</div>
                                <div className="portfolio-caption-subheading text-muted"> Replacements for agricultural machinery</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="src/assets/ind2.jpg" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Industrial sector</div>
                                <div className="portfolio-caption-subheading text-muted">Variety of machines</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src="src/assets/ind03.jpg" alt="..." />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Machinery parts </div>
                                <div className="portfolio-caption-subheading text-muted">For industrial machines</div>
                            </div>
                        </div>
                    </div>
                    {/* Add more portfolio items here */}
                </div>
            </div>
        </section>
    );
};
/*const About = () => {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image">
                            <img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." />
                        </div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                                </p>
                            </div>
                        </div>
                    </li>
                    //añadir más aquí
                </ul>
            </div>
        </section>
    );
};*/


const Team = () => {
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">We make a great team!</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="src/assets/of01.jpg" alt="..." />
                            <h4>Jose ozorio</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="src/assets/of02.jpg" alt="..." />
                            <h4>Patricia Pereira</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="src/assets/of03.jpg" alt="..." />
                            <h4>Estefano Riquelme</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



const ContactSection = () => {
    const [state, handleSubmit] = useForm("mgvwqzel", { errors: [] }); // Reemplaza con tu Formspree API key

    return (
        <section className="page-section" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6 text-center">
                        <hr className="divider" />
                        <p className="text-muted mb-5">
                        <h2 className='contact'>Contact Us</h2>
                            We are here to help you. Please fill out the form below and we will get back to you as soon as possible!
                        </p>
                    </div>
                </div>
                <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                />
                                <label htmlFor="name">Your Name</label>
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email *"
                                />
                                <label htmlFor="email">Your Email</label>
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Phone *"
                                />
                                <label htmlFor="phone">Your Phone</label>
                                <ValidationError
                                    prefix="Phone"
                                    field="phone"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message *"
                                    style={{ height: '10rem' }}
                                />
                                <label htmlFor="message">Your Message</label>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-primary btn-xl" type="submit" disabled={state.submitting}>
                                    {state.submitting ? 'Submitting...' : 'Send Message'}
                                </button>
                            </div>
                            {state.succeeded && <p className="mt-3">Thank you for your message!</p>}
                            {state.errors && state.errors.length > 0 &&(
                                <div className="text-danger mt-3">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

/*const ContactSection = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">We are here to help you.</h3>
                </div>
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name *"
                                    data-sb-validations="required"
                                />
                                <div className="invalid-feedback" data-sb-feedback="name:required">
                                    A name is required.
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email *"
                                    data-sb-validations="required,email"
                                />
                                <div className="invalid-feedback" data-sb-feedback="email:required">
                                    An email is required.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">
                                    Email is not valid.
                                </div>
                            </div>
                            <div className="form-group mb-md-0">
                                <input
                                    className="form-control"
                                    id="phone"
                                    type="tel"
                                    placeholder="Your Phone *"
                                    data-sb-validations="required"
                                />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">
                                    A phone number is required.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    placeholder="Your Message *"
                                    data-sb-validations="required"
                                ></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">
                                    A message is required.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">
                                https://startbootstrap.com/solution/contact-forms
                            </a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage">
                        <div className="text-center text-danger mb-3">Error sending message!</div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};*/


const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Proyecto 2024 para Coding Dojo LATAM </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export { Masthead, Services, Portfolio, Team, ContactSection, Footer };