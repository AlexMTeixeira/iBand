$(()=>{
    $('#newsList').load('http://localhost:8000/user/articles/top5')
    $('#eventsList').load('http://localhost:8000/user/events/top5')
    
})
