// Add your code here
function submitData(name, email) {
  const user = {
    name: name,
    email: email,
  };

  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };

  return fetch("http://localhost:3000/users", settings)
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML = data.id;
    })
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
}
