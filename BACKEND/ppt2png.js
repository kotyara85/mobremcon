function ppt2png(){

	var exec = require('child_process').exec;


	this.ppt2png = function(input, output, callback) {
	  exec('unoconv -f pdf -o ' + output + '.pdf ' + input, 
		  function( error, stdout, stderr) {
			//console.log('unoconv stdout: ', stdout);
			//console.log('unoconv stderr: ', stderr);
			if (error !== null) {
			  callback(error);
			} else {
			  pdf2png(output+'.pdf', output+'.png', callback);
			}
		  });
	}

	var pdf2png = function(input, output, callback) {
	  exec('convert -resize 1800 -colorspace RGB -density 300 ' + input + ' ' + output, 
		  function (error, stdout, stderr) {
			//console.log('convert stdout: ', stdout);
			//console.log('convert stderr: ', stderr);
			if (error !== null) {
			  callback(error);
			} else {
			  callback(null);
			}
		  });
	}

	// ppt to jpg by unoconv directly
	this.ppt2jpg = function(input, output) {
	  exec('unoconv -f html -o ' + output + '/ ' + input, 
		  function( error, stdout, stderr) {
			console.log('unoconv stdout: ', stdout);
			console.log('unoconv stderr: ', stderr);
			if (error !== null) {
			  console.log('unoconv err: ', error);
			} else {
			  exec('rm ' + output + '/*.html ' + output + '/' + output, 
				function(){
				  if(error !== null) {
					console.log('rm err: ', error);
				  }
				});
			}
		  });
	}
	
};

	module.exports.ppt2png = ppt2png;

	//exports.ppt2png('240.pptx', 'img/out', function(){
	  //console.log('sss'); 
	//});

	//ppt2jpg('240.pptx', 'img');

