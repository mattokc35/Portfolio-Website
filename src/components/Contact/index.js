import { useRef } from "react";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const refForm = useRef();

  //send email
  const sendEmail = (e) => {
    e.preventDefault(); //stop default submitting

    emailjs
      .sendForm(
        "service-id",
        "template-id",
        refForm.current,
        "public-key"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
            I am interested in new (full-time) opportunities! Don't hesitate to
            contact me below:
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="icons">
          <p>LinkedIn:</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matthew-chen-54b972148/"
          >
            <FontAwesomeIcon
              className="fa-8x"
              icon={faLinkedin}
              color="#ADD8E6"
            />
          </a>
          <p>Github:</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mattokc35"
          >
            <FontAwesomeIcon
              className="fa-8x"
              icon={faGithub}
              color="#ADD8E6"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
