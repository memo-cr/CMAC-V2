import "bootstrap/dist/css/bootstrap.min.css";

import UserCard from "../cards/UserCard";

import { machineNames } from "../getMachineNames.js";

function UserItem(props) {
  let name = [];
  machineNames().then((value) => {
    name.splice(0, name.length, ...value);
  });
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
          machineName={name}
        />
      ))}
    </ul>
  );
}

export default UserItem;
