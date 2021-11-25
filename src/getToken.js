import axios from 'axios';
import * as qs from 'qs';

var data = qs.stringify({
	client_id: '33m37fu1hih5u52b8gmb1as4c6',
	client_secret: '1s2ebtssnvirc1kclkb9gve4kitiqioh00ik9lrb8to8sj5mit9j',
	grant_type: 'client_credentials'
});

var config = {
	method: 'post',
	url: 'https://manutd.auth.eu-west-1.amazoncognito.com/token',
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
