import { useState } from "react";
import axios from "axios";

const SendNotification = () => {
  const [form, setForm] = useState({
    userId: "",
    type: "EMAIL",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    try {
      await axios.post("http://localhost:8080/api/notifications", form);
      alert("Notification sent!");
    } catch (error) {
      console.error(error);
      alert("Failed to send notification.");
    }
  };

  return (
    <div>
      <h2>Send Notification</h2>
      <input name="userId" placeholder="User ID" onChange={handleChange} />
      <select name="type" onChange={handleChange}>
        <option value="EMAIL">EMAIL</option>
        <option value="SMS">SMS</option>
        <option value="IN_APP">IN_APP</option>
      </select>
      <textarea name="message" placeholder="Message" onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendNotification;
