 $(document).ready(function() {
      $('.asbl').hide();
      $('.services').hide();
      $('.tarifs').hide();
      $('.petitmot').hide();
      $('.acces').hide();
      // mission
      $('#iconclick1').on('click', function(){
           $('.asbl').hide('fast');
           $('.services').hide('fast');
           $('.tarifs').hide('fast');
           $('.petitmot').hide('fast');
           $('.acces').hide('fast');
           $('.mission').show('slow');
           $('.iconclick').removeClass("black");
           $('.style1').addClass("black");
});
      })
      // asbl
      $('#iconclick2').on('click', function(){
           $('.services').hide('fast');
           $('.tarifs').hide('fast');
           $('.mission').hide('fast');
           $('.petitmot').hide('fast');
           $('.acces').hide('fast');
           $('.asbl').show('slow');
           $('.iconclick').removeClass("black");
           $('.style22').addClass("black"); // Style 22 because style2 make the background white when you click on the (this) icon.
      })
      //services
      $('#iconclick3').on('click', function(){
           $('.tarifs').hide('fast');
           $('.mission').hide('fast');
           $('.asbl').hide('fast');
           $('.petitmot').hide('fast');
           $('.acces').hide('fast');
           $('.services').show('slow');
           $('.iconclick').removeClass("black");
           $('.style3').addClass("black");
      })
      $('#iconclick4').on('click', function(){
          $('.mission').hide('fast');
          $('.asbl').hide('fast');
          $('.services').hide('fast');
          $('.petitmot').hide('fast');
          $('.acces').hide('fast');
          $('.tarifs').show('slow');
          $('.iconclick').removeClass("black");
         $('.style4').addClass("black");
     })
     $('#iconclick5').on('click', function(){
         $('.mission').hide('fast');
         $('.asbl').hide('fast');
         $('.services').hide('fast');
         $('.tarifs').hide('fast');
         $('.acces').hide('fast');
         $('.petitmot').show('slow');
         $('.iconclick').removeClass("black");
        $('.style5').addClass("black");
    })
    $('#iconclick6').on('click', function(){
        $('.mission').hide('fast');
        $('.asbl').hide('fast');
        $('.services').hide('fast');
        $('.tarifs').hide('fast');
        $('.petitmot').hide('fast');
        $('.acces').show('slow');
        $('.iconclick').removeClass("black");
        $('.style6').addClass("black");
   })
   $( ".iconclick" ).click(function() {
 $( this ).addClass( "black" );

 
 })
