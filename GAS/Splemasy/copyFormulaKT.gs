function copyFormulaKT() {
  var spreadsheet = SpreadsheetApp.getActive();
  var spalteKT = ['L','N','P','R','T','V','X','Z','AB','AD','AF','AH','AJ','AL','AN','AP','AR','AT','AV','AX','AZ','BB','BD','BF','BH','BJ','BL','BN','BP','BR','BT','BV','BX','BZ','CB','CD','CF','CH','CJ','CL'];
  var spalteKT2 = ['M','O','Q','S','U','W','Y','AA','AC','AE','AG','AI','AK','AM','AO','AQ','AS','AU','AW','AY','BA','BC','BE','BG','BI','BK','BM','BO','BQ','BS','BU','BW','BY','CA','CC','CE','CG','CI','CK','CM'];
  var spalteBE = ['D','J','P','V','AB','AH','AN','AT','AZ','BF','BL','BR','BX','CD','CJ','CP','CV','DB','DH','DN','DT','DZ','EF','EL','ER','EX','FD','FJ','FP','FV','GB','GH','GN','GT','GZ','HF','HL','HR','HX','ID'];

  for (var j =0; j <spalteBE.length; j=j+1) {  
    var k=2
    for (var i = 3; i < 123; i=i+4) {
        
       var formula1 = '=IFNA(if(OR('+spalteKT2[j]+i+'="";'+spalteKT2[j]+(i+1)+'="";ISNA(KurstabelleBE!'+spalteBE[j]+(i+1)+')=true);"";sparkline(KurstabelleBE!'+spalteBE[j]+(i+1)+';{"charttype"\\"bar";"color1"\\""&Einstellungen!Z'+k+'&"";"max"\\100})))'
       spreadsheet.getRange(spalteKT[j]+(i+1)).setValue(formula1);
    
       var formula2 = '=IFNA(if(OR('+spalteKT2[j]+i+'="";'+spalteKT2[j]+(i+2)+'="";ISNA(KurstabelleBE!'+spalteBE[j]+(i+2)+')=true);"";sparkline(KurstabelleBE!'+spalteBE[j]+(i+2)+';{"charttype"\\"bar";"color1"\\""&Einstellungen!Z'+k+'&"";"max"\\100})))'
       spreadsheet.getRange(spalteKT[j]+(i+2)).setValue(formula2);
   
       var formula3 = '=IFNA(if(OR('+spalteKT2[j]+i+'="";'+spalteKT2[j]+(i+3)+'="";ISNA(KurstabelleBE!'+spalteBE[j]+(i+3)+')=true);"";sparkline(KurstabelleBE!'+spalteBE[j]+(i+3)+';{"charttype"\\"bar";"color1"\\""&Einstellungen!Z'+k+'&"";"max"\\100})))'
       spreadsheet.getRange(spalteKT[j]+(i+3)).setValue(formula3);

       var k=k+1
    }
  }
}