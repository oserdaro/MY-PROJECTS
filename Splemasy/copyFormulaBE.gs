function copyFormulaBE() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('KurstabelleBE');

  var spalteBE = ['D','J','P','V','AB','AH','AN','AT','AZ','BF','BL','BR','BX','CD','CJ','CP','CV','DB','DH','DN','DT','DZ','EF','EL','ER','EX','FD','FJ','FP','FV','GB','GH','GN','GT','GZ','HF','HL','HR','HX','ID'];

  for (var j =0; j < spalteBE.length; j++) {  

  var rangefrom =   spreadsheet.getRange(spalteBE[j]+4+":"+spalteBE[j]+6);

        for (var i = 4; i < 117; i+=4) {
       
        var rangeto =   spreadsheet.getRange(spalteBE[j]+(i+4)+":"+spalteBE[j]+(i+6));
       rangefrom.copyTo(rangeto, SpreadsheetApp.CopyPasteType.PASTE_FORMULA,false);

    
      }
  }
}