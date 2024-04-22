 function uploadSchulerInfo() {
  var sourceSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var srcSheet = sourceSpreadSheet.getSheetByName('SchülerInfo');
  var urlSheet = sourceSpreadSheet.getSheetByName('Einstellungen');
  var lastRow = urlSheet.getRange('O1:O').getValues().filter(String).length;
  var id = srcSheet.getRange("B1:B101").getValues();
  var name = srcSheet.getRange("F1:F101").getValues();
  var klasse = srcSheet.getRange("E1:E101").getValues();
  var punkte = srcSheet.getRange("U1:U101").getValues();
  var kontakt = srcSheet.getRange("L1:U101").getValues();
  var surls = urlSheet.getRange('Q2:Q101').getValues();
  var turls = urlSheet.getRange('O2:O31').getValues();

  for(var x = 2; x < lastRow+1; x++)  {
  var tURL = urlSheet.getRange('O'+x).getValue();
 
  //destination spreadsheet
  var destinationSpreadSheet = SpreadsheetApp.openByUrl(tURL);
  var destSheet = destinationSpreadSheet.getSheetByName('Einstellungen'); 
  destSheet.getRange("I1:I101").setValues(id);
  destSheet.getRange("J1:J101").setValues(name);
  destSheet.getRange("K1:K101").setValues(klasse);
  destSheet.getRange("L1:L101").setValues(punkte);
  destSheet.getRange("M1:V101").setValues(kontakt);
  destSheet.getRange('W2:W101').setValues(surls);
  destSheet.getRange('X2:X31').setValues(turls);
  destSheet.getRange("I1:V101").setNumberFormat("@");
  }
  
}