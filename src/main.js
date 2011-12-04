chrome.contextMenus.create({
    title : 'speak',
    onclick : function(info) {
        var str = info.selectionText
        var options = {
            "lang" : "en-US",
            "rate" : 1,
            "pitch" : 1,
            "volume" : 1
        }
        options.onEvent = function(event) {
            console.log(event);
        };
        chrome.tts.speak(str, options, function() {
            if(chrome.extension.lastError) {
                console.log('TTS Error: ' + chrome.extension.lastError.message);
            }
        });
    },
    contexts : ['selection']
});
