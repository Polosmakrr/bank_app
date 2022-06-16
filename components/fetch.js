export const getData = (setState) => {
  const headers = new Headers({
    Type: "API Key",
    "x-api-key": "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
  });

  fetch("https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data", {
    method: "GET",
    headers,
  })
    .then((resp) => resp.json())
    .then((data) => setState(data))
    .catch((error) => console.log("Error:", error));
};
