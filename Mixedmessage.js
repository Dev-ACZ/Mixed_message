// Import the files
const readline = require('readline');
const { selfImprovementQuotes, heartBrokenQuotes, lonelyQuotes, friendsQuotes, mentalityQuotes, realWorldQuotes } = require('./quotes');

// Create a random number generator
function getRandomQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Create interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Handle user input
function askForQuote() {
    console.log("Choose one: \n1. Self-improvement.\n2. Broken heart.\n3. Alone.\n4. Friends.\n5. Mentality.\n6. Real-world.")

    rl.question('Enter your choice ( 1-6 ): ', (choice) => {
        if(choice === '1'){
            const randomQuote = getRandomQuote(selfImprovementQuotes)
            console.log('~',randomQuote,'~')
        } else if(choice === '2'){
            const randomQuote = getRandomQuote(heartBrokenQuotes)
            console.log('~',randomQuote,'~')
        } else if(choice === '3'){
            const randomQuote = getRandomQuote(lonelyQuotes)
            console.log('~',randomQuote,'~')
        } else if(choice === '4'){
            const randomQuote = getRandomQuote(friendsQuotes)
            console.log('~',randomQuote,'~')
        } else if(choice === '5'){
            const randomQuote = getRandomQuote(mentalityQuotes)
            console.log('~',randomQuote,'~')
        } else if(choice === '6'){
            const randomQuote = getRandomQuote(realWorldQuotes)
            console.log('~',randomQuote,'~')
        } else {
            console.log("Invalid. Type one of these: 1 , 2, 3, 4, 5, 6")
        }

        askForContinue();
    })
}

// Prompting to continue
function askForContinue() {
    rl.question('Do you want to continue? Type "yes" or "no": ', (choice) => {
        if (choice === 'yes'){
            askForQuote();
        } else if (choice === 'no'){
            console.log('Goodbye!')
            rl.close()
        } else {
            console.log('Invalid! Type "yes" or "no".')
        }
    })
}

// Start the process
askForQuote();