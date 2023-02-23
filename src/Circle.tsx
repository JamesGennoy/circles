import { useEffect, useState } from 'react';
import classes from './circle.module.css';
import { CircleType } from './circle.types';

export function Circle(props: CircleType) {
  const { x, y, circumference, color } = props;
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const borderWidth = 5;
  const left = x - (borderWidth + width) / 2;
  const top = y - (borderWidth + height) / 2;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeight(circumference);
      setWidth(circumference);
    }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={classes.circle}
      data-testid="circle"
      style={{
        left,
        top,
        height: `${height}px`,
        width: `${width}px`,
        borderWidth: `${borderWidth}px`,
        borderColor: color,
      }}
    />
  );
}
