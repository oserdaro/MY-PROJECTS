function getLehrerInfo() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var CPURL = einstellungenSheet.getRange('A33').getValue();
  const lehrerInfoSheet = ss.getSheetByName('LehrerInfo');
  lehrerInfoSheet.activate();
   var destinationSpreadSheet = SpreadsheetApp.openByUrl(CPURL);
   var destSheet = destinationSpreadSheet.getSheetByName('LehrerInfo'); 
   var destRange = destSheet.getRange("A2:H31");
   var data = destRange.getValues();
   lehrerInfoSheet.getRange("A2:H31").setValues(data);
};