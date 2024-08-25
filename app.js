import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const myElement = document.getElementById('app');
const myRoot = createRoot(myElement);

const background = <img
className='background'
alt='ocean'
src='/images/ocean.jpg' />

const title = '';
const images = [];
for (const animal in animals) {
  images.push(
    <img
    key={animal}
    className='animal'
    src=
    {animals[animal].image}
    alt={animal}
    aria-label={animal}
    role='button'
    onClick={displayFact}
    />
  );
}

function displayFact(e) {
const animalName=e.target.alt;
const randomIndex=Math.floor(Math.random()*animals[animalName].facts.length);
const funFact=animals[animalName].facts[randomIndex];
document.getElementById('fact').innerHTML = funFact;
}

const showBackground = true;

const animalFacts = (
<div>
  <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
  {showBackground && background}
  <div className='animals'>
  {images}
  </div>
  <p id='fact'></p>
</div>
);

myRoot.render(animalFacts);