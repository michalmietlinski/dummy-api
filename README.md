# dummy-api
simple dummy api node server for testing front-end using dummy data

## Running:
* Npm install
* Npm run start or node server.js

## API:
just run localhost:8099 (or change that in server.js):
localhost:8099/api

Example
localhost:8099/api/alwaysok

##Methods availlable:
* alwaysok (POST/GET)
* alwayswrong (POST/GET)
* sometimeswrong (75% success rate) (POST/GET)
* choosestatus/{{status}} (POST/GET)
* wysiwyg - what you send is what you get
* slow/{{time}} - time optional - if not provided(in seconds) - default is 10 s. for response
