// App 1:

function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var ageInDays = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('flex-box-result').remove();
}

// App 2:

function rpsGame(input) {
    console.log(input);
    let humanChoice, botChoice;
    humanChoice = input.id;
    botChoice = numberToChoose(randToRPS());
    let result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result[0], result[1]);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message)

}

function randToRPS() {
    return Math.floor(Math.random() * 3);
}

function numberToChoose(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(userInput, computerInput) {
    let rpsData = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    var yourScore = rpsData[userInput][computerInput];
    var computerScore = rpsData[computerInput][userInput];
    return [yourScore, computerScore];
}

function finalMessage(userScore, computerScore) {
    if (userScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (userScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(userImg, computerChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var userDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var message = document.createElement('div');

    userDiv.innerHTML = "<img src='" + imageDatabase[userImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(141,143,191)'>";
    message.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[computerChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(81,81,96)'>";

    document.getElementById('flex-box-rps-div').appendChild(userDiv);
    document.getElementById('flex-box-rps-div').appendChild(message);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}
