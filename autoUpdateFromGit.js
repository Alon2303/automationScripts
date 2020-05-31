var child_process = require('child_process');

console.log('autoUpadte');

const time = 1000 * 60 * 15; // 15 min

const updateProject = () => {
	console.log(new Date());
	
	// UPDATE BackEnd --> B/E repo
	child_process.exec('frontendFile.bat', function(error, stdout, stderr) {
    if(error)
		console.error(error);
	console.log(stdout);
	});
	
	// UPDATE FronEnd --> F/E
	child_process.exec('backendFIle.bat', function(error, stdout, stderr) {
    if(error)
		console.error(error);
	console.log(stdout);
	});
	
}

updateProject();

const interval = setInterval(()=>{
	updateProject();	
},time)
