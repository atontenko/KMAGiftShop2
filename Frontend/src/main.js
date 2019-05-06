/**
 * Created by chaika on 25.01.16.
 */

$(function () {
	//This code will execute when the page is ready
	var Shop = require('./Shop');
	var API = require('./API');
	Shop.initialiseShop();

	// //sorting buttons
	// $("#all-pizza-filter").click(function () {
	// 	Shop.filterPizza('');
	// 	$("#filter-title").html($(this).find('a').html() + ' піци');
	// 	$('.nav li').removeClass('active');
	// 	$(this).addClass('active');
	// });
	//
	// $("#meat-pizza-filter").click(function () {
	// 	Shop.filterPizza('meat');
	// 	$("#filter-title").html($(this).find('a').html());
	// 	$('.nav li').removeClass('active');
	// 	$(this).addClass('active');
	// });
	//
	// $("#seefood-pizza-filter").click(function () {
	// 	Shop.filterPizza('ocean');
	// 	$("#filter-title").html($(this).find('a').html());
	// 	$('.nav li').removeClass('active');
	// 	$(this).addClass('active');
	// });
	//
	// $("#mushroom-pizza-filter").click(function () {
	// 	Shop.filterPizza('mushroom');
	// 	$("#filter-title").html($(this).find('a').html());
	// 	$('.nav li').removeClass('active');
	// 	$(this).addClass('active');
	// });
	//
	// $("#pineapple-pizza-filter").click(function () {
	// 	Shop.filterPizza('pineapple');
	// 	$("#filter-title").html($(this).find('a').html());
	// 	$('.nav li').removeClass('active');
	// 	$(this).addClass('active');
	// });
	//
	// $("#no-meat-pizza-filter").click(function () {
	// 	Shop.filterPizza('no-meat');
	// 	$("#filter-title").html($(this).find('a').html());
	// 	$('.nav li').removeClass('active');
	// 	$(this).addClass('active');
	// });

});
