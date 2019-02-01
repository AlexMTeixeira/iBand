var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

$(()=>{
    $('.accordion').click((e)=> {
        let header_id = e.target.id
        let content_id = header_id.replace('header', 'content')
        $('#'+content_id).toggleClass('w3-show')
    })
})