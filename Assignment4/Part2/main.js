// Name : Devarsh Patel
// File : main.js
// Date : 2024-07-21
// Description: Image gallery exercise For MDN Docs :https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Object containing alternative text for each image */
const alts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

/* Loop through each image in the images array */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    
    /* Add event listener to each image to display it on click */
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}

/* Add click event listener to the button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      /* If the button class is 'dark', change it to 'light' and update text to 'Lighten' */
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      /* If the button class is 'light', change it to 'dark' and update text to 'Darken' */
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  