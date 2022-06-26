var apiURL1 = "https://mighty-temple-90200.herokuapp.com/https://clist.by:443/api/v2/contest/?username=frogodrig&api_key=d300085464ccc8d93808b055ca6cf6502573470d&format=json&order_by=start";
var apiURL2 = "https://boiling-sea-29091.herokuapp.com/https://clist.by:443/api/v2/contest/?username=frogoman&api_key=45d140d84e90b94717fbae9fd41109917e29633c&format=json&order_by=start";
var hosts = "codechef.com%2Ccodeforces.com%2Cgeeksforgeeks.org%2Chackerearth.com%2Cleetcode.com%2Ctopcoder.com%2Catcoder.jp%2Ccodingcompetitions.withgoogle.com";

var now = new Date();
const nowString = (now.toISOString().substring(0, 11) + now.toISOString().substring(11, 19));

var todayStart = new Date();
todayStart.setDate(todayStart.getDate() - 32);
todayStart.setHours(0, 0, 0);
var todayStartString = (todayStart.toISOString().substring(0, 11) + todayStart.toISOString().substring(11, 19));

async function callAPI() {
	try {
		const response = await fetch(apiURL1 + `&resource=${hosts}&end__gt=${nowString}&start__gt=${todayStartString}`);
		const data = await response.json();

		return {
			data
		}
	} catch {
		const response = await fetch(apiURL2 + `&resource=${hosts}&end__gt=${nowString}&start__gt=${todayStartString}`);
		const data = await response.json();

		return {
			data
		}
	}
}

export default callAPI;
