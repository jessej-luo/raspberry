const spawn = require('child_process').spawn;

var appRouter = function(app) {
    app.get('/api/classify', function(req, res) {    //start.js

        const py = spawn('python', ['helloworld.py']);
        var dataString = 'asdfas';

        py.stdout.on('data', function(data){
            console.log(data);
            dataString += data.toString();
        });

        py.stdout.on('end', function(){
          console.log('Sum of numbers=',dataString);
        });

        res.send(dataString);
    });
}

module.exports = appRouter;
