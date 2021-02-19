console.log("Something is here");

  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let extension = ['.com', '.net', '.us', '.io'];

  pronoun.forEach(elementPronoun => {
      adj.forEach(elementAjd => {
          noun.forEach(elementNoun => {
              console.log(elementPronoun + elementAjd + elementNoun);
          });
      });
  });