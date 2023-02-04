import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "../cards/UserCard";
import Form from "react-bootstrap/Form";

import { useState, useEffect } from "react";

function UserItem(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = props.items.filter((person) =>
      (person.name + " " + person.surname).toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div style={{ paddingTop: "10px" }}>
      <Form.Control
        style={{ width: "70vw", marginLeft: "30px" }}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      ></Form.Control>
      <ul className="d-flex flex-wrap align-items-center">
        {searchResults.map((item) => (
          <UserCard
            key={item.id}
            del={item._id}
            name={item.name}
            surname={item.surname}
            email={item.email}
            allow={item.allow}
            machines={props.machines}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserItem;
