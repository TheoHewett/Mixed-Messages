// Create a function that returns a random number, allowing a random element to be returned from an array.
const getRandomNumber = num => Math.floor(Math.random() * num);

// This object will contain all the messages that will be printed to the console. Each key has an array of values, one of which will be selected at random using the number generated above. The value of num above is the length of the array in question.
const contentLibrary = {
    typeOfDay: ['average','rough','awful','horrendous','catastrophic'],
    action: ['people','black cats','manholes','the supermarket','travel','the outside world'],
    consequence: ['the end of the world','greatly','from great emotional torment'],
};

// Create an empty array which will story the randomly generated output.
let randomOutput = [];

// Iterate through the object and log one random value from each key to the console.
const getRandomOutput = () => {
    for (const key in contentLibrary) {
        let arrLen = contentLibrary[key].length 
        let randomIndex = getRandomNumber(arrLen);

        randomOutput.push(contentLibrary[key][randomIndex]);
    }
    return randomOutput;
}

// This function formats the newly created values within randomOutput to create a readable message for the user.
const formatMessage = arr => console.log(`You are going to have a ${arr[0]} day. I'd recommend that you avoid ${arr[1]} wherever possible, else suffer ${arr[2]}.`);

// Call this function in order to run the program and receive a randomly generated message from the console.
const generatePessimism = () => formatMessage(getRandomOutput());

generatePessimism();
