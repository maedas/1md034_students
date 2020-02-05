function menuItem(name, img, kCal, all) {
    this.name = name; // The this keyword refers to the object itself
    this.img = img;
    this.kCal = kCal;
    this.Allergens = all;
    this.name = function() {
        return this.name + ' - ' + this.kCal;
    };
}

let og =  new menuItem('The Original', /img/rawburger.jpg, 'Yes.', 'Cheese & Gluten');
let ex =  new menuItem('The Extreme', /img/vegburger.jpg, 'This is not your main problem', 'Ron Swanson is allergic to this');
let gr =  new menuItem('The Gordon Ramsay', /img/ramsayburger.jpg, 'Only on Tuesdays.', 'Cheese & Gluten');
let wh =  new menuItem('The "why are you here?"', /img/burger.jpg, 'Only on Tuesdays.', 'Cheese & Gluten');
let ss =  new menuItem('The Sporty Spice', /img/sneakerburger.jpg, 'Only on Tuesdays.', 'Cheese & Gluten');

console.log(og.name());
console.log(ex.name());
console.log(gr.name());
console.log(wh.name());
console.log(ss.name());
