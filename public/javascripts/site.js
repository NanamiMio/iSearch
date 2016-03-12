$(function() {

  var mdata = {};
  $('#submit').click(function() {
    mdata = {
      name: $('#siteName').val(),
      link: $('#siteLink').val()
    };
    console.log(mdata);

    $.ajax({
      type: "POST",
      url: '/site/add',
      dataType: 'json',
      data: mdata,
      success: function(data, textStatus) {
        if (data.success) {

          //$(location).attr('href','/site/'+mdata.name);
        } else {

        }
      }
    });
  });
});
