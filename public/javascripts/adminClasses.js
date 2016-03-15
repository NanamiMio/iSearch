function userDelete(id) {

  var data = {
    id: id
  };

  $.ajax('/users/'+id, {
    type: "delete",
    dataType: 'json',
    data: data,
    success: function(data, textStatus) {
      if (data.success) {
        alert('Successfully delete!');
        $('#' + id).remove();
      } else {

      }
    }
  });
}
