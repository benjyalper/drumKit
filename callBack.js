function anotherEventListener(typeOfEvent, callBack) {//this is an implementation of what happens under the hood in the addEventListenernfunction.
    //detect event code...
    var eventThatHappened = {//this is the object that is created when we call anotherEventListener
        eventType: "keydown",
        key: "p",
        durationOfKeydown: 2
    }

    callBack(eventThatHappened); //we can pass the object that was created back through the callBack method so that the programer can get the event object and use it to see what event triggered the eventListener. but the callback doesnt get called for all types of events, so we have to check if the type of event  that happened is actualy equal to the kind of event the programmer was looking for and only the we triggere our callback function. so:

    if (eventThatHappened.eventType === typeOfEvent) {
        callBack(eventThatHappened);
    }

}
undefined
anotherEventListener("keydown", function (event) {//the parameter of the callBack function can be named anything but by convention it is named event or evt or e.
    console.log(event);//when we console log it we can see that it returns the object that was created that captures some of the properties of the event that took place ("keydown") that triggered the callBack function.

});
VM697: 2 { eventType: 'keydown', key: 'p', durationOfKeydown: 2 }