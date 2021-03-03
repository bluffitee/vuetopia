module.exports = (req, res) => {
  const date = new Date().toString();
  fetch("https://programming-quotes-api.herokuapp.com/quotes")
  .then(res => res.json())
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => console.log(err));
};
