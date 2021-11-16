// Assigns name
let yourName = "Dylan Liesenfelt" 

// Updates name displayed 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Assigning varriables to different cookie types
var gb = 0      // Gingerbread
var cc = 0      // Chocolate Chip
var sugar = 0   // Sugar Sprinkle
var total = gb+cc+sugar   // Total ammount of all the different cookies

// When Ginger Bread "+" button is clicked increases quantity by +1
document.getElementById('add-gb').addEventListener('click', function() {
    gb+=1;
    document.getElementById('qty-gb').innerHTML = gb
    addTotal()
})

// When Ginger Bread "-" button is clicked lowers quantity by -1
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0) // Makes sure quantity can not be a negative value
    {
        gb-=1;
        document.getElementById('qty-gb').innerHTML = gb
        subtractTotal()
    }
})

// When Choclate Chips "+" button is clicked increases quantity by +1
document.getElementById('add-cc').addEventListener('click', function() {
    cc+=1;
    document.getElementById('qty-cc').innerHTML = cc
    addTotal()
})

// When Choclate Chips "-" button is clicked lowers quantity by -1
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) // Makes sure quantity can not be a negative value
    {
        cc-=1;
        document.getElementById('qty-cc').innerHTML = cc
        subtractTotal()
    }
})

// When Sugar Cookie "+" button is clicked increases quantity by +1
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar+=1;
    document.getElementById('qty-sugar').innerHTML = sugar
    addTotal()
})

// When Sugar Cookies "-" button is clicked lowers quantity by -1
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) // Makes sure quantity can not be a negative value
    {
        sugar-=1;
        document.getElementById('qty-sugar').innerHTML = sugar
        subtractTotal()
    }
})

//Function that updates the total when adding cookies 
function addTotal() {
    total++; 
    document.getElementById('qty-total').innerHTML = total
}

//Function that updates the total when removing copkies
function subtractTotal() {
    total--;
    document.getElementById('qty-total').innerHTML = total
}