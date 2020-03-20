export default function fileToDataUrl(file){return new Promise((res,rej)=>{
	let reader = new FileReader();
	reader.addEventListener('load', function(){
		res(reader.result);
	});
	reader.addEventListener('error', function(){
		rej(reader.error);
	});
	reader.addEventListener('abort', function(){
		rej('Aborted');
	});
	// Read the file as a data url
	reader.readAsDataURL(file);
	// Add a timeout
	setTimeout(()=>{rej('Timeout'), 30000});
})}