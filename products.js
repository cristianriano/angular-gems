(function(){
  var app = angular.module('store-directives', []);

  /*
    Se pueden crear directivas propias, que se definen en el modulo.
    Estas retornan un objeto que modela su comportamiento:
      restrict:     Tipo de directiva (Atributo o Elemento)
      templateUrl:  El template html que la describe
  */
  app.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "product-descriptions.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict: 'A',
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      // Se crea un controlador para los eventos y funciones de la directiva
      controller: function() {
        // Inicializar variables para evitar errores de selecion al refrescar
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      // El "apodo" del controller dentro de la directiva
      controllerAs: "tab"
    };
  });

  app.directive('productGallery', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: "gallery"
    };
  });



}) ();
