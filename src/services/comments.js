const repository = require("./../repository/crud");

exports.getAll = function (req, res) {
    repository.getAll("comments", (err, data) => {
        if (!!err)
            res.json({ success: false, message: "error occurred", err: err });
        else
            res.json({ success: true, data })
    });
}





exports.post = function (req, res) {
    repository.post("comments", req.body, (err, data) => {
        if (!!err) {
            res.json({ success: false, message: "error occurred", err: err });
        }
        else {
            res.json({ success: true, data })
        }
    })
}

