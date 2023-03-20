import classes from "./Contact.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Contact() {
  return (
    <>
      <section className={classes["main-container"]}>
        <h2>CONTACT</h2>
        <div className={classes["contain-all"]}>
          <div className={classes["sub-container1"]}>
            <div className={classes["container-1"]}>
              <div>
                <CallIcon className={classes.icons} />
                <input
                  type="number"
                  className={classes["container-1-input-1"]}
                />
              </div>
              <div>
                <EmailIcon className={classes.icons} />
                <input type="text" className={classes["container-1-input-2"]} />
              </div>
              <div>
                <LocationOnIcon className={classes.icons} />
                <input type="text" className={classes["container-1-input-3"]} />
              </div>
              <div>
                <FacebookIcon className={classes.icons} />
                <input type="text" className={classes["container-1-input-4"]} />
              </div>
              <div>
                <YouTubeIcon className={classes.icons} />
                <input type="text" className={classes["container-1-input-5"]} />
              </div>
            </div>
          </div>
          <div className={classes["sub-container2"]}>
            <div className={classes["container-2"]}>
              <input
                type="text"
                placeholder="Name"
                className={classes["container-2-input-1"]}
              />
              <input
                type="text"
                placeholder="Email"
                className={classes["container-2-input-2"]}
              />
              <textarea
                className={classes["container-2-input-3"]}
                rows="4"
                cols="50"
                placeholder="Message"
              />
              <button>Send</button>
            </div>
          </div>
          <div className={classes["container-3"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15593.128211165898!2d76.63850524556882!3d12.296782746926967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678360193811!5m2!1sen!2sin"
              // width="400"
              // height="300"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={classes.map}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
