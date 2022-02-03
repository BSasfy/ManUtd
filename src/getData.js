import axios from 'axios';
//import * as qs from 'qs';
import getToken from './getToken'





const url = "https://api.manunited.io/";

const body = {
    query: `{
        Club(teamName: "Manchester United"){
        TeamName,
        Records{
            Record
            Achievement
            Notes
          }
        }
    }`
};



async function getData() {
    // const accessToken = await getToken();
    if (true) {
        const header = {
            "Content-Type": 'application/json',
            "Authorization": `Bearer eyJraWQiOiJFYUVoeXNDU2lcL0lrb2JudmszSEwxS25JZks5NDJMbXpEamJkNDNnM1wvbXM9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyaGNocnE5bnV2Ymc3cm9qaDUyN3NtdjdmcSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiaHR0cHM6XC9cL2FwaS5tYW51bml0ZWQuaW9cL2FwaS5yZWFkIiwiYXV0aF90aW1lIjoxNjQzMjkxMjIzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0yLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtMl9oRU5GeGxrdlIiLCJleHAiOjE2NDMyOTQ4MjMsImlhdCI6MTY0MzI5MTIyMywidmVyc2lvbiI6MiwianRpIjoiN2JiZGY1ZjItMzdmOS00OTc5LTlmNWQtYWZiNmI3ZjhhNTBiIiwiY2xpZW50X2lkIjoiMmhjaHJxOW51dmJnN3Jvamg1MjdzbXY3ZnEifQ.M42jfTKMVjFjk25UY01e0pmPWpFBwbgW1kHsIiNIB-nk9XMbAXro1euvAlmO-A3azX0L1sF2eTkK9IR5o9bC-sz8zUwoOXq6SFArSfL5JUgGDCSegRRnFocot0J99W6-pdbzb85pBAA6F-pXC5yZM7VlO1LIriWC6w73Dm8fz3DFMqA_aOKAsoTDcSWxynDQbdo42nyxrTVbs7k_6cCambjqRLwKzU48l0lMH-kR-IC_vpS2G7DdcF0hlnbg9dA6WQzK6Co23cAcorTXcrJPgA2RnJeMy7mq57QdOVDldq-Oh5-i_966aMed9EDFFGPv4LIB1R3oIwLNYWAJre8upw`
        };
        try {

            const rsult = await axios.post(url,
                body, {
                headers: header,
            });

            console.log(rsult.data.data.Club);
            return (rsult.data.data.Club);
        }
        catch (err) {
            console.log(err)
        }
    }

}

export default getData;