function kurstabelleQuerySheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var qSheet = ss.getSheetByName('KTQSheet');
  var z = ["L","N","P","R","T","V","X","Z","AB","AD","AF","AH","AJ","AL","AN","AP","AR","AT","AV","AX","AZ","BB","BD","BF","BH","BJ","BL","BN","BP","BR","BT","BV","BX","BZ","CB","CD","CF","CH","CJ","CL"];
  var t = ["M","O","Q","S","U","W","Y","AA","AC","AE","AG","AI","AK","AM","AO","AQ","AS","AU","AW","AY","BA","BC","BE","BG","BI","BK","BM","BO","BQ","BS","BU","BW","BY","CA","CC","CE","CG","CI","CK","CM"];
  var r = ["T","AJ","AZ","BP","CF"];
    s = 0;
    y = 1;
    k = 3;

  for (var p = 0; p < 40; p+=1) {  
     // if (y>7195) break;
      for (var i = 1; i < 176; i+=6) {
      f1 = '=iferror(Transpose(Split(REPT(Kurstabelle!'+t[p]+ k +'&"♕";Counta(B'+ y +':B'+ (y+5) +'));"♕")))';
      qSheet.getRange('A'+y).setValue(f1);
      f2 = '={Kurstabelle!'+t[p]+ (k+1) +':' +t[p]+ (k+6) + '}';
      qSheet.getRange('B'+y).setValue(f2);
      f3 = '=iferror(Transpose(Split(REPT(Kurstabelle!'+z[p]+'2&"♕";Counta(B'+ y +':B'+ (y+5) +'));"♕")))';
      qSheet.getRange('C'+y).setValue(f3);
      f4 = '=iferror(Transpose(Split(REPT(Kurstabelle!'+r[s]+'1&"♕";Counta(B'+ y +':B'+ (y+5) +'));"♕")))';
      qSheet.getRange('D'+y).setValue(f4);
      f5 = '=iferror(Transpose(Split(REPT(Kurstabelle!B'+ k +'&"♕";Counta(B'+ y +':B'+ (y+5) +'));"♕")))'
      qSheet.getRange('E'+y).setValue(f5);
      if(y==1441 || y==2881 || y==4321 || y==5761) s += 1;
      y += 6;
      k += 7;
  }
   k = 3;
}
};