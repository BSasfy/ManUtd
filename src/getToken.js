import axios from 'axios';
import * as qs from 'qs';

var data = qs.stringify({
	client_id: '2hchrq9nuvbg7rojh527smv7fq',
	client_secret: '9i3qjkpjd5qvamq9lp7l2lvo1alfecobujrgmrfqt13bst0s6dg',
	grant_type: 'client_credentials'
});

var config = {
	method: 'post',
	url: 'https://manutd.auth.eu-west-2.amazoncognito.com/token',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	data: data
};

async function getToken() {
	axios(config)
		.then((response) => {
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			console.log(error);
		});
}

export default getToken;
