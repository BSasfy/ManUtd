import Axios from 'axios'

const data = {
  grant_type: 'client_credentials',
  client_id: '2hchrq9nuvbg7rojh527smv7fq', 
  client_secret: '9i3qjkpjd5qvamq9lp7l2lvo1alfecobujrgmrfqt13bst0s6dg',
};

const reqConfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

async function getToken() {
  console.log("Hello World");
  
  try {
    const result = await Axios.post('https://manutd.auth.eu-west-2.amazoncognito.com/token', data, reqConfig);

    console.log ('result>>>>>', result);

  }
  catch (error){
    console.log('error>>>>')
  }


}

export default getToken

