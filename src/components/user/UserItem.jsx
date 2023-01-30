import "bootstrap/dist/css/bootstrap.min.css";

import UserCard from "./UserCard";

import { names } from "../getMachineNames.js";

function UserItem(props) {
  return (
    <ul className="d-flex flex-wrap align-items-center">
      {props.items.map((item) => (
        <UserCard
          key={item.id}
          del={item._id}
          name={item.name}
          surname={item.surname}
          email={item.email}
          allow={item.allow}
          machineNames={names}
        />
      ))}
    </ul>
  );
}

export default UserItem;
