import "./styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1> Contact Us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows={4} />
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
