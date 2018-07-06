$(document).ready(function(){
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');
        }
    );
});

$(document).ready(function(){
  $("ul.list-unstyled").on("click", ".init", function() {
      $(this).closest("ul.list-unstyled").children('li:not(.init)').toggle();
  });

  var allOptions = $("ul.list-unstyled").children('li:not(.init)');
  $("ul.list-unstyled").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("ul.list-unstyled").children('.init').html($(this).html());
      allOptions.toggle();
  });
});
