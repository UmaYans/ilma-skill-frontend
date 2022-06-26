import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import socket from "../../../socket";
import ACTIONS from "../../../socket/actions";
import { v4 } from "uuid";

const VideoChat = ({ user, token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rootNode = useRef();

  const [rooms, updateRooms] = useState([]);

  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ rooms = [] } = {}) => {
      if (rootNode.current) {
        updateRooms(rooms);
      }
    });  })

    console.log(rooms);
    
  const renderSwitch = () => {
    if (user.role !== "Teacher" && rooms.length === 0) {
      return <h2>Нет начатых вебинаров</h2>
    }


    switch (user?.role) {
      case "User":
        return <h2>Писоедениться к вебинару</h2>;
      case "Teacher":
        return <h2>Начатните вебинар</h2>;

      default:
        return <h2>Нет начатых вебинаров</h2>;
    }
  };
  return (
    <div>
      {!token ? (
        <div>
          Вы не авторизированы. <Link to="../sign-in">Войти?</Link>
        </div>
      ) : (
        <div ref={rootNode}>
          {renderSwitch()}

          <ul>
            {rooms.map((roomID) => (
              <li key={roomID}>
                <span>{roomID} вебинар ведется</span>
                <button
                  onClick={() => {
                    navigate(`../course/room/${roomID}`);
                  }}
                >
                  Присоединиться
                </button>
              </li>
            ))}
          </ul>

          {user.role === "Teacher" && (
            <button
              onClick={() => {
                navigate(`../course/room/${v4()}`);
              }}
            >
              Начать
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoChat;
