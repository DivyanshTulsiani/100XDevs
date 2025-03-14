const fs = require('fs');
const { Command } = require("commander");
 const program = new Command();

 program 
  .name('Word-Counter')
  .description('CLI based tool to count things in a file')
  .version('1.0.0');

program.command('count-words')
  .description('counts the number of words in a file')
  .argument('<file>', 'file to count from')
  .action(function(file){
    fs.readFile(file,'utf-8',function(err,data){
      if(err){
        console.log("please enter the correct file name");
        console.log(err.message);
      }
      else{
        let count = 0;
        for(let i =0;i<data.length;i++){
          if(data[i] === ' '){
            count++;
          }
        }
        console.log(`There are ${count+1} Words in the file given`);
      }
    })

  }
)

program.parse();