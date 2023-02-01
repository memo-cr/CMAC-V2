import { createContext, useState } from "react";

const MachineContext = createContext({
  machinenames: [],
  addMachine: (add) => {},
  getMachineName: (id) => {},
  getNameID: (id) => {},
  removeMachine: (id) => {},
});

export function MachineContextProvider(props) {
  const [machineName, setMachineName] = useState([]);

  function addMachineHandler(add) {
    setMachineName((prevMachineNames) => {
      return prevMachineNames.concat(add);
    });
  }

  function removeMachineHandler(id) {
    setMachineName((prevMachineNames) => {
      return prevMachineNames.filter((machine) => machine.id !== id);
    });
  }

  function getNameHandler(id) {
    return machineName[id][0];
  }

  function getNameIDHandler(id) {
    for (let i in machineName) {
      if (machineName[i][1] === id) {
        return machineName[i][1];
      }
    }
  }

  const context = {
    machinenames: machineName,
    addMachine: addMachineHandler,
    removeMachine: removeMachineHandler,
    getMachineName: getNameHandler,
    getNameID: getNameIDHandler,
  };

  return (
    <MachineContext.Provider value={context}>
      {props.children}
    </MachineContext.Provider>
  );
}

export default MachineContext;
