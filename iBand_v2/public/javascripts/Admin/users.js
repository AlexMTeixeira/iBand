var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

$(()=>{
    
    $('#create_user_modal').click(()=>{
        $('#newUserForm').show()
    })

    // When the user clicks anywhere outside of the modal, close it
    $('.w3-modal ').click(function(){
        $('#newUserForm').hide();
       
   })                                            
   $('.w3-modal-content').click(function(e){
        e.stopPropagation();
   })                                            
   
   $('#close_modal').click(()=>{
        $('#newUserForm').hide()
   })

   $('#newUserButton').click(e=>{
          e.preventDefault()

          if(!regexEmail.test($('#email').val())) {
               $('#email').val('')
               $('#email').attr("placeholder", "Please insert a email");
          } else {
               var valid
               if($('input[name=valid]:checked').val()=="true")
                    valid = true
               else valid = false
               $.ajax({
                   type: 'POST',
                   contentType: 'application/json',
                   url: 'http://localhost:8000/api/register/',
                   data: JSON.stringify({email: $('#emailR').val(), password: $('#passwordR').val(), name: $('#nameR').val(), utype: parseInt($('input[name=user_type]:checked').val()), valid: true}),
                   success: p => {
                       alert('New User Created!: '+valid)
                   },
                   error: e => {
                       alert('Email Already Taken!')
                       
                   }
               })
           }
   })
})