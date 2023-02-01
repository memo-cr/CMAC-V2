import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "../cards/UserCard";

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
        />
      ))}
    </ul>
  );
}

export default UserItem;
