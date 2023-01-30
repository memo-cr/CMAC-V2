function machineNames() {
  const machinenames = [];
  fetch("https://testapi.robli.at/machine/all", {
    headers: { Authorization: localStorage.getItem("token") },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const key in data) {
        machinenames.push(data[key].name);
      }
    });
  return machinenames;
}

export const names = machineNames();
