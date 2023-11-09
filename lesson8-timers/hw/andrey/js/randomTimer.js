// root random timer
function rootRandomTimer() {
    // root elements
    const rootOutput = document.getElementById('root_randomTimer_output');
    const rootButton = document.getElementById('root_randomTimer_button');
    //
    // array of timers
    const timeArray = () => {
        let dateCounter = new Array();
        return () => dateCounter = [...dateCounter, ('\n' + new Date())];
    };
    const callTime = timeArray();
    //
    // function calls itself (running)
    function getTime() {
        const timeInterval = Math.round((Math.random() * 4) + 1) * 1000;    // 1-5s
        rootOutput.value = callTime();
        const callTimeout = setTimeout(getTime, timeInterval);
        // stop timer
        rootButton.onclick = () => clearTimeout(callTimeout);
    };
    // run timer
    getTime();
};
// run random timer
rootRandomTimer();