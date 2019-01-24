
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(()=>{
    $('#LoginButton').click(e=>{
        e.preventDefault()
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: 'http://localhost:8000/api/users/login',
            data: JSON.stringify({email: $('#emailL').val(), password: $('#passwordL').val()}),
            success: p => {
                alert('LogIn Done')
                window.location.href='http://localhost:8000/users/';
            },
            error: e => {
                alert('Email or Password Incorrect!')
                
            }
        })
    })

    $('#RegisterButton').click(e=>{
        e.preventDefault()
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: 'http://localhost:8000/api/users/',
            data: JSON.stringify({email: $('#emailR').val(), password: $('#passwordR').val(), name: $('#nameR').val(), utype: parseInt($('input[name=type]:checked').val())}),
            success: p => {
                alert('Register Done')
                window.location.href='http://localhost:8000/';
            },
            error: e => {
                alert('Email Already Taken!')
                
            }
        })
    })

})