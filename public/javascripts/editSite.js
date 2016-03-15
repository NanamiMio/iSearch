$(function() {

  var data = {};
  $('#submit').click(function() {
    data = {
      _id: $('#siteID').text(),
      name: $('#siteName').val(),
      'url': $('#siteUrl').val()
    };
    console.log(data);
    console.log('/sites/'+data._id);

    $.ajax({
      type: "PUT",
      url: '/sites/'+data._id,
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
