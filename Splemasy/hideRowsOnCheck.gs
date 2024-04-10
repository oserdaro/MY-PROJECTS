function onEdit(e){
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const kurstabelle = ss.getSheetByName("Kurstabelle");
  
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  const editedValue = e.value;
  //Browser.msgBox(row);

  if(range.getSheet().getName() == 'LehrerInfo') {
  if (col != 1 ) return;
  
  if (editedValue === "TRUE") {
     //var output = HtmlService.createHtmlOutput('<b>Please wait...</b>');
     //SpreadsheetApp.getUi().showModalDialog(output, 'Activating...');
     
     var output = HtmlService
    .createHtmlOutput('<p>Please wait...</p>')
    .setWidth(250)
    .setHeight(300);
     SpreadsheetApp.getUi().showModalDialog(output, 'Activating');
    
    kurstabelle.showRows((row*4)-5,4);
    kurstabelle.getRange((row*4)-5,1).setValue('=char(9762)');

     var output = HtmlService.createHtmlOutput('<script>google.script.host.close();</script>');
     SpreadsheetApp.getUi().showModalDialog(output, 'Activating...');

    }
 
  else {
     var output = HtmlService.createHtmlOutput('<b>Please wait...</b>');
     SpreadsheetApp.getUi().showModalDialog(output, 'Deactivating...');

     kurstabelle.hideRows((row*4)-5,4)
     kurstabelle.getRange((row*4)-5,1).setValue('');

     var output = HtmlService.createHtmlOutput('<script>google.script.host.close();</script>');
     SpreadsheetApp.getUi().showModalDialog(output, 'Deactivating...');
    }
  }
}

