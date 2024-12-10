// const instance = new TypeIt('#iam', {
//   strings: ['React Native Developer', 'JS developer', 'React developer', 'a traveler'],
//   speed: 90,
//   loop: true,
//   nextStringDelay: 2500,
//   breakLines: false,
//   waitUntilVisible: true
// }).go();


new TypeIt("#iam", {
  strings: "This is my string!",
  speed: 75,
  loop: true,
}).go();




// const diplomaPopUp = document.getElementById("diploma_img");
// const element_item = document.querySelector(".element-item");

// const modal_portfolio = document.getElementById("portfolio_1");
// const modal = document.getElementById("diploma_pop")
// const modal1 = document.getElementById("diploma_pop1")

// const backdrop = document.getElementById("backdrop")

// function diplomaPopFunc(el) {
//   el.classList.toggle("visible")
//   backdropPop(); 
// }


//  function portfolioPopUp() {
//   modal_portfolio.classList.toggle("visible")
//   backdropPop();
// }

// function backdropPop() {
//   backdrop.classList.toggle("visible")
// }

// element_item.addEventListener("click", portfolioPopUp);



// const backdropClickHandler = () => {
//   portfolioPopUp()
// }

// backdrop.addEventListener("click", backdropClickHandler)




// init Isotope
var iso = new Isotope( '.grid', {
  itemSelector: '.element-item',

});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function( itemElem ) {
    var number = itemElem.querySelector('.number').textContent;
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function( itemElem ) {
    var name = itemElem.querySelector('.name').textContent;
    return name.match( /ium$/ );
  }
};

// bind filter button click
var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});

// change is-checked class on buttons
var buttonGroups = document.querySelectorAll('.button-group');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
    event.target.classList.add('is-checked');
  });
}




lightbox.option({
  'showImageNumberLabel': false
})



