This project is serving as an example for how to structure your async calls in a way that separates the backend logic totally from your react application logic.
The example is built purely with react ,nothing fancy(no redux) ,just to make it clear and simple.

in The next section ,I will describe why you would need to go for such separation and how it makes your life easier.
## Scenarios 
you are developing your application which consumes an API (or may be multiple APIs) ,so you -as usual-,get the specifications for the backend API from the backend team (which maybe you ) , so you go ahead and start implementing your application with the specified format you are expecting from the backend side.

A few weeks later, you find out that the backend is being changed to suit the new features for your application , and suddenly you have to accomdate changes in the payload which may break your entire app, you already wrote alot of code to handle the coming payload and it's too hard to separate it from regular code.

Now comes a problem (which I myself have seen in companies) ,who should accomdate the change? should the backend try somehow to keep the API as it's ,no matter how ugly the changes they need to made are ? or should just the frontend accept the new formats and fix their code somehow ? Well ,it's a lose-lose situation ,both sides will write shitty code anyway.

A more general situation is that you are dealing with a public API (Dialogflow for example) , you are forced to accomdate these changes.


## Solution
A good solution would be that we separate the logic that processes the incoming data from the app logic , if your application is requesting a list ,then it does not need to know how this list is being pulled or extracted from the incoming response.

We could build a separate module (async) that contains all the request you make to the backend ,and for each request you need to return :
-  promise: a promise that your application could listen to.
- extract: a function (or a set of functions) that is fully responsible for processing the data and returing the parts requested from the application.
- codes(optional): an array of codes that contains the status codes expected , and for each code you specify the status (pass or fail),message(message to display to user) . Don't forget to provide a default behaviour if none of the codes matched
