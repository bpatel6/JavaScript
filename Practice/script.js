// App 1:

function ageInDays() {
    var birthYear = prompt('What year were you born?');
    var ageInDays = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    if (document.getElementById('flex-box-result') != null) {
        document.getElementById("flex-box-result").childNodes[0].replaceWith(h1);
    } else {
        document.getElementById('flex-box-result').appendChild(h1);
    }
}

function reset() {
    document.getElementById('ageInDays').remove();
}

