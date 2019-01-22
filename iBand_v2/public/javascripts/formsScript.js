
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(()=>{
    $('#loginButton').click(e=>{
        e.preventDefault()
        ajaxPost()
    })

    function ajaxPost() {
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: 'http://localhost:8000/api/users/login',
            data: JSON.stringify({email: $('#usernameL').val(), password: $('#passwordL').val()}),
            success: p => {
                alert('LogIn Done')
                window.location.href='http://localhost:8000/users/';
            },
            error: e => {
                alert('Email or Password Incorrect!')
                
            }
        })
    }

    function formPost() {
        var form_data = new FormData($('#myUploadForm')[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:6008/add',
            processData: false,
            contentType: false,
            async: true,
            cache: false,
            data: form_data,
            success: p => {alert('File Sent to System: '+p)},
            error: e => {
                alert('2--> Erro no post: ' + JSON.stringify(e))
                console.log('ERRO: '+ e)
            }
        })
    }
})