var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var SiteSchema = new Schema({
name : String,
link : String
});
var Site = mongodb.mongoose.model("Site", SiteSchema);
var SiteDAO = function(){};
module.exports = new SiteDAO();
