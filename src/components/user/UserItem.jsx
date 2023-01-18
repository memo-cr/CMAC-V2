import "bootstrap/dist/css/bootstrap.min.css";

import UserCard from "./UserCard";

function UserItem(props) {
  return (
    <ul className="d-flex flex-wrap align-items-center">
      {console.log(props.items)}
      {props.items.map((item) => (
        <UserCard
          key={item.id}
          name={item.name}
          surname={item.surname}
          email={item.email}
          allow={item.allow}
        />
      ))}
    </ul>
  );
}

export default UserItem;
