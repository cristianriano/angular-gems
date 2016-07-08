(function(){
  //          1               2      3
  var app = angular.module('store', ['store-directives']);
  /*
    Modulo: Donde estan los componentes de la app
      1   Libreria angular
      2   Nombre del modulo
      3   Array con Dependencies, vacio
  */

  /*
    Controller: Donde esta el comportamiento
    La funcion del controller se ejcuta cuando el se llama
  */
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      // Añade el review del controller (el del form) a los reviews del producto
      product.reviews.push(this.review);
      // Limpia el formulario al presionar submit
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      canPurchase: true,
      soldOut: false,
      images: [
        'img/dodecahedron-01-full.png',
        'img/dodecahedron-02-full.png'
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      canPurchase: false,
      soldOut: false,
      images: [
        'img/pentagonal-01-full.png'
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }
  ];

}) ();
