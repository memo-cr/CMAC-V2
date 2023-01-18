import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UserItem from "../../components/user/UserItem";

const DUMMY_DATA = [
  {
    id: "0",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2", "3"],
  },
  {
    id: "1",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "2",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "3",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "4",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "5",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "6",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "7",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "8",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "9",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "10",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "11",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "12",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "13",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "14",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "15",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "16",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "17",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "18",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "19",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "20",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
  {
    id: "21",
    name: "Mehmet",
    surname: "Caran",
    email: "mehmet@gmail.com",
    allow: ["0", "1", "2"],
  },
];

function AllUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-bf81d-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];
        for (const key in data) {
          const user = {
            id: key,
            ...data[key],
          };

          users.push(user);
        }
        setIsLoading(false);
        setLoadedUsers(users);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section style={{ marginLeft: "20vw" }}>
      {console.log(DUMMY_DATA)}
      <UserItem items={DUMMY_DATA} />
    </section>
  );
}

export default AllUsers;
