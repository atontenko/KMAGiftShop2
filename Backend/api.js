
var Item_List = require('./data/Item_List');

exports.getItemList = function (req, res) {
	res.send(Item_List);
};