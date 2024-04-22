function Zustimmen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('LehrerInfo');
  var stimme='Ich stimme zu.'
  var UName= sheet.getRange('B2').getValue();
  var date = Utilities.formatDate(new Date(), "GMT+1", "dd.MM.yyyy")
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Einverständniserklärung');    
  sheet.getRange('B54').setValue(stimme);
  sheet.getRange('B55').setValue(UName);
  sheet.getRange('B56').setValue('BOCHUM, '+date);
}