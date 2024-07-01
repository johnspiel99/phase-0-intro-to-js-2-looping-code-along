function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
        thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

function countDown(startingNumber) {
    let count = startingNumber;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}
 