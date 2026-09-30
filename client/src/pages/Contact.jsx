export default function Contact() {
    return (
        <article>
            <div className="hero-section">
                <h1>Contact Us</h1>
            </div>
            <div className="content">
                <h2>Email</h2>
                <a href="mailto:coastercatsua@gmail.com">coastercatsua@gmail.com</a>
            </div>
            <form  action="https://api.web3forms.com/submit" method="POST">
                <div className="column">
                    <h2>Questions?</h2>
                </div>
                <div className="column">
                    <input type="hidden" name="access_key" value="CREATE_ACCESS_KEY_AT_WEB3_FORMS" />
                    <input type="hidden" name="subject" value="New inquiry from your website" />
                    <input type="hidden" name="from_name" value="TPEG Contact Form" />
                    <label>
                        Name
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Ask away
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </article>
    )
}