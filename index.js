app.get('/homepage', function(req,res){
    console.log("This is a merge test")
    // We are trying to figure out how what happens when we all work on the same file
    res.render('homepage', {homepage: object})
})