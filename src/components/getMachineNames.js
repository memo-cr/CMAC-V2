export function machineNames() {
  const machinenames = [];
  fetch("https://testapi.robli.at/machine/all", {
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const key in data) {
        machinenames.push([data[key].name, data[key]._id]);
      }
    });
  return machinenames;
}

export let names = machineNames();
