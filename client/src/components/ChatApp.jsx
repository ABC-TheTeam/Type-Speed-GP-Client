import { socket } from "../utils/socket";
import { useEffect, useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([
    {
        id: new Date().getTime(),
        sender: "Admin",
        message: "Welcome to the chat app"
    }
  ]);
  const [message, setMessage] = useState("");
  const email = localStorage.email;
  const username = email.split("@")[0];

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("send-message", {
        time: new Date().getTime(),
        sender: username,
        message
    });
    setMessage("");
  };
  
  useEffect(() => {
    if (socket) {
      socket.emit("set-user", username);

      socket.on("new-message", (payload) => {
        setMessages((prev) => [...prev, payload]);
      });
    }
  }, [socket]);
  return (
    <>
      <div className="d-flex flex-column gap-3">
        <div className="border">
          {messages.map((msg) => (
            <div className="container">
              <div className="d-flex justify-content-start">
                <span key={msg.id}>
                  <strong> {msg.sender} </strong> : {msg.message}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <form className="input-group d-flex mb-3" onSubmit={sendMessage}>
            <input
              type="text"
              className="form-control"
              placeholder="Type your message here..."
              aria-label="Type your message here..."
              aria-describedby="button-addon2"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button
              className="btn btn-success"
              type="submit"
              id="button-addon2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
