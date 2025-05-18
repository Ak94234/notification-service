import { useState } from "react";
import axios from "axios";

const UserNotifications = () => {
  const [userId, setUserId] = useState("");
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/users/${userId}/notifications`
      );
      setNotifications(res.data);
    } catch (error) {
      console.error(error);
      alert("Error fetching notifications");
    }
  };

  return (
    <div>
      <h2>User Notifications</h2>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={fetchNotifications}>Fetch</button>

      <ul>
        {notifications.map((note) => (
          <li key={note.id}>
            <strong>{note.type}</strong>: {note.message}{" "}
            <em>({note.createdAt})</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserNotifications;
