import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";

let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [location.search]);

  return <div>Hello from chat</div>;
}

export default Chat;
