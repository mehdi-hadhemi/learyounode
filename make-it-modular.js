var fs=require('fs');
var path=require('path');

module.exports=function(dir,extension,callback){
    var extension="."+extension;
fs.readdir(dir,function(err,files){
    if(err){
        callback(err,null);
    }
    else{
        result=[];
        files.forEach(function(entry){
            if(path.extname(entry)==extension){
            result.push(entry);
        }
        
    });
    callback(null,result)
}
})
}