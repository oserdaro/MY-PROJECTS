function cloneStudent0() {
  var sourceSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var urlSheet = sourceSpreadSheet.getSheetByName('Einstellungen');
  var FolderID = urlSheet.getRange("A41").getValue();
  var S0ID = urlSheet.getRange("A43").getValue();
  var HowMany = urlSheet.getRange("C45").getValue();
  HowMany = HowMany+1
  var destFolder = DriveApp.getFolderById(FolderID); 
  var filesb = destFolder.getFiles();
  var filesa = destFolder.getFiles();
  var countb = -1;
  var counta = 0;

  while (filesb.hasNext()) {
   countb++;
   file = filesb.next(); }
 
  for (var i = 1; i<HowMany; i++) DriveApp.getFileById(S0ID).makeCopy("Student"+(countb+i), destFolder);

  while (filesa.hasNext()) {
   counta++;
   file = filesa.next(); }

getStudentURLs()

  for(var x = 1; x < counta; x++) {
   var sURL = urlSheet.getRange('Q'+ (x + 1)).getValue();
   var destinationSpreadSheet = SpreadsheetApp.openByUrl(sURL);
   var destSheet = destinationSpreadSheet.getSheetByName('Info'); 
   var destRange = destSheet.getRange("A2");
   destRange.setValue(x);
  }
  urlSheet.getRange("C45").setValue(0)
}