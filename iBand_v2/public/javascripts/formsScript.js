
var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
var myIndex = 0;

$(()=>{
    //Slide Show
    carousel();

    // Get the modal
    var loginModal = document.getElementById('loginForm');
    var registerModal = document.getElementById('registerForm');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }

    //Post Login 
    $('#LoginButton').click(e=>{
        e.preventDefault()
        
        if(!regexEmail.test($('#emailL').val())) {
            $('#passwordL').val('')
            $('#emailL').val('')
            $('#emailL').attr("placeholder", "Please insert a email");
        } else {
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://localhost:8000/api/users/login',
                data: JSON.stringify({email: $('#emailL').val(), password: $('#passwordL').val()}),
                success: p => {
                    window.location.href = p;
                },
                error: e => {
                    alert('Login Failed!')
                    
                }
            })
        }
    })


    //Post Register
    $('#RegisterButton').click(e=>{
        e.preventDefault()

        if(!regexEmail.test($('#emailR').val())) {
            $('#emailR').val('')
            $('#emailR').attr("placeholder", "Please insert a email");
        } else {
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://localhost:8000/api/users/',
                data: JSON.stringify({email: $('#emailR').val(), password: $('#passwordR').val(), name: $('#nameR').val(), utype: parseInt($('input[name=user_type]:checked').val())}),
                success: p => {
                    alert('You need to wait for Moderator to validate your account! Thanks for your registation!')
                    window.location.href='http://localhost:8000/';
                },
                error: e => {
                    alert('Email Already Taken!')
                    
                }
            })
        }
    })

})

//Slide Show Carousel
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
}  