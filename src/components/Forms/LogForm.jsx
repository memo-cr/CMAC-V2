import "bootstrap/dist/css/bootstrap.min.css";

import { useHistory } from "react-router-dom";
import LogItem from "../items/LogItem";

function UserItem(props) {
  const history = useHistory();
  if (props.items.length === 0) {
    history.replace("/all-user");
  }
  return (
    <div className="p-2 g-3">
      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-7 mx-auto">
            <div className="card text-bg-dark border-dark shadow border">
              <div className="card-body d-flex flex-column align-items-center">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">machine</th>
                      <th scope="col">logged in</th>
                      <th scope="col">logged out</th>
                      <th scope="col">time spent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.items.map((item) => (
                      <LogItem
                        key={item.id}
                        startT={item.startT}
                        endT={item.endT}
                        deltaH={item.deltaH}
                        deltaM={item.deltaM}
                        machineID={item.machineID}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
