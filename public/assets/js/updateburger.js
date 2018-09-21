// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.eatburger').on('click', function(event) {
    console.log('go to update');

    var id = $(this).data('id');
    console.log('id = ', id);
    var eatenburger = true;

    // Send the PUT request.
    $.ajax('/burgers/update/' + id, {
      type: 'PUT',
      data: eatenburger
    }).then(function() {
      console.log('changed devoured');
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
