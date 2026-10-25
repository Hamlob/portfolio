import { SectionPrompt } from '../components/Terminal'

export default function Contact() {
    return (
        <section className="section">
            <SectionPrompt path="~/contact" command="mail -s" title="Get In Touch" subtitle="Drop a message — it lands straight in my inbox." />
            <div className="contact-form">
                <form action="https://formspree.io/f/xbjnalbk" method="POST">
                    <div className="form-row">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" className="full" />
                    <textarea name="message" placeholder="Message" rows="7" required />
                    <button type="submit" className="btn-primary">$ send</button>
                </form>
            </div>
        </section>
    )
}
