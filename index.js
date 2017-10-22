//http://www.touropia.com/tourist-attractions-in-the-usa/

var USTravelGuideData = {
    "grand canyon": {
        "about": "located in northern Arizona and is one of the great tourist attractions in the United States",
        "whatToSee": "is not the deepest or the longest canyon in the world but the overwhelming size and its intricate and colorful landscape offers visitor spectacular vistas that are unmatched throughout the world"
    },
    "manhattan": {
        "about": "is one of New York’s five boroughs and is what people most often think of when they picture New York City",
        "whatToSee": "You can Walk in the shadow of the skyscrapers, picture the Statue of Liberty, see a Broadway show , climb the Empire State building, or stagger around a museum."
    },
    "yellowstone": {
        "about": "This National Park was the world’s first national park, set aside in 1872 to preserve the vast number of geysers, hot springs, and other thermal areas, as well as to protect the incredible wildlife and rugged beauty of the area",
        "whatToSee": "the park contains half of all the world’s known geothermal features, with more than 10,000 examples of geysers and hot springs. In addition, black bears, grizzly bears, deer, elk, bison and wolves can all be found within the park borders"
    },
    "golden gate bridge": {
        "about": "is a suspension bridge spanning the Golden Gate, the strait between San Francisco and Marin County to the north",
        "whatToSee": "was the longest suspension bridge span in the world when it was completed in 1937, and has become an internationally recognized symbol of San Francisco and California"
    },
    "niagara falls": {
        "about": "Situated between the state of New York and the province of Ontario, Niagara Falls is one of the most spectacular natural wonders on the North American continent",
        "whatToSee": "with more than 14 million visitors each year it is one of the most visited tourist attraction in the world"
    },
    "kilauea": {
        "about": "is the most recent of a series of volcanoes that have created the Hawaiian Archipelago. It is a very low, flat shield volcano, vastly different in profile from the high, sharply sloping peaks of stratovolcanoes",
        "whatToSee": "is one of the most active volcano on the Earth, an invaluable resource for volcanologists"
    },
    "florida keys": {
        "about": "are a 120 mile long chain of tropical islands curving around the base of the Florida peninsula, connected to the mainland by a series of bridges",
        "whatToSee": "is the most spectacular bridge, the Seven Mile Bridge in the Lower Keys, has been frequently used as a location for films including True Lies and Fast 2 Furious"
    },
    "las vegas strip": {
        "about": "The gambling mecca of the world, Las Vegas is situated in the midst of the southern Nevada desert landscape",
        "whatToSee": " It features giant mega-casino hotels, decorated with lavish care and attention to detail to create a fantasy-like atmosphere"
    },
    "denali national park": {
        "about": "is located in Interior Alaska and contains Mount McKinley, the highest mountain in North America. The word “Denali” means “the high one” in the native Athabaskan language and refers to Mount McKinley",
        "whatToSee": "the park protects an incredible wilderness area that contains grizzly bears, caribou, moose, wolves, and numerous other creatures"
    },
    "white house": {
        "about": "is in Washington DC is the official residence and office of the President of the United States",
        "whatToSee": " tours are available only for groups of 10 or more and must be requested up to six months in advance through your member of Congress or your country’s US Ambassador"
    },
    "Grand Canyon": {
        "about": "located in northern Arizona and is one of the great tourist attractions in the United States",
        "whatToSee": "is not the deepest or the longest canyon in the world but the overwhelming size and its intricate and colorful landscape offers visitor spectacular vistas that are unmatched throughout the world"
    },
    "Manhattan": {
        "about": "is one of New York’s five boroughs and is what people most often think of when they picture New York City",
        "whatToSee": "You can Walk in the shadow of the skyscrapers, picture the Statue of Liberty, see a Broadway show , climb the Empire State building, or stagger around a museum."
    },
    "Yellowstone": {
        "about": "This National Park was the world’s first national park, set aside in 1872 to preserve the vast number of geysers, hot springs, and other thermal areas, as well as to protect the incredible wildlife and rugged beauty of the area",
        "whatToSee": "the park contains half of all the world’s known geothermal features, with more than 10,000 examples of geysers and hot springs. In addition, black bears, grizzly bears, deer, elk, bison and wolves can all be found within the park borders"
    },
    "Golden Gate Bridge": {
        "about": "is a suspension bridge spanning the Golden Gate, the strait between San Francisco and Marin County to the north",
        "whatToSee": "was the longest suspension bridge span in the world when it was completed in 1937, and has become an internationally recognized symbol of San Francisco and California"
    },
    "Niagara Falls": {
        "about": "Situated between the state of New York and the province of Ontario, Niagara Falls is one of the most spectacular natural wonders on the North American continent",
        "whatToSee": "with more than 14 million visitors each year it is one of the most visited tourist attraction in the world"
    },
    "Kilauea": {
        "about": "is the most recent of a series of volcanoes that have created the Hawaiian Archipelago. It is a very low, flat shield volcano, vastly different in profile from the high, sharply sloping peaks of stratovolcanoes",
        "whatToSee": "is one of the most active volcano on the Earth, an invaluable resource for volcanologists"
    },
    "Florida Keys": {
        "about": "are a 120 mile long chain of tropical islands curving around the base of the Florida peninsula, connected to the mainland by a series of bridges",
        "whatToSee": "is the most spectacular bridge, the Seven Mile Bridge in the Lower Keys, has been frequently used as a location for films including True Lies and Fast 2 Furious"
    },
    "Las Vegas Strip": {
        "about": "The gambling mecca of the world, Las Vegas is situated in the midst of the southern Nevada desert landscape",
        "whatToSee": " It features giant mega-casino hotels, decorated with lavish care and attention to detail to create a fantasy-like atmosphere"
    },
    "Denali National Park": {
        "about": "is located in Interior Alaska and contains Mount McKinley, the highest mountain in North America. The word “Denali” means “the high one” in the native Athabaskan language and refers to Mount McKinley",
        "whatToSee": "the park protects an incredible wilderness area that contains grizzly bears, caribou, moose, wolves, and numerous other creatures"
    },
    "White House": {
        "about": "is in Washington DC is the official residence and office of the President of the United States",
        "whatToSee": " tours are available only for groups of 10 or more and must be requested up to six months in advance through your member of Congress or your country’s US Ambassador"
    }
};

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

        if (event.session.application.applicationId !== "amzn1.ask.skill.7db14d7e-254f-4042-9e1a-f278a67db3b6") {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({
                requestId: event.request.requestId
            }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {

    var intent = intentRequest.intent
    var intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == "USTravelGuideIntent") {
        handleUSTravelGuideResponse(intent, session, callback);
    } else if (intentName == "USTravelGuideBlankSlotIntent") {
        handleBlankSlotRequest(intent, session, callback);
    } else if (intentName == "AMAZON.YesIntent") {
        handleYesResponse(intent, session, callback);
    } else if (intentName == "AMAZON.NoIntent") {
        handleNoResponse(intent, session, callback);
    } else if (intentName == "AMAZON.HelpIntent") {
        handleGetHelpRequest(intent, session, callback);
    } else if (intentName == "AMAZON.StopIntent") {
        handleFinishSessionRequest(intent, session, callback);
    } else if (intentName == "AMAZON.CancelIntent") {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid Intent";
    }
}

function handleBlankSlotRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    var speechOutput = "I did not understand that." +
        "I can tell you details about all the following tourist locations in US: " +
        "Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls, Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House." +
        "Which location are you interested in ? Remember, I can only give information about one location at a time.";

    var repromptText = speechOutput;
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}
/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {

    var speechOutput = "Welcome to US Travel Guide ! I can tell you about all the famous tourist location in US:" +
        "Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls,Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House." +
        " I can only give details about one at a time. Which tourist location are you interested in ?"

    var reprompt = "Which tourist location are you interested in ? You can find out about Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls,Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House."

    var header = "US Travel Guide!";

    var shouldEndSession = false;

    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": reprompt
    }

    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession));
}

