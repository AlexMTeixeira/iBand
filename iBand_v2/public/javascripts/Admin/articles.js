var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

$(()=>{
    
    $('#create_article_modal').click(()=>{
        $('#newArticleForm').show()
        $('#idField').hide()
        $('#updateArticleButton').hide()
        $('#newArticleButton').show()
        $('#title').val('')
        $('#author').val('')
        $('#content').val('')
    })

    // When the user clicks anywhere outside of the modal, close it
    $('.w3-modal ').click(function(){
        $('#newArticleForm').hide();
       
   })                                            
   $('.w3-modal-content').click(function(e){
        e.stopPropagation();
   })                                            
   
   $('#close_modal').click(()=>{
        $('#newArticleForm').hide()
   })

   $('.edit').click(function(){
          var id = this.id
          var title = this.title
          var author = this.name
          var content = this.value
          $('#newArticleForm').show()
          $('#_field').text(id)
          $('#idField').show()
          $('#title').val(title)
          $('#author').val(author)
          $('#content').val(content)
          $('#newArticleButton').hide()
          $('#updateArticleButton').show()

   })

   $('#updateArticleButton').click(e=>{
          e.preventDefault()
        
          $.ajax({
               type: 'POST',
               contentType: 'application/json',
               url: 'http://localhost:8000/admin/articles/update/',
               data: JSON.stringify({_id: $('#_field').text(),title: $('#title').val(), author: $('#author').val(), date: new Date($('#date').val()), content: $('#content').val()}),
               success: p => {
                    $('#newArticleForm').hide();
                    location.reload();
               },
               error: e => {
                    alert('Fail on Update')  
               }
          })
     })

   $('#newArticleButton').click(e=>{
          e.preventDefault()

          $.ajax({
               type: 'POST',
               contentType: 'application/json',
               url: 'http://localhost:8000/admin/articles/',
               data: JSON.stringify({title: $('#title').val(), author: $('#author').val(), date: new Date($('#date').val()), content: $('#content').val()}),
               success: p => {
                    $('#newArticleForm').hide();
                    location.reload();
               },
               error: e => {
                    alert('Email Already Taken!')
                    
               }
          })
   })
})