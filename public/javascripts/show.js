$(function() {
  $('#c_delete').on('click', function() {
    var data = {
      id: $('#_id').text()
    }
    $.ajax('/site/delete', {
      type: "delete",
      dataType: 'json',
      data: data,
    })
  });
});
