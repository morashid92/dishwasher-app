Node Version
`14.0.0`

# dishwasher-app
This project contains a server side proxy that makes calls to an external API which makes use of the cors middleware to allow Cross-Origin Resource Sharing. It also takes only the data required in order to display a list of dishwashers `/dishwashers` and also exposes an endpoint for a specific product `product/:id`.

There is also a client side application which is written in Typescript and React framework which is used as it is gives us the benefit of being easy to read, test and write re usable code. The choice of Typescript enforces typing and thus eliminates bugs and also fully compatible with vanilla Javascript. This app makes use of React Router to render two main routes firstly. the home page `/`, which lists only the first 20 the dishwashers. Secondly, after clicking on a dishwasher the user is navigated to the product page which them lists the details of that particular dishwasher/product `/product/:id`.

## Running the Application
In order to run the application, you must run both client and server side apps: 

### Start Server
On a new terminal, change directory to `/server` and then run:
- `npm install`
- `npm run server`

### Start Client Application
On a separate terminal, change directory to `/client` and then run:
- `npm install`
- `npm start`
- visit `localhost:4000` and you will now see the application up and running

## Running Tests

### Unit Tests
The unit tests are written using the Jest library. This is recommended by the React community and hence a great choice for unit testing. The tests also make use of Enzyme to test that the individual components are tested using html elements and classes. The usual format for tests are that for each component, there is a corresponding test in the same directory level. 

To run the unit tests, open a new terminal window and type `npm run test:unit`

### Browser Tests

The browser tests make use of Jest and Puppeteer and are configured using a set up and teardown approach. This is so that configuration of the tests is kept in one place away from the actual test files. The tests use `jest-environment-node` to configure a node environment and to launch the chromium browser (This is currently set to point to Chromium binary path on my machine and ideally should be running in docker but I have kept it simple for the sake of this coding test).

*Note: The tests also rely on the Server app to be running as they are not yet configured to respond to mocked data which would be my ideal approach*

To run the unit tests, open a new terminal window and type `npm run test:browser`


## Accessibility
People often use smart phones, smart watches and other devices with small screens, different input modes or can potentially be a blind user using your website. Therefore, I have tried by best to ensure that I am keeping these users in mind when developing front end applications. 

As part of good practice, I performed a series of accessibility checks to ensure that these users are catered for on both pages and lead me to certain decisions, from running voice over on mac and determining tabIndexes to certain colour choices such as a darker grey with a white background. 


### Checks
| Page          | tabIndexes    | title    |   Colour Contrast    | Image Alt |
| ------------- |:-------------:| -----:   |--------------------: |----------:|
| `/`           | Present       |Present   | Pass WCAG AA WCAG AAA|Present    |
| `/product/:id`| Present       |Present   | Pass WCAG AA WCAG AAA|Present    |



## Security
React offers sanitizing out of the box which is another great reason to be using it. Furthermore, I have made use of a libraray called Dompurify which will help to sanitize the html code coming from the paragraph for the product information part. 




