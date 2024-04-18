function sendMessage() {
  var ss = SpreadsheetApp.getActive();
  var sheetNP = ss.getSheetByName('Nachricht');
  var sheetEinstellungen = ss.getSheetByName('Einstellungen');
  
  //var today = new Date();
  //var date = (new Date().getDate())+'.'+(new Date().getMonth()+1)+'.'+new Date().getFullYear();
  var curDate = Utilities.formatDate(new Date(),"GMT", "dd.MMM.yyyy")
  var typ = sheetNP.getRange('A1').getValue();
  var betreff = sheetNP.getRange('B1').getValue();
  var message = sheetNP.getRange('C1').getValue();
  
  sheetNP.insertRowAfter(2);
  sheetNP.getRange(3, 1).setValue('gesendet');
  sheetNP.getRange(3, 2).setValue(curDate);
  sheetNP.getRange(3, 3).setValue(typ);
  sheetNP.getRange(3, 4).setValue(betreff);
  sheetNP.getRange(3, 5).setValue(message);
  sheetNP.getRange('A1:E1').clearContent();

  for(var x = 1; x < 2; x++) {
    var tURL = sheetEinstellungen.getRange('O'+x).getValue();
    if(tURL=="") break;
    var destinationSS = SpreadsheetApp.openByUrl(tURL);       //destination spreadsheet
    SpreadsheetApp.setActiveSpreadsheet(destinationSS);
    var sheet = destinationSS.getSheetByName('Nachricht');
    SpreadsheetApp.setActiveSheet(sheet);
    sheet.insertRowAfter(1);
    sheet.getRange('B2:E2').setBackgroundRGB(255, 255, 128);
    sheet.getRange('B2:E2').setFontWeight('bold');
    sheet.getRange('A2').insertCheckboxes();
    sheet.getRange('B2').setValue('=Einstellungen!G$63');
    sheet.getRange('C2').setValue(typ);
    sheet.getRange('D2').setValue(betreff);
    sheet.getRange('E2').setValue(curDate);
    sheet.getRange('F2').setValue(message);
 }
}