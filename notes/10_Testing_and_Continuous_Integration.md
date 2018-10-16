# Testing and Continuous Integration 

## JavaScript Testing Styles

1. Unit Testing - Single function or module
2. Integration Testing - Interaction between modules
3. UI - Automate interactions with UI

## Unit Testing Decisions

1. Framework
	1. Mocha
	2. Jasmine
	3. Tape
	4. QUnit
	5. AVA
	6. Jest
2. Assertion Library 
	1. Chai
	2. Should.js
	3. expect
3. Helper Libraries
	1. JSDOM 
		- Simulate the browser's DOM
		- Run DOM-related tests without a browser
	2. Cheerio
		- jQuery for the server
		- Query virtual DOM using jQuery selectors 
4. Where to run the tests
	1. Browser
		- Karma, Testem
	2. Headless Browser
		- PhantomJS
	3. In-memory DOM
		- JSDOM
		
5. Where to place the tests
	- in-place or a test folder
6. When to run tests
	- when saving
	
## Why Continuous Integration ?

	- Forget to commit new file
	- Forget to update package.json
	- Commit doesn't run cross-platform
	- Node version conflicts 
	- Bad Merge
	- Didn't run tests
	- Catch mistakes quickly 
	
## What does a CI server do ?

1. Run automated build
2. Run your tests
3. Check code coverage
4. Automate Deployment

## CI servers

1. Travis
2. Appveyor
3. Jenkins
4. CircleCI
5. Semaphore
6. SnapCI


