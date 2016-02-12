

var _base = 530;

var http_errors = [
	{
		status: _base + 1,
		statusText: "No account tied to user"  // No account in cloud.wigwag.com for user xyz
	},
	{
		status: _base + 2,
		statusText: "No DeviceJS API key tied to account" // Account created / email verified, but no Relay ever paired (so no account)
	}

	/**
	 * List all further errors here.
	 *
	 * These should be things which may be used across applications and components.
	 * 
	 */
];

module.exports = {
	HTTP: http_errors,
	other: {
		stuff: 'stuff'
	}
};