 $(document).ready(function() {
      $('.asbl').hide();
      $('.services').hide();
      $('.tarifs').hide();
      $('.petitmot').hide();
      // mission
      $('#iconclick1').on('click', function(){
           $('.asbl').hide('fast');
           $('.services').hide('fast');
           $('.tarifs').hide('fast');
           $('.petitmot').hide('fast');
           $('.mission').show('slow');
      })
      // asbl
      $('#iconclick2').on('click', function(){
           $('.services').hide('fast');
           $('.tarifs').hide('fast');
           $('.mission').hide('fast');
           $('.petitmot').hide('fast');
           $('.asbl').show('slow');
      })
      //services
      $('#iconclick3').on('click', function(){
           $('.tarifs').hide('fast');
           $('.mission').hide('fast');
           $('.asbl').hide('fast');
           $('.petitmot').hide('fast');
           $('.services').show('slow');
      })
      $('#iconclick4').on('click', function(){
          $('.mission').hide('fast');
          $('.asbl').hide('fast');
          $('.services').hide('fast');
          $('.petitmot').hide('fast');
          $('.tarifs').show('slow');
     })
     $('#iconclick5').on('click', function(){
         $('.mission').hide('fast');
         $('.asbl').hide('fast');
         $('.services').hide('fast');
         $('.tarifs').hide('fast');
         $('.petitmot').show('slow');
    })
})
