import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Box.css";
const ariaLabel = { "aria-label": "description" };

export default function Inputs() {
  const { handleSubmit } = useForm();

  const [formValues, setFormValues] = useState({
    phoneNo: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);

    setFormValues({ ...formValues, [name]: value });
  };

  //******** SEND SMS ********//
  const sendSMS = (data) => {
    let formdata = new FormData();

    formdata.append("token", "4gTPGlYdVfKm2YlZNUOHTSg8HY5xIwfx\t");
    formdata.append("phone", formValues?.phoneNo);
    formdata.append("msg", formValues?.message);

    let requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.geezsms.com/api/v1/sms/send", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      console.log(formValues);
  };

  //******** SEND SMS ********//

  return (
    <form onSubmit={handleSubmit(sendSMS)}>
      <Box
        // component="form"
        sx={{
          "& > :not(style)": { m: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <Input
          className="full-length"
          type="number"
          placeholder="Phone Number"
          inputProps={ariaLabel}
          required
          name="phoneNo"
          value={formValues?.phoneNo}
          
          onChange={handleChange}
        />
        <Input
          className="full-length"
          placeholder="Subject"
          inputProps={ariaLabel}
          required
          name="subject"
          value={formValues?.subject}
          onChange={handleChange}
        />
        <Input
          className="full-length"
          aria-label="Demo input"
          multiline
          placeholder="Type something…"
          required
          name="message"
          value={formValues?.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </form>
  );
}
