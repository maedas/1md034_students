function menuItem(name, img, kCal, all) {
    this.name = name; // The this keyword refers to the object itself
    this.img = img;
    this.kCal = kCal;
    this.Allergens = all;
    this.heading = function() {
        return this.name + ' - Calories? - ' + this.kCal;
    };
}

let og =  new menuItem('The Original', '/img/rawburger.jpg', 'Yes.', 'Cheese & Gluten');
let ex =  new menuItem('The Extreme', '/img/vegburger.jpg', 'This is not your main problem.', 'Ron Swanson is allergic to this');
let gr =  new menuItem('The Gordon Ramsay', '/img/ramsayburger.jpg', 'It\'s fucking raw you fucking donkey.', 'Cheese & Gluten');
let wh =  new menuItem('The "why are you here?"', '/img/burger.jpg', 'Only on Tuesdays.', 'Cheese & Gluten');
let ss =  new menuItem('The Sporty Spice', '/img/sneakerburger.jpg', 'Calorie Spice got them all', 'Cheese & Gluten');

console.log(og.heading());
console.log(ex.heading());
console.log(gr.heading());
console.log(wh.heading());
console.log(ss.heading());
/*
let p0 = document.createElement('p');
let t0 = document.createTextNode(og.heading());
p0.appendChild(t0);
let b0 = document.getElementById('b0');
b0.appendChild(p0);

let p1 = document.createElement('p');
let t1 = document.createTextNode(ex.heading());
p1.appendChild(t1);
let b1 = document.getElementById('b1');
b1.appendChild(p1);

let p2 = document.createElement('p');
let t2 = document.createTextNode(gr.heading());
p2.appendChild(t2);
let b2 = document.getElementById('b2');
b2.appendChild(p2);

let p3 = document.createElement('p');
let t3 = document.createTextNode(wh.heading());
p3.appendChild(t3);
let b3 = document.getElementById('b3');
b3.appendChild(p3);

let p4 = document.createElement('p');
let t4 = document.createTextNode(ss.heading());
p4.appendChild(t4);
let b4 = document.getElementById('b4');
b4.appendChild(p4);
*/
