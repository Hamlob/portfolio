export default function Contact() {
    return (
        <section className="section">
            <div className="section-header">
                <h2>Get In Touch</h2>
            </div>
            <div className="contact-form">
                <form action="https://formspree.io/f/xbjnalbk" method="POST">
                    <div className="form-row">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" style={{ width: '100%', marginBottom: '1rem' }} />
                    <textarea name="message" placeholder="Message" rows="7" required />
                    <button type="submit" className="btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}
