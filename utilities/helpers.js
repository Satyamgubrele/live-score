// function to send error
module.exports.sendError = (res, message, status ) => {
    res.status(status).json({
        message,
        error: true,
        data: null,
    });
}

// function to send success
module.exports.sendSuccess = (res, data, token) => {
        return res.status(200).json({
            message: "success",
            error: false,
            data,
        });
}
