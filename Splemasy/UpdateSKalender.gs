function updateSKalender() 
{
  var sourceSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var srcSheet = sourceSpreadSheet.getSheetByName('Kalender');
  var urlSheet = sourceSpreadSheet.getSheetByName('Einstellungen');
  var srcRange = srcSheet.getRange(1,1,367,8).getValues();
  var data = urlSheet.getRange('Q2:Q101').getValues();
  var filtered = data.filter(String);

  for(var x = 2; x < filtered.length+1; x++)  {
  var sURL = urlSheet.getRange('Q'+x).getValue();
  if (sURL == "") {return};
  //destination spreadsheet
  var destinationSpreadSheet = SpreadsheetApp.openByUrl(sURL);
  var destSheet = destinationSpreadSheet.getSheetByName('Kalender'); 
  var destRange = destSheet.getRange("A1:H367");
  destRange.setValues(srcRange);
  }
}