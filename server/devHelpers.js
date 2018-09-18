const devHelpers = {
  requestLogger : (req, res, next) => {
    console.log(`received request : ${req.method} - on ${req.url}`)
    next();
  }
}

module.exports = devHelpers;
