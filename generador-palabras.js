const randomWords = require("random-words");


async function logRandomWords() {
  const randomWordsList = randomWords(50);

  for (const word of randomWordsList) {
    console.log(word);
    await delay();
  }
}

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 50);
  });
}

function logStart() {
  console.log(`
  ███████ ████████  █████  ██████  ████████ 
  ██         ██    ██   ██ ██   ██    ██    
  ███████    ██    ███████ ██████     ██    
       ██    ██    ██   ██ ██   ██    ██    
  ███████    ██    ██   ██ ██   ██    ██    
                                            
                                            
  `);
}

function logEnd() {
  console.log(`
  ███████ ███    ██ ██████  
  ██      ████   ██ ██   ██ 
  █████   ██ ██  ██ ██   ██ 
  ██      ██  ██ ██ ██   ██ 
  ███████ ██   ████ ██████  
                            
                            
    `);
}

(async () => {
  logStart();
  await logRandomWords();
  logEnd();
  console.log('Super feature nuevo');
})();