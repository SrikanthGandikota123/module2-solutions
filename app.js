(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;
  buy.items = ShoppingListCheckOffService.toBuyItems();
  buy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.bought(itemIndex);
  };
}
// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.boughtItems();
}
function ShoppingListCheckOffService() {
  var service = this;

	var toBuyItems =
            [
              {name: "Dettol",
               quantity: 2
              },
              {name: "Cakes",
               quantity: 3
              },
              {name: "Notebook",
               quantity: 5
              },
              {name: "Pencils",
               quantity: 12
              },
              {name: "Real Me 3",
               quantity: 4
              },
              {name: "Bags",
               quantity: 1
              }
            ];

	var boughtItems = [];
	service.bought = function(itemIndex) {
          			boughtItems.push(toBuyItems[itemIndex]);
          			toBuyItems.splice(itemIndex, 1);
          	};

          	service.boughtItems = function() {
          			return boughtItems;
          	};

          	service.toBuyItems = function() {
          			return toBuyItems;
          	};
          }

})();