function handleUSTravelGuideResponse(intent, session, callback) {
    var location = intent.slots.Location.value.toLowerCase();
    if (location == "") {
        var speechOutput = "I did not understand that. Try asking about another like Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls,Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House. ";
        var repromptText = "Try asking about another tourist location";
        var header = "Not Famous Enough";
    } else if (!USTravelGuideData[location]) {
        var speechOutput = "These US tourist locations are very famous. Try asking about another like Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls,Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House. ";
        var repromptText = "Try asking about another tourist location";
        var header = "Not Famous Enough";
    } else {
        var about = USTravelGuideData[location].about;
        var whatToSee = USTravelGuideData[location].whatToSee;
        var speechOutput = capitalizeFirst(location) + " " + about + " and " + whatToSee + ". Do you want to hear about more tourist locations ?";
        var repromptText = "Do you want to hear about more tourist locations in US?";
        var header = capitalizeFirst(location);
    }
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
}

function handleYesResponse(intent, session, callback) {
    var speechOutput = "Great ! Which tourist location ? You can find out about Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls,Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House."
    var repromptText = speechOutput;
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleNoResponse(intent, session, callback) {
    handleFinishSessionRequest(intent, session, callback);
}

function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    var speechOutput = "I can tell you details about all the following tourist locations in US:" + "Grand Canyon, Manhattan, Yellowstone, Golden Gate Bridge, Niagara Falls,Kilauea, Florida Keys, Las Vegas Strip, Denali National Park, White House." +
        "Which location are you interested in ? Remember, I can only give information about one location at a time.";

    var repromptText = speechOutput;
    var shouldEndSession = false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye! Thank you for using US Travel Guide  !", "", true));
}


// ------- Helper functions to build responses for Alexa -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

function capitalizeFirst(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
