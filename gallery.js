let fs = require('fs');

let imageFileNames = fs.readdirSync('site/images');

// This code is just here to demonstrate how fs.readdirSync works

// console.log('sites/images contains the following files:');

let data = '';

for (let i = 0; i < imageFileNames.length; i++) {
  let fileName = imageFileNames[i];
  // console.log(`${i + 1}. ${fileName}`);
  console.log(`<img src="${fileName}" alt="${fileName}" class="${fileName}">`);

  data += '<img src="';
  data += `${fileName}" `;
  data += 'alt="';
  data += `${fileName}" `;
  data += 'class="';
  data += `${fileName}">`;
  data += '\n';
}

fs.writeFileSync('site/index.html', data);
