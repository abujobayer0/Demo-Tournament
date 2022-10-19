import React from "react";
import { Form } from "../index";

const Thanks = () => {
  return (
    <React.Fragment>
      <h2 id="special-thanks">Special Thanks...</h2>
      <section className="container">
        <div className="row">
          <div className="col col-12 col-lg-6">
            <div className="row" style={{ marginTop: 50 }}>
              <div className="col col-12 col-md-6 col-lg-12">
                <div className="card">
                  <img
                    src="static/img/1666103552486fgjhjf-min.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="reazul">Reazul Hasan</p>
                    <p className="card-text">সহযোগিতায়</p>
                    <a
                      href="https://www.facebook.com/mdraselhasan.hemon"
                      className="btn btn-primary bbtt"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-12">
                <div className="card">
                  <img
                    src="static/img/IMG_3602new-min.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="reazul">Thohidul Islam</p>
                    <p className="card-text">সহযোগিতায়</p>
                    <a
                      href="https://www.facebook.com/tohidull.islam.777"
                      className="btn btn-primary bbtt"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-12">
                <div className="card">
                  <img
                    src="static/img/360_F_494653408_L5XoC3iFVyKkVz5K7e9kbmKrv0iDMaNt.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="reazul">Our Tournament Layout</p>
                    <p className="card-text">
                      ৮ টি স্কোয়াড নিয়ে খেলা অনুষ্ঠিত হবে এই নিয়মে।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-6">
            <div className="user-data">
              <h2
                style={{
                  fontSize: 30,
                  marginBottom: 25,
                  textDecoration: "underline",
                }}
              >
                আপনার সঠিক তথ্য দিন এখানে
              </h2>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Thanks;
