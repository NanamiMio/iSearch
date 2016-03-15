$(function() {

  var data = {},
      status = $('#userStatus').val(),
      permission = 0;

  if(status == 'Administrator'){
      permission = 20;
  }
  else{
    permission = 10;
  }

  $('#submit').click(function() {
    data = {
      _id: $('#userID').text(),
      name: $('#userName').val(),
      pass: $('#userPass').val(),
      status: status,
      permission: permission
    };
    console.log(data);

    $.ajax({
      type: "PUT",
      url: '/users/'+data._id,
      dataType: 'json',
      data: data,
      success: function(data, textStatus) {
        if (data.success) {
          alert('Edit success');
          $(location).attr('href','/admin/users');
        } else {

        }
      }
    });
  });
})
