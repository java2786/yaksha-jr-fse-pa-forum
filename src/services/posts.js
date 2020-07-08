const repository = require("./../repository/crud");
const Post = require("./../entities/post")
const Comment = require("./../entities/Comment")

exports.getAll = function (req, res) {

    // res.json({success: true})
    // repository.getAll("posts", (err, data)=>{
    //     if(!!err) 
    //     res.json({ success: false, message: "error occurred", err: err });
    //     else
    //     res.json({ success: true, data })
    // });

    Post.findAll({
        
        // include: [
        //     {model: Comment, as: 'comments'}
        // ]
    })
    .then(function(data) {
        res.json({ success: true, data })
      })
      .catch(err=>{
        res.json({ success: false, message: "error occurred", err: err });
      })
}

exports.getTitles = function (req, res) {
    Post.findAll({attributes: ['id', 'title']})
    .then(function(data) {
        res.json({ success: true, data })
      })
      .catch(err=>{
        res.json({ success: false, message: "error occurred", err: err });
      })

}



exports.post = function (req, res) {

    repository.post("posts", req.body, (err, data)=>{
        if(!!err) 
        res.json({ success: false, message: "error occurred", err: err });
        else
        res.json({ success: true, data })
    })
}

// exports.getById = async function (tableName, id, cb) {
// }

// exports.put = function (tableName, putData, cb) {
// }

// exports.delete = function (tableName, id, cb) {
// }


