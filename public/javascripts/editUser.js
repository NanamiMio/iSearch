$(function() {

  var data = {};
  $('#submit').click(function() {
    data = {
      _id: $('#userID').text(),
      name: $('#userName').val(),
      pass: $('#userPass').val()
    };
    console.log(data);
    console.log('/users/'+data._id);

    $.ajax({
      type: "PUT",
      url: '/users/'+data._id,
      dataType: 'json',
      data: data,
      success: function(data, textStatus) {
        if (data.success) {
          alert('Edit success');
          $(location).attr('href','/admin');
        } else {

        }
      }
    });
  });
});
