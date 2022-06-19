var qr = require('qr-image');
const fs = require('fs')
const data = fs.readFileSync('./data.txt','UTF-8')

const teams = data.split('\r\n')

function makeQRCode(path,hash){
	path = `https://shabbirjodhpur.github.io/reunion/${path}`
	var qr_type = qr.image(`${path}`, { type: 'png' });
	qr_type.pipe(require('fs').createWriteStream(`./images/${hash}.png`));
 
	var type_string = qr.imageSync(`${path}`, { type: 'png' });
}
for(let i=0;i<teams.length;i++){
	const metrics = teams[i].split(',')

	makeQRCode(`files/${metrics[2]}.html`,metrics[3])
}