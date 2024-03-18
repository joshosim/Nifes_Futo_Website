import React, { useState } from "react";
import GodlyImage from "../assets/godly.jpg";
import { useInfoContext } from "../hook/useInfoContext";
import Snackbar from "../components/Snackbar";

const Contact = () => {
  const { dispatch } = useInfoContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };
  const handleShowSnackbar = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = { firstName, lastName, email, phone };
    const response = await fetch("http://localhost:4000/info/create", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      alert(json.error.message);
    }
    if (response.ok) {
      alert("Your response has been recieved!");
      dispatch({ type: "CREATE_INFO", payload: json });
    }
  };

  return (
    <div>
      <button onClick={() => handleShowSnackbar("Snackbar message here")}>
        Show Snackbar
      </button>
      {showSnackbar && (
        <Snackbar message={snackbarMessage} onClose={handleSnackbarClose} />
      )}

      <h1 className="font-bold text-5xl mb-5">Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={GodlyImage}
            alt="/"
            className="object-cover object-center h-[600px] rounded-t-md rounded-r-md rounded-b-md rounded-br-md"
          />
        </div>
        <div>
          <p className="mb-5">We can't wait to know and meet you!</p>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              value={firstName}
              placeholder="First name"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold mb-3"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              type="text"
              value={lastName}
              placeholder="Last name"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold mb-3"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold  mb-3"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              value={phone}
              placeholder="Phone"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold  mb-3"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <button className="bg-[#80F] py-2 px-3 rounded-md text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
