let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon', 'bus', 'cualcom'];
let extension = ['com', 'net', 'us', 'io'];

function hack(domain){
    let newDomain = domain.split('.');
    let twoWords = newDomain[0].substring(newDomain[0].length - 2, newDomain[0].length);
    let threeWords = newDomain[0].substring(newDomain[0].length - 3, newDomain[0].length);
    let extension = newDomain[1];

    // Comparing last two digits
    if (twoWords === extension) {
        return newDomain[0].substring(0, newDomain[0].length - 2) + '.' + newDomain[1]
    }
    // Comparing last three digits
    if (threeWords === extension) {
        return newDomain[0].substring(0, newDomain[0].length - 3) + '.' + newDomain[1]
    }
    else{
        return domain;
    }
}

pronoun.forEach(elementPronoun => {
    adj.forEach(elementAjd => {
        noun.forEach(elementNoun => {
            extension.forEach(elementExtension => {
                let domain = elementPronoun + elementAjd + elementNoun + '.' + elementExtension;
                console.log(hack(domain));
            });
        });
    });
});

// Practicing map
// let newArrayNounTwo = noun.map(element => {
//     return element.substring(element.length - 2, element.length);
// });


// let newArrayNounThree = noun.map(element => {
//     return element.substring(element.length - 3, element.length);
// });
// console.log(newArrayNounTwo);
// console.log(newArrayNounThree);
// Another way to do it
// for (let index = 0; index < noun.length; index++) {
//     // For two
//     // console.log(elementExtension);
//     // console.log(elementNoun.substring(0, elementNoun.length - 3));
//     if (elementExtension === newArrayNounThree[index]) {
//         console.log(elementPronoun + elementAjd + elementNoun.substring(0, elementNoun.length - 2) + '.' + elementNoun.substring(elementNoun.length - 2, elementNoun.length));
//     } 
//     else if (elementExtension === newArrayNounTwo[index]){
//         console.log(elementPronoun + elementAjd + elementNoun.substring(0, elementNoun.length - 3) + '.' + elementNoun.substring(elementNoun.length - 3, elementNoun.length));
//     }
//     else {
//         console.log(elementPronoun + elementAjd + elementNoun + '.' + elementExtension);
//     }
// }