/**
 * Created by chaika on 02.02.16.
 */
var fs = require('fs');
var ejs = require('ejs');


exports.Shop_Item = ejs.compile(fs.readFileSync('./Frontend/templates/Item_Template.ejs', "utf8"));
