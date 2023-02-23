import { MouseEvent, MouseEventHandler, useRef, useState } from 'react';
import classes from './app.module.css';
import { Circle } from './Circle';
import { CircleType } from './circle.types';

export function App() {
  const [circles, setCircles] = useState<CircleType[]>([]);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick: MouseEventHandler = (event) => {
    if (buttonContainerRef?.current?.contains(event.target as Node)) {
      return;
    }
    const { clientX, clientY } = event;
    const x = clientX;
    const y = clientY;
    const circumference = getRandomNumber();
    const color = getRandomHexColor();
    setCircles((prev) => [...prev, { x, y, circumference, color }]);
  };

  const handleBackButtonClick: MouseEventHandler = () => {
    setCircles((prev) => prev.slice(0, -1));
  };

  const handleResetButtonClick: MouseEventHandler = () => {
    setCircles([]);
  };

  return (
    <div
      data-testid="canvas"
      className={classes.canvas}
      onClick={handleCanvasClick}
    >
      {circles.map((circle) => (
        <Circle {...circle} />
      ))}
      <div className={classes.buttonContainer} ref={buttonContainerRef}>
        <button onClick={handleBackButtonClick}>{'⏮️'}</button>
        <button onClick={handleResetButtonClick}>{'🔄️'}</button>
      </div>
    </div>
  );
}

function getRandomNumber(min: number = 25, max: number = 250): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const dictionary = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

function getRandomHexColor(): string {
  const value = new Array(6)
    .fill(0)
    .map(() => dictionary[getRandomNumber(0, dictionary.length)]);
  return `#${value.join('')}`;
}
