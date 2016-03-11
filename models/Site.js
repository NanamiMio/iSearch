var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var SiteSchema = new Schema({
name : String,
link : String
});
var Site = mongodb.mongoose.model("Site", SiteSchema);
var SiteDAO = function(){};
SiteDAO.prototype.save = function(obj, callback){
console.log(obj);
  var instance = new Site(obj);

  instance.save(function(err){
    callback(err);
  });
};
module.exports = new SiteDAO();
