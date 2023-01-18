import { useHistory } from "react-router-dom";

function AddUser() {
  const history = useHistory();

  function addUserHandler(meetup) {
    fetch(
      "https://react-getting-started-bf81d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default AddUser;
