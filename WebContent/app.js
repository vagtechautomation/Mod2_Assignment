(function (){
	'use strict';
	
	var shoppingList = [
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
	
angular.module('ShoppingListApp',[])
		.controller('ShoppingListController',ShoppingListController);
	
		ShoppingListController.$inject = ['$scope'];
		
		function ShoppingListController($scope){
			$scope.shoppingList = shoppingList
			$scope.boughtItemList = boughtItemList;
			
			$scope.updateList = function(itemIndex){
				var item = shoppingList[itemIndex];
		
				var newItem ={
						name:item.name,
						quantity:item.quantity
			
				};
				$scope.boughtItemList.push(newItem);
				$scope.shoppingList.splice(itemIndex,1);
			}
		}
})();