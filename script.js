function calculateArea() {
  let radius = prompt("Enter the radius of the circle:");
  radius = Number(radius);
  const area = Math.PI * Math.pow(radius, 2);
  alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}
calculateArea();
