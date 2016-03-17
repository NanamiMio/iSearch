var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var Site = require('./Site');
var ClassSchema = new Schema({
  name: String,
  createDate: {
    type: Date,
    default: Date.now
  },
  editDate: {
    type: Date,
    default: Date.now
  },
  createUser: {
    type: String,
    default: 'System'
  },
  editUser: {
    type: String,
    default: 'System'
  }
});
var Class = mongodb.mongoose.model("Class", ClassSchema);
var ClassDAO = function() {};


ClassDAO.prototype.findAll = function(callback) {
  Class.find({}, function(err, obj) {
    callback(err, obj);
  });
};

ClassDAO.prototype.findById = function(id, callback) {
  Class.findOne({
    _id: id
  }, function(err, obj) {
    callback(err, obj);
  });
};

ClassDAO.prototype.save = function(obj, callback) {
  var instance = new Class(obj);
  instance.save(function(err) {
    callback(err);
  });
};

ClassDAO.prototype.deleteById = function(id, callback) {
  Class.findOne({
    _id: id
  }, function(err, obj) {
    if (err) {
      callback(err);
    } else {
      Site.updateClass(obj.name,'',function(err){
        if(err){
          callback(err);
        } else {
          Class.remove({_id: id},function(err){
              callback(err);
          });
        }
      });
    }
  });
}

ClassDAO.prototype.updateById = function(id, obj, callback) {
  var className = obj.name;
  Class.findOne({
    _id: id
  }, function(err, obj) {
    if (err) {
      callback(err);
    } else {
      Site.updateClass(obj.name,className,function(err){
        if(err){
          callback(err);
        } else {
          Class.update({_id: id},{name: className},function(err){
              callback(err);
          });
        }
      });
    }
  });
};

module.exports = new ClassDAO();
