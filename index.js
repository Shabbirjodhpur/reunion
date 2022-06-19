const fs = require('fs')


const data = fs.readFileSync('./data.txt','UTF-8')

const teams = data.split('\r\n')

for(let i=0;i<teams.length;i++){
	const metrics = teams[i].split(',')
	const htmlPage = makeHTMLFileString(metrics[0],metrics[1])
	fs.writeFileSync(`./files/${metrics[2]}.html`,htmlPage)
}
function makeHTMLFileString(title,code){
return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
	${code}
  </body>
</html>
`
}
