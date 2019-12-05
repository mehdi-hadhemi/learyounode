var filtering=require('./make-it-modular');
 var dir=process.argv[2];
 var extension=process.argv[3]

 filtering(dir,extension,function(err,files){
 if(err) console.log('errer',error)
 else{
     for(i=0;i<files.length;i++){
         console.log(files[i]);

     }
 }
})