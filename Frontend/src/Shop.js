/**
 * Created by chaika on 02.02.16.
 */
var Templates = require('./Templates');
var Item_List = null;
var API = require('./API');

//HTML едемент куди будуть додаватися піци
var $pizza_list = $("#pizza_list");

function showItemList(list) {

	$pizza_list.html("");

	function showOneItem(item) {
		var html_code = Templates.Shop_Item({
			item: item
		});

		var $node = $(html_code);

		$pizza_list.append($node);
	}

	list.forEach(showOneItem);
}

// function filterPizza(filter) {
// 	//Масив куди потраплять речі які треба показати
// 	var item_shown = [];
//
// 	Item_List.forEach(function (item) {
// 		if (filter === '') {
// 			item_shown.push(item);
// 		} else if (pizza.content[filter]||
// 			(filter === 'no-meat' && (item.type==='Вега піца'))) {
// 			item_shown.push(item);
// 		}
// 	});
//
// 	//Показати відфільтровані піци
// 	showPizzaList(pizza_shown);
// 	$('#all-pizzas-counter').html(pizza_shown.length);
// }

function initialiseShop() {
	//Показуємо усі піци
	API.getItemList(function(err, data){
		if(!err){
			Item_List=data;
			showItemList(data);
		}else{
			console.log(err);
		}
	});
	
}

//exports.filterPizza = filterPizza;
exports.initialiseShop = initialiseShop;
