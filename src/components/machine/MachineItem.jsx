import "bootstrap/dist/css/bootstrap.min.css";

import MachineCard from "./MachineCard";

function MachineItem(props) {
  return (
    <div>
      {" "}
      <ul className="d-flex flex-wrap align-items-center">
        {console.log(props.items)}
        {props.items.map((item) => (
          <MachineCard key={item.id} name={item.name} idusr={item.idusr} />
        ))}
      </ul>
    </div>
  );
}

export default MachineItem;
