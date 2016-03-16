var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var UserSchema = new Schema({
  name: String,
  pass: String,
  createDate: {type: Date, default: Date.now},
  editDate: {type: Date, default: Date.now},
  status: {type: String, default: 'User'},
  permission: {type: Number, default: 10},
});
var User = mongodb.mongoose.model("User", UserSchema);
var UserDAO = function() {};


UserDAO.prototype.findAll = function(callback) {
  User.find({}, function(err, obj) {
    callback(err, obj);
  });
};

UserDAO.prototype.findById = function(id, callback) {
  User.findOne({
    _id: id
  }, function(err, obj) {
    callback(err, obj);
  });
};

UserDAO.prototype.findByName = function(name, callback) {
  User.findOne({
    name: name
  }, function(err, obj) {
    callback(err, obj);
  });
};

UserDAO.prototype.add = function(obj, callback) {
  var instance = new User(obj);
  User.findOne({
    name: instance.name
  }, function(err, obj) {
    if(obj){
      var userexists= {
        userexists : true
      };
      callback(userexists, obj);
    }else {
      instance.save(function(err, obj) {
        callback(err, obj);
      });
    }
  });


};

UserDAO.prototype.deleteById = function(id, callback) {
  User.findOneAndRemove({
    _id: id
  }, function(err, obj) {
    callback(err, obj);
  });
};

UserDAO.prototype.updateById = function(id, obj, callback) {
  User.findOneAndUpdate({
    _id: id
  }, obj, function(err) {
    callback(err);
  });
};

UserDAO.prototype.Verificate = function (name, pass ,callback) {
  console.log('ver');
  User.findOne({name:name}, function(err, obj){
    console.log(obj);
    console.log(pass);
    if(err){
      callback(err);
    }else if(obj){
      if(obj.pass==pass){
        callback(err, obj);
      }else{
        callback();
      }
    }else{
      callback();
    }
  });
};
module.exports = new UserDAO();
