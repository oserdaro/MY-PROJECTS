function getSchülerInfo() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var studentCPURL = einstellungenSheet.getRange('A35').getValue();
  const schulerInfoSheet = ss.getSheetByName('SchülerInfo');
  schulerInfoSheet.activate();
   var destinationSpreadSheet = SpreadsheetApp.openByUrl(studentCPURL);
   var destSheet = destinationSpreadSheet.getSheetByName('SchülerInfo'); 
   var destRange = destSheet.getRange("A1:W101");
   var data = destRange.getValues();
   schulerInfoSheet.getRange("A1:W101").setNumberFormat("@");
   schulerInfoSheet.getRange("A1:W101").setValues(data);

}