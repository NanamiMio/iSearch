function classAdd() {

  var data = {
    name: $('#addClassName').val()
  };

  $.ajax('/classes/', {
    type: "POST",
    dataType: 'json',
    data: data,
    success: function(data, textStatus) {
      if (data.success) {
        alert('Successfully add!');
      } else {

      }
    }
  });
}

function classUpdate(id) {

  var data = {
    name: $('tr#'+id+' input').val()
  };

console.log(data);

  $.ajax('/classes/'+id, {
    type: "put",
    dataType: 'json',
    data: data,
    success: function(data, textStatus) {
      if (data.success) {
        alert('Successfully Update!');
      } else {

      }
    }
  });
}

function classDelete(id) {

  var data = {
    _id: id
  };

  $.ajax('/classes/'+id, {
    type: "delete",
    dataType: 'json',
    data: data,
    success: function(data, textStatus) {
      if (data.success) {
        alert('Successfully Delete!');
        $('#' + id).remove();
      } else {

      }
    }
  });
}
