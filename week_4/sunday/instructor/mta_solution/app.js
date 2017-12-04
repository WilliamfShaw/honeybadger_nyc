let userInput;
const lTrain = ['8th Ave', '6th Ave', 'Union sq', '3rd Ave', '1st Ave', 'Bedford'];
const nTrain = ['Times Sq', 'Herald Sq', '28th St', '23rd St', 'Union Sq', '8th St'];
const sTrain = ['Grand Central', '33rd St', '28th St', '23rd St', 'Union Sq', 'Astor Pl'];
const trainMenu = ['L', 'N', 'S', 'Q'];


while(userInput != 'q') {
    userInput = prompt(`Please select a line ${trainMenu.join(', ')}`).toLowerCase();

    if (userInput === 'l') {
        lTrain.forEach(function(station){
            console.log(station);
        });
    } else if (userInput === 'n') {
        nTrain.forEach(function(station){
            console.log(station);
        });
    } else if (userInput === 's') {
        sTrain.forEach(function(station){
            console.log(station);
        });
    };
}


// let userInput;
// let stationOutputIndex;
// const stations = [
//     ['8th Ave', '6th Ave', 'Union sq', '3rd Ave', '1st Ave', 'Bedford'],
//     ['Times Sq', 'Herald Sq', '28th St', '23rd St', 'Union Sq', '8th St'],
//     ['Grand Central', '33rd St', '28th St', '23rd St', 'Union Sq', 'Astor Pl']
// ]
// const trainMenu = ['L', 'N', 'S', 'Q'];

// while(stationOutputIndex != 3) {
//     userInput = prompt(`Please select a line ${trainMenu.join(', ')}`).toUpperCase();
//     stationOutputIndex = trainMenu.indexOf(userInput);
//     let displayStations = stations[stationOutputIndex]

//     if(displayStations) {
//         displayStations.forEach(function(station) {
//             console.log(station);
//         })
//     }
// }
