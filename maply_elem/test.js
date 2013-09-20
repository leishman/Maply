states_json = $.getJSON("States.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

states_parsed = JSON.parse(states_json);