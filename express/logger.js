const logger = (req, res, next) => {
  //Method = GET OR POST
  const method = req.method;
  // URL : / or /about
  const url = req.url;
  // Date Year
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

module.exports = logger