/*
    The test configuration
*/

/*
higgsboson set this variable with correct value in each case
you only write this:
var url='http://localhost:3020';
*/

var url = 'http://localhost:3020';

/*
Options an optimizations to 
phatomcss;
higgsboson set this variable with correct value in each case
you only write this:
var url='http://localhost:3020';
*/

var configuration = {"screenshotRoot":"reports/styles/tests/screenshots", "failedComparisonsRoot":"reports/styles/tests/failures", "comparisonResultRoot":"reports/styles/tests//results", "addLabelToFailedImage":true, "outputSettings":{"errorColor":{"red":255, "green":255, "blue":0}, "errorType":"movement", "transparency":0.3}};

phantomcss.init(configuration);

/*
    The test scenario
*/

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
