
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
})