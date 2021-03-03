module.exports = (req, res) => {
  let data;
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => data = json)
  res.status(200).send(data);
};
