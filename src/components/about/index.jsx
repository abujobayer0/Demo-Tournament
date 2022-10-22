import React from "react";

const About = () => {
  return (
    <section className="container">
      <div>
        <h1 className="whoarewe">
          Who Are We? <br />
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </h1>
        <div className="row">
          <div className="col col-12 col-lg-4">
            <div className="card">
              <img
                src="static/img/imagecompressor/new-folder/1666010809146d-min.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Abu Talha</h5>
                <small className="text-muted">Author</small>
                <p className="card-text">
                  জামুন্না কতৃক আয়োজিত ফ্রি-ফায়ার টুর্ণামেন্ট অনুষ্ঠিত হতে
                  যাচ্ছে আকর্ষণীয় পুরস্কার এর সাথে। আগ্রহীরা স্কোয়াড নিয়ে রেডি
                  হয়ে যাও।
                </p>
              </div>
              {/* <!-- <div  className="card-footer  $gray-200,"> --> */}
              <a
                href="https://www.facebook.com/abutalhazubayermunna"
                className="btn btn-primary bbtt"
              >
                Facebook
              </a>
              {/* <!-- </div> --> */}
            </div>
          </div>
          <div className="col col-12 col-lg-4">
            <div className="card">
              <img
                src="static/img/imagecompressor/new-folder/1666010809146s-min.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">MD Rasel Hasan</h5>
                <small className="text-muted">Partner</small>
                <p className="card-text">
                  যারা খেলতে ইচ্ছুক তারা এই টুর্নামেন্টে অংশগ্রহন করতে পারো
                  ।সবাই সুন্দর ভাবে খেলার চেষ্টা করবে এবং আমাদেরকে সুষ্ঠুভাবে
                  খেলা পরিচালনা করার সুযোগ করে দেবে।
                </p>
              </div>
              {/* <!-- <div className="card-footer"> --> */}
              <a
                href="https://www.facebook.com/mdraselhasan.hemon"
                className="btn btn-primary bbtt"
              >
                Facebook
              </a>
              {/* <!-- </div> --> */}
            </div>
          </div>
          <div className="col col-12 col-lg-4">
            <div className="card">
              <img
                src="static/img/imagecompressor/new-folder/1666010809146-min.png"
                alt=""
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Rijwan Jannat</h5>
                <small className="text-muted">Partner</small>
                <p className="card-text">
                  ছোলপোল তোমরা নিঃসন্দেহে এই টুর্নামেন্টে অংশগ্রহন করতে পারো।
                  হামরা এলাকার ছোল,সবাই সবার সাথে বিনয়ের সাথে ব্যবহার করবে।
                </p>
              </div>
              {/* <!-- <div className="card-footer"> --> */}
              <a
                href="https://www.facebook.com/profile.php?id=100086218014706"
                className="btn btn-primary bbtt"
              >
                Facebook
              </a>
              {/* <!-- </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
