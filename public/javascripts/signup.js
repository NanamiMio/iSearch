$(function() {
  $('#signUpFrom').on('submit', function() {
    var data = {
      name: $('#inputName').val,
      pass: $('#inputPass').val
    }
    console.log(data);
    $.ajax('', {
      type: 'post',
      dataType: 'json',
      data: data,
      success: function(data, textStatus) {
        if (data.success) {
          alert('Successfully Registered!')
          //$(location).attr('href','/');
        } else {

        }
      }
    })
  });
});
