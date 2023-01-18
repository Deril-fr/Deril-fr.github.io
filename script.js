const { spawn, exec } = require('child_process')
const fs = require('fs');
const child = spawn('npx', ['vite', 'build'],
    { stdio: 'inherit',
        shell: true
    });


// When child as finished, this will be called 
child.on('close', (code) => {
    // copy index.html of docs folder, and make a new file called 404.html
    fs.copyFile('docs/index.html', 'docs/404.html', (err) => {
        if (err) throw err;
        console.log('index.html was copied to 404.html');
    });

    exec('git add .', (err, stdout, stderr) => {
        if (err) {
            //some err occurred
            console.error(err)
        } else {
          exec('git commit -m "Updated website"', (err, stdout, stderr) => {
            if (err) {
                //some err occurred
                console.error(err)
            } else {
              exec('git push', (err, stdout, stderr) => {
                if (err) {
                    //some err occurred
                    console.error(err)
                } else {
                  console.log(`Project uploaded to GitHub`);
                }
              });
            }
          });
        }
    });
});