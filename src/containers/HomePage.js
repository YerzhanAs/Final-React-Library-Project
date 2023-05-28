import React, { Component } from 'react';
import './css/HomePage.css'; // Import custom CSS for styling
import companyPhoto from '../images/logo.png';


class HomePage extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="about-company">
                    <div className="about-text">
                        <h2>About the Company</h2>
                        <p>
                            eBook is a premier online bookstore committed to providing book
                            lovers with an extensive collection of titles from various genres.
                            Our mission is to promote the joy of reading by offering a seamless
                            shopping experience and a diverse range of books that cater to all
                            tastes and interests.
                        </p>
                        <p>
                            At eBook, we believe in the power of books to educate, inspire,
                            and entertain. Whether you're seeking a gripping novel, an
                            insightful non-fiction book, or educational resources, our
                            carefully curated selection ensures that you'll find something to
                            captivate your mind and nourish your soul.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src={companyPhoto} alt="Company" />
                    </div>
                </div>
                <h2>Our Advantages</h2>
                <div className="advantages">
                    <div className="advantage-card">
                        <h3>Wide Selection</h3>
                        <p>
                            Choose from a vast collection of books spanning various genres.
                        </p>
                    </div>
                    <div className="advantage-card">
                        <h3>Convenience</h3>
                        <p>Shop for books online from the comfort of your home.</p>
                    </div>
                    <div className="advantage-card">
                        <h3>Quality Service</h3>
                        <p>Experience exceptional customer service and support.</p>
                    </div>
                </div>
                <h2>CONTACT US</h2>
                <div className="contact-section">
                    <div className="contact-info">
                        <h2>Contact Form</h2>
                        <p>
                            We would love to hear from you! If you have any questions or inquiries, please feel free to reach out to us using the contact details below.
                        </p>
                        <p>
                            Email: info@eBook.com<br />
                            Phone: +707 185 88 35
                        </p>
                    </div>
                    <div className="contact-form">
                        <h2>Get in Touch</h2>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5"></textarea>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
