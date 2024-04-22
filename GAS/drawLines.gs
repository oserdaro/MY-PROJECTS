function drawLines() {
  var spreadsheet = SpreadsheetApp.getActive();
  for (var i = 4; i < 299; i+=3) {
  spreadsheet.getRange('A'+i+':L'+i).activate();
  spreadsheet.getActiveRangeList().setBorder(null, null, true, null, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID);
  }
};