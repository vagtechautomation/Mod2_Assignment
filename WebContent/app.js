(function (){
	'use strict';
	
	angular.module('ShoppingListApp',[])
		.controller('ToBuyListController',ToBuyListController)
		.controller('BoughtListController',BoughtListController)
		.service('ShoppingListService',ShoppingListService);
	
		ToBuyListController.$inject = ['ShoppingListService'];
		
		function ToBuyListController(ShoppingListService){
			var buyCntrl = this;
			buyCntrl.items = ShoppingListService.getToBuyItems();
			
			buyCntrl.itemBought = function(itemIndex,name,quantity){
				ShoppingListService.itemBought(itemIndex,name,quantity);
			}			
		}	
		BoughtListController.$inject = ['ShoppingListService'];
			
		function BoughtListController(ShoppingListService){
			var boughtCntrl = this;
			boughtCntrl.items = ShoppingListService.getBoughtItems();
		
			}
		
		function ShoppingListService(){
			var service = this;
			
			var toBuyItems= [
		            		{
		            			name:" Milk ",
		            			quantity : "3 Gallons"
		            			
		            		},
		            		{
		            			name : "Chips",
		            			quantity:" 3 bags"
		            		},
		            		{
		            			name:"Soda",
		            			quantity:"1 case"
		            		},
		            		{
		            			name:"Cookies",
		            			quantity:"1 box"
		            		},
		            		{
		            			name:"Water",
		            			quantity:"1 case"
		            		}
		            	];
		  var boughtItemList=[];
		  
		  service.removeItem = function (itemIndex) {
			  toBuyItems.splice(itemIndex, 1);
		  };

		  service.getToBuyItems = function () {
		    return toBuyItems;
		  };
		  service.addBoughtItems = function(name,quantity){
			  var newItem={
			               name:name,
			               quantity:quantity
			  };
			  boughtItemList.push(newItem);
		  };
		  service.getBoughtItems = function(){
			  return  boughtItemList;
		  };
		  service.itemBought = function(itemIndex,name,quantity){
			  service.addBoughtItems(name,quantity)
			  service.removeItem(itemIndex);
			}
		}

})();