
const getConnected = require("./getConnected");

(async () => {

	console.time("main");

	let connected = await getConnected();
	console.log(connected);

	console.timeEnd("main");

})();