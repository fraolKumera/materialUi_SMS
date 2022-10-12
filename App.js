import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //******** SEND OTP ********//
  const sendOtp = (data) => {
    let formdata = new FormData();
    formdata.append("token", "S11fyZTCyfQLFWp0bcOy0w4e1KOePWkC\t");
    formdata.append("phone", "251910990147");

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.geezsms.com/api/v1/sms/otp", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //******** SEND OTP ********//

  //******** GET BALANCE ********//
  const getBalance = (data) => {
    let formdata = new FormData();

    formdata.append("token", "S11fyZTCyfQLFWp0bcOy0w4e1KOePWkC\t");
    formdata.append("phone", "251910990147");

    let requestOptions = {
      method: "GET",
      // body: formdata,  // the doc included the body part which shouldn't
      redirect: "follow",
    };

    fetch(
      "https://api.geezsms.com/api/v1/balance?token=S11fyZTCyfQLFWp0bcOy0w4e1KOePWkC\t",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //******** GET BALANCE ********//

  //******** SEND SMS ********//
  const sendSMS = (data) => {
    let formdata = new FormData();

    formdata.append("token", "S11fyZTCyfQLFWp0bcOy0w4e1KOePWkC\t");
    formdata.append("phone", "251910990147");
    formdata.append("msg", "This is sample sms");

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.geezsms.com/api/v1/sms/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //******** SEND SMS ********//

  //******** SEND LITE BULK ********//
  const sendLiteBulk = (data) => {
    let formdata = new FormData();

    formdata.append("token", "S11fyZTCyfQLFWp0bcOy0w4e1KOePWkC\t");
    formdata.append("phone", ["251910990147"]);
    formdata.append("msg", "This is sample sms for lite bulk");
    formdata.append("groupid", "bass");

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.geezsms.com/api/v1/sms/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //******** SEND BULK ********//

  const sendBulk = (data) => {
    let formdata = new FormData();

    formdata.append("token", "S11fyZTCyfQLFWp0bcOy0w4e1KOePWkC\t");
    formdata.append("phone", ["251910990147"]);
    formdata.append("msg", "This is sample sms for bulk");

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.geezsms.com/api/v1/sms/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //******** SEND BULK ********//

  return (
    <div className="App">
      <form onSubmit={handleSubmit(getBalance)}>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>Firstname is required</span>}
        <input {...register("email")} />
        {errors.email && <span>Email is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
