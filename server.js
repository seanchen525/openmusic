var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.all('/*', function(req, res){
    res.send('\
        <!DOCTYPE html>\
        <html>\
            <head>\
                <title>Open Music</title>\
                <base href="/">\
            </head>\
            <body>\
                <div ui-view></div>\
                <script src="bundle.js"></script>\
            </body>\
        </html>\
    ');
});

app.listen(port, function(){
    console.log('Server is running on ' + port);
});