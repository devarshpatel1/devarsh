// Name : Devarsh Patel
// File : main.js
// Date : 2024-07-20
// Description: Silly story generator exercise For MDN Docs : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator 


// Create const to Get references to elements in the HTML document
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Function to get a random value from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Original story text with placeholders
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Arrays of possible values to replace placeholders in the story
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


// Function to generate a new story.
function result() {
    let newStory = storyText;

    // Get random values to replace placeholders
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // Replace placeholders in the story text with random values
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
  
    // If a custom name is entered, replace 'Bob' with the custom name
    if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll('Bob', name);
    }
  
    // If the UK radio button is checked, convert weights and temperatures to UK units
    if (document.getElementById("uk").checked) {
      const weight = `${Math.round(300*0.0714286)} stone`;
      const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }
  
    // Display the new story
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }