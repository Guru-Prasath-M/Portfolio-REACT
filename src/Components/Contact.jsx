import React from "react";

const Contact = () => {
  return (
    <section className="contact py-5">
      <div className="container">
        {/* Section Title */}
        <h2
          className="text-center fw-bold text-primary mb-5"
          style={{ fontSize: "32px" , fontWeight:'bold' }}
        >
          Contact
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              {/* Name */}
              <div className="form-group mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control p-3 rounded"
                />
              </div>

              {/* Email */}
              <div className="form-group mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control p-3 rounded"
                />
              </div>

              {/* Message */}
              <div className="form-group mb-4">
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="form-control p-3 rounded"
                ></textarea>
              </div>

              {/* Button aligned right */}
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;