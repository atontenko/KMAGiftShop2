var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

function configureEndpoints(app) {
    var pages = require('./pages');
    var api = require('./api');

    app.get('/api/get-item-list/', api.getItemList);
    app.get('/', pages.mainPage);

    app.get('/shop', pages.shopPage);

    app.use(express.static(path.join(__dirname, '../Frontend/www')));
}

function startServer(port) {
    //Створюється застосунок
    var app = express();

    //Налаштування директорії з шаблонами
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    //Налаштування виводу в консоль списку запитів до сервера
    app.use(morgan('dev'));

    //Розбір POST запитів
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Налаштовуємо сторінки
    configureEndpoints(app);


    // app.listen(port, '0.0.0.0', function () {
    //     console.log('My Application Running on http://194.44.143.139:'+port+'/');
    // });

    app.listen(port, function () {
        console.log('My Application Running on http://localhost:'+port+'/');
    });
}

exports.startServer = startServer;
