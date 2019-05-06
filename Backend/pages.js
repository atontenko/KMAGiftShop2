/**
 * Created by chaika on 09.02.16.
 */
exports.mainPage = function (req, res) {
	res.render('mainPage', {
		pageTitle: 'Головна'
	});
};

exports.shopPage = function (req, res) {
	res.render('shopPage', {
		pageTitle: 'Магазин'
	})
};
