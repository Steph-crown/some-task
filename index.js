const isEven = (num) => {
    // Checks if a number is even
    return !(num % 2);
}

const isOdd = (num) => {
    // Checks if a number is odd
    return num % 2 !== 0;
}

const isPrime = (num) => {
    // Checks if a number is prime
    let numOfFactors = 0;

    if (num < 2) return false;

    // Checks all numbers from 2 to num-1 and counts how many are factors of num
    for (let i = 2; i < num; i++) { 
        numOfFactors += (num % i) ? 0 : 1
    }

    // Normally prime numbers have no factor between 2 and itself -1
    // Returns true if there are no factors
    return numOfFactors === 0
}

const labelNumberColors = (start, end) => {
    // Iterates through all numbers from start to end
    // And determines the color allocated to the number
    // Green for even, yellow for odd, red for prime

    let arrayOfLabel = [];
    for (let num = start; num <= end; num++) {
        // Gets the correct color based on the number
        let color = isPrime(num) ? 'red' :
            isEven(num) ? 'green' :
            isOdd(num) ? 'yellow' : '';

        arrayOfLabel.push({
            num,
            color 
        });
    }

    return arrayOfLabel;
}

const createBoxesHtmlString = (arrayOfLabel) => {
    // Dynamically creates the boxes for the numbers
    let boxesHtmlString = ``;
    for (let i of arrayOfLabel) {
        boxesHtmlString += `
            <div class="${'box ' + i.color}">
                ${i.num}
            </div>
        `
    }

    return boxesHtmlString;
}

const appendBoxesToContainer = (htmlString) => {
    // Appends the htmlString to the container
    let container = document.querySelector('.container');

    container.innerHTML = htmlString;
    return;
}

appendBoxesToContainer(createBoxesHtmlString(labelNumberColors(1,100)))