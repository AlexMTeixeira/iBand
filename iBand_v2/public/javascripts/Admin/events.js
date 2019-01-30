var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

$(()=>{
    
    $('#create_event_modal').click(()=>{
        $('#newEventForm').show()
        $('#idField').hide()
        $('#updateEventButton').hide()
        $('#newEventButton').show()
        $('#theme').val('')
        $('#local').val('')
        $('#description').val('')
    })

    // When the user clicks anywhere outside of the modal, close it
    $('.w3-modal ').click(function(){
        $('#newEventForm').hide();
       
   })                                            
   $('.w3-modal-content').click(function(e){
        e.stopPropagation();
   })                                            
   
   $('#close_modal').click(()=>{
        $('#newEventForm').hide()
   })

   $('.edit').click(function(){
          var id = this.id
          var theme = $("#Htheme"+id).text()
          var local = $("#Hlocal"+id).text()
          var description = $("#Hdescription"+id).text()
          $('#newEventForm').show()
          $('#_field').text(id)
          $('#idField').show()
          $('#theme').val(theme)
          $('#local').val(local)
          $('#description').val(description)
          $('#newEventButton').hide()
          $('#updateEventButton').show()

   })

   $('#updateEventButton').click(e=>{
          e.preventDefault()
        
          $.ajax({
               type: 'POST',
               contentType: 'application/json',
               url: 'http://localhost:8000/admin/events/update/',
               data: JSON.stringify({_id: $('#_field').text(),local: $('#local').val(), theme: $('#theme').val(),  description: $('#description').val(), date: $('#date').val(), hour: $('#hour').val(), duration: parseInt($('#duration').val())}),
               success: p => {
                    $('#newEventForm').hide();
                    location.reload();
               },
               error: e => {
                    alert('Fail on Update')  
               }
          })
     })

   $('#newEventButton').click(e=>{
          e.preventDefault()

          $.ajax({
               type: 'POST',
               contentType: 'application/json',
               url: 'http://localhost:8000/admin/events/',
               data: JSON.stringify({local: $('#local').val(), theme: $('#theme').val(),  description: $('#description').val(), date: $('#date').val(), hour: $('#hour').val(), duration: parseInt($('#duration').val())}),
               success: p => {
                    $('#newEventForm').hide();
                    location.reload();
               },
               error: e => {
                    alert('Event Creation Fail!')
                    
               }
          })
   })
})