function updateCheckIn() 
{
 var sourceSS = SpreadsheetApp.getActiveSpreadsheet();
  var srcName = "CheckIn";
  var srcSheet = sourceSS.getSheetByName(srcName);
  var urlSheet = sourceSS.getSheetByName('Einstellungen');
   
  for(var x = 2; x < 30; x++)
  {
  var tURL = urlSheet.getRange('U'+x).getValue();
  if(tURL==""){break}
  //destination spreadsheet
  var destinationSS = SpreadsheetApp.openByUrl(tURL);
  SpreadsheetApp.setActiveSpreadsheet(destinationSS);
  var oldSheet = destinationSS.getSheetByName(srcName)
  if(oldSheet != null) destinationSS.deleteSheet(oldSheet);
  srcSheet.copyTo(destinationSS);
  var newSheet = destinationSS.getSheetByName("Kopie von "+srcName);
  newSheet.setName(srcName).activate();// change its name and activate
  //destinationSS.moveActiveSheet(5); // move to the nth position

  // Set full protection 
  var protection = destinationSS.getActiveSheet().protect();
  var me = Session.getEffectiveUser();
          protection.addEditor(me);
          protection.removeEditors(protection.getEditors());
  //Set unprotected ranges
  var unprotected = newSheet.getRange('A2');
  protection.setUnprotectedRanges([unprotected]);
  
  // Remove drawings
  var drawings = destinationSS.getSheetByName(srcName).getDrawings();
  for (var i = 0; i < drawings.length; i++) {
  drawings[i].remove();
  }
  }
}