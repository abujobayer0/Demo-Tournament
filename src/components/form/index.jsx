import React, { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";

const Form = () => {
  const { writeUserData, usersData } = useAuth();
  const defaultFormData = {
    firstPlayerUid: "",
    secondPlayerUid: "",
    thirdPlayerUid: "",
    fourthPlayerUid: "",
    fivePlayerUid: "",
    sixPlayerUid: "",
    gmail: "",
    contactNumber: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    const {
      firstPlayerUid,
      secondPlayerUid,
      thirdPlayerUid,
      fourthPlayerUid,
      fivePlayerUid,
      sixPlayerUid,
      gmail,
      contactNumber,
    } = formData;

    const mailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      firstPlayerUid.length > 0 &&
      secondPlayerUid.length > 0 &&
      thirdPlayerUid.length > 0 &&
      fourthPlayerUid.length > 0 &&
      fivePlayerUid.length > 0 &&
      sixPlayerUid.length > 0 &&
      gmail.length > 0 &&
      contactNumber.length > 0
    ) {
      if (mailFormat.test(gmail)) {
        writeUserData(formData, () => {
          toast.success("Successfully created user:)");
        });
      } else {
        alert("Chudir vai abar vul korsu thik kore gmail lek bal!");
      }
    } else {
      alert("Ki re chudir vai form tao ki thik moto puron korbar paris na!");
    }
  };

  return (
    <React.Fragment>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
            value={formData.fourthPlayerUid}
            name="fourthPlayerUid"
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
        <button type="submit" id="formBtn" onClick={handleFormSubmit}>
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
      {/* {usersData.length > 0 && usersData.map((user) => <h1>{user.gmail}</h1>)} */}
    </React.Fragment>
  );
};

export default Form;
