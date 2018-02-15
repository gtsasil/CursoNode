var mysql = require('mysql');

var connMySQL = function(){
	console.log('Conexao com o db foi estabelecida');
	return connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'portal_noticias'
	});
}

module.exports = function(){
	console.log('O autoload carregou o modulo de conexao com db');
	return connMySQL;	
}