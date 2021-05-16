import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  // const connectToRoom = () => {
  //   socket.emit("join_room", room);
  // };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            type="text"
            className="joinInput mt-20"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            className="joinInput mt-20"
            placeholder="Room"
            onChange={(event) => setRoom(event.target.value)}
          />
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={"button mt-20"} type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Join;
