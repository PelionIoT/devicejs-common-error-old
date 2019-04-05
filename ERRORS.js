/*
 * Copyright (c) 2018, Arm Limited and affiliates.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _base = 530;

var http_errors = [
	{
		status: _base + 1,
		statusText: "No account tied to user",  // No account in cloud.wigwag.com for user xyz
		shortCode: "NO_ACCOUNT"
	},
	{
		status: _base + 2,
		statusText: "No DeviceJS API key tied to account", // Account created / email verified, but no Relay ever paired (so no account)
		shortCode: "NO_API_KEY"
	},
	{
		status: _base + 3,
		statusText: "This device is already bound to an account", // Relay Already bound to an account
		shortCode: "ALREADY_BOUND"
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
