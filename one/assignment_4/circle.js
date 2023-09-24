"use strict";
function calculateCircleArea(radius) {
    const area = 3.14 * radius ** 2;
    return area;
}
const circleRadius = 5;
const areaOfCircle = calculateCircleArea(circleRadius);
console.log(`The area of the circle with radius ${circleRadius} is ${areaOfCircle}`);
