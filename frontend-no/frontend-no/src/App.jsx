import "./App.css";
import SendNotification from "./components/SendNotification";
import UserNotifications from "./components/UserNotifications";

function App() {
  return (
    <div>
      <h1>Notification Service</h1>
      <SendNotification />
      <hr />
      <UserNotifications />
    </div>
  );
}

export default App;
