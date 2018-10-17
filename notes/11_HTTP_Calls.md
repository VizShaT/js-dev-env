# HTTP Calls

## HTTP Call Approaches

1. Node
	- http
	- request
	
2. Browser
	- XMLHttpRequest
	- jQuery
	- Fetch

3. Node & Browser
	- isomorphic-fetch
	- xhr
	- SuperAgent
	- Axios
	

## Why Centralize API calls?

	- configure all calls
	- Handle preloader logic
	- Handle errors
	- Single seam for mocking
	

## Why Mock HTTP ?

	- Unit Testing
	- Instant Response
	- Keep working when services are down
	- Rapid Prototyping 
	- Avoid inter-team bottlenecks
	- Work offline
	
	

## How to mock HTTP ?
	- Nock
	- Static JSON
	- Create Development Server
		1. api-mock
		2. JSON server
		3. JSON schema faker
		4. Browsersync
		

## Plan for Mocking HTTP
	1. Declare Schema
		- JSON Schema faker
		
	2. Generate Random Data
		- faker.js
		- chance.js
		- randexp.js
		
	3. Serve Data via API
		- JSON server
		5. Express