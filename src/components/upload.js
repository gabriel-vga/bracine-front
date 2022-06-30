let http = require("http");
let fs = require("fs");
let formidable = require("formidable");

http
  .createServer(function (req, res) {
    let form = new formidable.IncomingForm();
    form.parse(req, function (error, fields, file) {
      let filepath = file.fileupload.filepath;
      let newpath = "../../public/posters";
      newpath += file.fileupload.originalFilename;
      fs.rename(filepath, newpath, function () {
        res.write("Upload realizado com sucesso");
        res.end();
      });
    });
  })
  .listen();
