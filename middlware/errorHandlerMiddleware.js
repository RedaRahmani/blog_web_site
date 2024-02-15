// middleware/errorHandlerMiddleware.js
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandlerMiddleware;
