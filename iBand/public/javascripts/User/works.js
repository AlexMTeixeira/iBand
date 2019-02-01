var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

$(()=>{
    $('.accordion').click((e)=> {
        let header_id = e.target.id
        let content_id = header_id.replace('header', 'content')
        $('#'+content_id).toggleClass('w3-show')
    })

    $('#create_work_modal').click(()=>{
        $('#newWorkForm').show()
        $('#file').val('')
    })

    // When the user clicks anywhere outside of the modal, close it
    $('.w3-modal ').click(function(){
        $('#newWorkForm').hide();
       
   })                                            
   $('.w3-modal-content').click(function(e){
        e.stopPropagation();
   })                                            
   
   $('#close_modal').click(()=>{
        $('#newWorkForm').hide()
   })

   $('#newWorkButton').click(e=>{
        e.preventDefault()
        var file = $('#file').val().split('\\').pop()
        var path = '"/images/'+file+'"'
        formPost()
    })

    function formPost() {
        var form_data = new FormData($('#myUploadForm')[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/admin/works',
            processData: false,
            contentType: false,
            async: true,
            cache: false,
            data: form_data,
            success: p => {
                alert('File Sent to System: '+p)
            },
            error: e => {
                alert('2--> Erro no post: ' + JSON.stringify(e))
                console.log('ERRO: '+ e)
            }
        })
    }
})