var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var SiteSchema = new Schema({
  name: String,
  url: String,
  class: {type: String, default: 'Test'},
  createDate: {type: Date, default: Date.now},
  editDate: {type: Date, default: Date.now},
  createUser: {type: String, default: 'tester'},
  editUser: {type: String, default: 'tester'},
  adminChecked: {type: Number, default: 0},
  pageView: {type: Number, default: 0}
});
var Site = mongodb.mongoose.model("Site", SiteSchema);
var SiteDAO = function() {};


SiteDAO.prototype.findAll = function(callback) {
  Site.find({}, function(err, obj) {
    callback(err, obj);
  });
};

SiteDAO.prototype.findById = function(id, callback) {
  Site.findOne({
    _id: id
  }, function(err, obj) {
    callback(err, obj);
  });
};

SiteDAO.prototype.save = function(obj, callback) {
  var instance = new Site(obj);
  instance.save(function(err) {
    callback(err);
  });
};

SiteDAO.prototype.deleteById = function(id, callback) {
  Site.findOneAndRemove({
    _id: id
  }, function(err, obj) {
    callback(err, obj);
  });
};

SiteDAO.prototype.updateById = function(id, obj, callback) {
  Site.findOneAndUpdate({
    _id: id
  }, obj, function(err) {
    callback(err);
  });
};

SiteDAO.prototype.search = function (query, callback) {
  for (var key in query) {
    query[key] = new RegExp(query[key]);
  }
  Site.find(query,function(err, obj){
    callback(err, obj);
  });
};
module.exports = new SiteDAO();
