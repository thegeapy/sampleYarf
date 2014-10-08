var yarf = require("yarf");
yarf.start(8000, __dirname+"/Application", {
    mongo:{
        url: 'mongodb://localhost/sampleDB'
    }
});