function applyConditionalFormattingToKurstabelle1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Kurstabelle');
   var j=3;
   var col1="BV";    var col2="BW";    var col3="AH";
    for (var i = 3; i<144; i=i+7) {
      
      var rn = sheet.getRange("A"+i+"").getBackground()
      var rangeToHighlight = sheet.getRange(col1+i +":"+ col2+(i+6));
      var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=INDIRECT("LehrerVerfügbarkeit!'+col3+ j +'")=TRUE')
      .setBackground(""+ rn +"")
      .setRanges([rangeToHighlight])
      .build();

      var rules = sheet.getConditionalFormatRules();
      rules.push(rule);
      sheet.setConditionalFormatRules(rules);
      j=j+1;
      };
};

function applyConditionalFormattingToKurstabelle2() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Kurstabelle');
   var j=24;
   var col1="BV";    var col2="BW";    var col3="AH";
    for (var i = 150; i<207; i=i+7) {
      
      var rn = sheet.getRange("A"+i+"").getBackground()
      var rangeToHighlight = sheet.getRange(col1+i +":"+ col2+(i+6));
      var rule = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=INDIRECT("LehrerVerfügbarkeit!'+col3+ j +'")=TRUE')
      .setBackground(""+ rn +"")
      .setRanges([rangeToHighlight])
      .build();

      var rules = sheet.getConditionalFormatRules();
      rules.push(rule);
      sheet.setConditionalFormatRules(rules);
      j=j+1;
      };
};