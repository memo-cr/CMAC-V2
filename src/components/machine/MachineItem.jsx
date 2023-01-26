import "bootstrap/dist/css/bootstrap.min.css";

import MachineCard from "./MachineCard";

function MachineItem(props) {
  return (
    <div>
      <ul className="d-flex flex-wrap align-items-center">
        {props.items.map((item) => (
          <MachineCard
            key={item.id}
            del={item.del}
            name={item.name}
            idusr={item.idusr}
          />
        ))}
      </ul>
    </div>
  );
}

export default MachineItem;
