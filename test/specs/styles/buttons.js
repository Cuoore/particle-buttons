phantomcss.init({
    screenshotRoot: 'reports/styles/tests/screenshots',
    failedComparisonsRoot: 'reports/styles/tests/failures'
});
 
/*
    The test scenario
*/
 
var url = 'http://localhost:3002/'; 
 
casper.
    start(url).

    // BUTTON--PRIMARY-COLOR
    // screenshot the initial state button--primary-color
    then(function() {
        phantomcss.screenshot('button.button--primary-color', 'buttonPrimaryColor');
    }).
    then(function() {
        // do something
        casper.click('button.button--primary-color');
    }).
    // second screenshot top initial state button--primary-color after clicked
    then(function() {
        phantomcss.screenshot('button.button--primary-color', 'buttonPrimaryColorAfterClick');
    }).

    // BUTTON--TERTIARY-COLOR
    // screenshot the initial state button--tertiary-color
    then(function() {
        phantomcss.screenshot('button.button--tertiary-color', 'buttonTertiaryColor');
    }).
    then(function() {
        // do something
        casper.click('button.button--tertiary-color');
    }).
    // second screenshot top initial state button--tertiary-color after clicked
    then(function() {
        phantomcss.screenshot('button.button--tertiary-color', 'buttonTertiaryColorAfterClick');
    }).

    // BUTTON--PRIMARY-COLOR-CAPITALIZE
    // screenshot the initial state button--primary-color-capitalize
    then(function() {
        phantomcss.screenshot('button.button--primary-color-capitalize', 'buttonPrimaryColorCapitalize');
    }).
    then(function() {
        // do something
        casper.click('button.button--primary-color-capitalize');
    }).
    // second screenshot top initial state button--primary-color after clicked
    then(function() {
        phantomcss.screenshot('button.button--primary-color-capitalize', 'buttonPrimaryColorCapitalizeAfterClick');
    }).

    // BUTTON--PRIMARY-COLOR-EMPTY
    // screenshot the initial state button--primary-color-empty
    then(function() {
        phantomcss.screenshot('button.button--primary-color-empty', 'buttonPrimaryColorEmpty');
    }).
    then(function() {
        // do something
        casper.click('button.button--primary-color-empty');
    }).
    // second screenshot top initial state button--primary-color-empty after clicked
    then(function() {
        phantomcss.screenshot('button.button--primary-color-empty', 'buttonPrimaryColorEmptyAfterClick');
    }).

    // BUTTON--TERTIARY-COLOR-EMPTY
    // screenshot the initial state button--tertiary-color-empty
    then(function() {
        phantomcss.screenshot('button.button--tertiary-color-empty', 'buttonTertiaryColorEmpty');
    }).
    then(function() {
        // do something
        casper.click('button.button--tertiary-color-empty');
    }).
    // second screenshot top initial state button--tertiary-color-empty after clicked
    then(function() {
        phantomcss.screenshot('button.button--tertiary-color-empty', 'buttonTertiaryColorEmptyAfterClick');
    });
 
/*
    End tests and compare screenshots
*/
 
casper.
    then(function now_check_the_screenshots() {
        phantomcss.compareAll();
    }).
    run(function end_it() {
        console.log('\n End of test:styles:integration.');
        phantom.exit(phantomcss.getExitStatus());
    });