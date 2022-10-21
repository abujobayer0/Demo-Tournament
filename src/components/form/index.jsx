import React, { useState } from "react";
import useAuth from "../../hook/useAuth";

const Form = () => {
  const { writeUserData } = useAuth();
  console.log(writeUserData);

  const [formData, setFormData] = useState({
    firstName: "",
    squadName: "",
    firstPlayerName: "",
    secondPlayerName: "",
    thirdPlayerName: "",
    fourPlayerName: "",
    fivePlayerName: "",
    sixPlayerName: "",
    firstPlayerUid: "",
    secondPlayerUid: "",
    thirdPlayerUid: "",
    fourPlayerUid: "",
    fivePlayerUid: "",
    sixPlayerUid: "",
    gmail: "",
    contactNumber: "",
  });

  console.log(formData);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 style={{ textAlign: "center" }}>Name</h2>
      <div id="important" className="part-form">
        <label htmlFor="fname">আপনার নাম?</label>
        <br />
        <input
          onChange={handleInput}
          name="firstName"
          value={formData.firstName}
          className="form-control"
          type="text"
          id="fname"
          placeholder="আপনার নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="sname">আপনার স্কোয়াড এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.squadName}
          name="squadName"
          className="form-control"
          type="text"
          id="sname"
          placeholder="আপনার স্কোয়াড এর নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="FristPlayer">প্রথম প্লেয়ার এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.firstPlayerName}
          name="firstPlayerName"
          className="form-control"
          type="text"
          id="FristPlayer"
          placeholder="প্রথম প্লেয়ার এর নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="SecondPlayer">দ্বিতীয় প্লেয়ার এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.secondPlayerName}
          name="secondPlayerName"
          className="form-control"
          type="text"
          id="SecondPlayer"
          placeholder="দ্বিতীয় প্লেয়ার এর নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="ThirdPlayer">তৃতীয় প্লেয়ার এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.thirdPlayerName}
          name="thirdPlayerName"
          className="form-control"
          type="text"
          id="ThirdPlayer"
          placeholder="তৃতীয় প্লেয়ার এর নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="FourthPlayer">চতুর্থ প্লেয়ার এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.fourPlayerName}
          name="fourPlayerName"
          className="form-control"
          type="text"
          id="FourthPlayer"
          placeholder="চতুর্থ প্লেয়ার এর নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="five-player">পঞ্চম প্লেয়ার এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.fivePlayerName}
          name="fivePlayerName"
          className="form-control"
          type="text"
          id="five-player"
          placeholder="পঞ্চম প্লেয়ার এর নাম?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="six-player">ষষ্ঠ প্লেয়ার এর নাম?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.sixPlayerName}
          name="sixPlayerName"
          className="form-control"
          type="text"
          id="six-player"
          placeholder="ষষ্ঠ প্লেয়ার এর নাম?"
        />
      </div>
      <h2 style={{ textAlign: "center" }}>UID</h2>
      <div className="part-form">
        <label htmlFor="FristUID">প্রথম প্লেয়ার এর UID?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.firstPlayerUid}
          name="firstPlayerUid"
          className="form-control"
          type="number"
          id="FristUID"
          placeholder="প্রথম প্লেয়ার এর UID?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="SecondUID">দ্বিতীয় প্লেয়ার এর UID?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.secondPlayerUid}
          name="secondPlayerUid"
          className="form-control"
          type="number"
          id="SecondUID"
          placeholder="দ্বিতীয় প্লেয়ার এর UID?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="ThirdUID">তৃতীয় প্লেয়ার এর UID?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.thirdPlayerUid}
          name="thirdPlayerUid"
          className="form-control"
          type="number"
          id="ThirdUID"
          placeholder="তৃতীয় প্লেয়ার এর UID?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="FourthUID">চতুর্থ প্লেয়ার এর UID?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.fourPlayerUid}
          name="fourPlayerUid"
          className="form-control"
          type="number"
          id="FourthUID"
          placeholder="চতুর্থ প্লেয়ার এর UID?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="five-uid">পঞ্চম প্লেয়ার এর UID?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.fivePlayerUid}
          name="fivePlayerUid"
          className="form-control"
          type="number"
          id="five-uid"
          placeholder="পঞ্চম প্লেয়ার এর UID?"
        />
      </div>
      <div className="part-form">
        <label htmlFor="six-uid"> ষষ্ঠ প্লেয়ার এর UID?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.sixPlayerUid}
          name="sixPlayerUid"
          className="form-control"
          type="number"
          id="six-uid"
          placeholder="ষষ্ঠ প্লেয়ার এর UID?"
        />
      </div>
      <h2 style={{ textAlign: "center" }}>Gmail</h2>
      <div className="part-form">
        <label htmlFor="gmail">আপনার Gmail?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.gmail}
          name="gmail"
          className="form-control"
          type="email"
          id="gmail"
          placeholder="আপনার Gmail?"
        />
      </div>
      <h2 style={{ textAlign: "center" }}>Contact Number</h2>
      <div className="part-form">
        <label htmlFor="contactNumber">আপনার যোগাযোগ নম্বর?</label>
        <br />
        <input
          onChange={handleInput}
          value={formData.contactNumber}
          name="contactNumber"
          className="form-control"
          type="number"
          id="contactNumber"
          placeholder="আপনার যোগাযোগ নম্বর?"
        />
      </div>
      <h2 style={{ textAlign: "center" }}>Image</h2>
      <div className="part-form">
        <label htmlFor="imageOne">
          প্রথম প্লেয়ারের পরিষ্কার ছবি দিন ব্যানার এর জন্য
        </label>
        <br />
        <input className="form-control" id="imageOne" type="file" />
      </div>
      <div>
        <label htmlFor="imageTwo">
          দ্বিতীয় প্লেয়ারের পরিষ্কার ছবি দিন ব্যানার এর জন্য
        </label>
        <br />
        <input className="form-control" id="imageTwo" type="file" />
      </div>
      <div className="part-form">
        <label htmlFor="imageThree">
          তৃতীয় প্লেয়ারের পরিষ্কার ছবি দিন ব্যানার এর জন্য
        </label>
        <br />
        <input className="form-control" id="imageThree" type="file" />
      </div>
      <div className="part-form">
        <label htmlFor="imageFour">
          চতুর্থ প্লেয়ারের পরিষ্কার ছবি দিন ব্যানার এর জন্য
        </label>
        <br />
        <input className="form-control" id="imageFour" type="file" />
      </div>
      <button
        type="submit"
        id="formBtn"
        onClick={() => {
          writeUserData("Sohel Rana", "sohel.rana.coder@gmail.com");
        }}
      >
        জমা দিন
        <i
          style={{
            color: "#101820ff",
            backgroundColor: "transparent",
            fontSize: "1rem",
          }}
          className="fa-brands fa-dropbox"
        ></i>
      </button>
    </form>
  );
};

export default Form;
