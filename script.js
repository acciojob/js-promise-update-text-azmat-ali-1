let prom = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve();
	},1000);
});
prom.then(()=>{
	const div = document.getElementById("output");
	div.innerText="Hello, world!"
})