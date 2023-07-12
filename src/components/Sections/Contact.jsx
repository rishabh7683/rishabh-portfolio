import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const contactData = {
  phone: ["+91 8839464025"],
  email: ["rishabhgupta.me@gmail.com"],
  location: "Delhi, India",
};

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const queryParams = {};
    Object.keys(formdata).forEach((key) => {
      if (formdata[key] !== "" && formdata[key] !== null) {
        queryParams[key] = formdata[key];
      }
    });

    try {
      const response = await axios.post(
        `https://api.managemybhoomi.com/contact/rishabh/`,
        { ...queryParams }
      );
      toast.success("I'll Contact you Shortly");
      setFormdata({
        name: "",
        email: "",
        phone: "",
        query: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred while taking your message. Please contact me at rishabhgupta.me@gmail.com to get your query resolved"
      );
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info mb-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span key={index}>{singlePhone}</span>
            ))}
          </div>
        </div>
        <div className="contact-info mb-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email address</h5>
            {contactData.email.map((singleEmail, index) => (
              <span key={index}>{singleEmail}</span>
            ))}
          </div>
        </div>
        <div className="contact-info">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Location</h5>
            <span>{contactData.location}</span>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.name}
                  required
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.email}
                  required
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Contact Number"
                  onChange={handleChange}
                  value={formdata.phone}
                  required
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  name="query"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.query}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
