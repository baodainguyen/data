var pubsub = {};
 
(function(myObject) 
 {
    var topics = {};    // Storage for topics that can be broadcast or listened to
 
    var subUid = -1;    // A topic identifier
 
    // Publish or broadcast events of interest with a specific topic name and arguments such as the data to pass along
    myObject.publish = function( topic, args ) {
        console.log('publish: ' + subUid);
        if ( !topics[topic] ) return false;
        
        // subscribers is a array
        var subscribers = topics[topic];
            
        for(var e of subscribers){
            e.func( topic, args );
        }
//       var len = subscribers ? subscribers.length : 0; while (len--) { subscribers[len].func( topic, args ); }
 
        return this;
    };
 
    // Subscribe to events of interest with a specific topic name and a callback function, to be executed when the topic/event is observed
    myObject.subscribe = function( topic, func ) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
 
        var token = ( ++subUid ).toString();    console.log('subscribe: ' + token, subUid);
        
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 
    // Unsubscribe from a specific topic, based on a tokenized reference to the subscription
    myObject.unsubscribe = function( token ) {
        for ( var m in topics ) {
            if ( topics[m] ) {
                for ( var i = 0, j = topics[m].length; i < j; i++ ) {
                    if ( topics[m][i].token === token ) {
                        topics[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubsub ));

var subscription = pubsub.subscribe( 
    "inbox/newMessage", 
    function ( topics, data ) {
        console.log( "Logging subscription1: " + topics + ": " + data );
    }
);
var subscription2 = pubsub.subscribe( 
    "inbox/newMessage", 
    function ( topics, data ) {
        console.log( "Logging subscription2: " + topics + ": " + data );
    }
);
pubsub.publish( "inbox/newMessage", "hello world!" );
pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );
pubsub.publish( "inbox/newMessage", {
  sender: "hello@google.com",
  body: "Hey again!"
});
pubsub.unsubscribe( subscription );
pubsub.publish( "inbox/newMessage", "Hello! are you still there?" );