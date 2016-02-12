

var _base = 520;

var http_errors = [
	{
		status: _base + 1,
		statusText: "No account tied to user"  // No account in cloud.wigwag.com for user xyz
	},
	{
		status: _base + 2,
		statusText: "No DeviceJS API key tied to account" // Account created / email verified, but no Relay ever paired (so no account)
	}

	// byMessage: {

	// },
	// byCode: {
	// 	501: {

	// 	}
	// }
];

module.exports = {
	HTTP: http_errors,
	other: {
		stuff: 'stuff'
	}
};