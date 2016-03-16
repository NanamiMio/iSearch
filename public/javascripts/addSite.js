$(function() {

  var mdata = {};
  $('#submit').click(function() {
    mdata = {
      name: $('#siteName').val(),
      'url': $('#siteUrl').val(),
      'class': $('#siteClass').val()
    };
    console.log(mdata);

    $.ajax({
      type: "POST",
      url: '/sites/',
      dataType: 'json',
      data: mdata,
      success: function(data, textStatus) {
        if (data.success) {
          alert('add success');
          $(location).attr('href','/user');
        } else {

        }
      }
    });
  });
});
