phonegap-app-uses-echo
======================

This is intended to be an absolutely barebones iOS PhoneGap app that uses the reference implementation of a custom plugin: Echo (as on https://github.com/thegreatmichael/phonegap-echo-plugin-example )

Create Script:
cordova create hello com.example.hello "HelloWorld"
cd hello
cordova platform add ios
cordova prepare
cordova plugin add https://github.com/thegreatmichael/phonegap-echo-plugin-example.git

Why, when I run this, and follow along in Safari's WebInspector, do I get the following output?

    [Log] Received Event: deviceready (index.js, line 47)
    [Error] TypeError: '[object Object]' is not a function (evaluating 'window.echo("echome", function(echoValue) {
                alert(echoValue == "echome"); // should alert true.
            })')
        receivedEvent (index.js, line 49)
        onDeviceReady (index.js, line 36)
        fire (cordova.js, line 750)
        (anonymous function) (cordova.js, line 223)