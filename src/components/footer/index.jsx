import React from "react";

const Footer = () => {
  return (
    <section className="container">
      <div>
        <p>
          <button
            id="forCollapse"
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            Contact Us for Participate
            <br />
            <span>
              Click Here <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </p>
        <div style={{ minHeight: 120 }}>
          <div className="collapse collapse-vertical" id="collapseWidthExample">
            <div
              id="forID"
              className="card card-body"
              style={{ width: "100%", height: "auto" }}
            >
              <p style={{ fontSize: "1.1rem", paddingLeft: 15 }}>
                Gmail : munnaofficial632@gmail.com
              </p>
              <p style={{ fontSize: "1.1rem", paddingLeft: 15 }}>
                Phone : 01303463436
              </p>
              <p style={{ fontSize: "1.1rem", paddingLeft: 15 }}>
                What's App : 01761777661
              </p>
              <p style={{ fontSize: "1.1rem", paddingLeft: 15 }}>
                Nagad (personal) : 01717741419
              </p>
            </div>
          </div>
        </div>
        <p
          style={{
            color: "rgb(216, 216, 216)",
            paddingTop: 10,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          CopyRight Abu Talha ©️
        </p>
      </div>
    </section>
  );
};

export default Footer;
