var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

$(()=>{
    
    $('#create_user_modal').click(()=>{
        $('#newUserForm').show()
        $('#updateUserButton').hide()
        $('#newUserButton').show()
        $('#email').val('')
        $('#email').removeAttr('readonly')
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

   $('.edit').click(function(){
          var email = this.id
          $('#newUserForm').show()
          $('#email').val(email)
          $('#email').attr("readonly","readonly")
          $('#newUserButton').hide()
          $('#updateUserButton').show()

   })

   $('#updateUserButton').click(e=>{
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
                    url: 'http://localhost:8000/api/users/update/',
                    data: JSON.stringify({email: $('#email').val(), password: $('#password').val(), name: $('#name').val(), utype: parseInt($('input[name=user_type]:checked').val()), valid: valid}),
                    success: p => {
                         $('#newUserForm').hide();
                         location.reload();
                    },
                    error: e => {
                         alert('Fail on Update')  
                    }
               })
          }
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
                   data: JSON.stringify({email: $('#email').val(), password: $('#password').val(), name: $('#name').val(), utype: parseInt($('input[name=user_type]:checked').val()), valid: valid}),
                   success: p => {
                         $('#newUserForm').hide();
                         location.reload();
                   },
                   error: e => {
                       alert('Email Already Taken!')
                       
                   }
               })
           }
   })
})