function getStudentURLs() {
var ss=SpreadsheetApp.getActiveSpreadsheet();
var sheet=ss.getActiveSheet();
var folderid = ss.getSheetByName('Einstellungen').getRange("A41").getValue();
var folder = DriveApp.getFolderById(folderid);

var files = folder.getFiles();
var file;
var name;
var link;
var links = [];
var dict = {};
var sortedLinks = [];

while (files.hasNext()){
var file = files.next();
name = file.getName();
link = file.getUrl();
links.push(link);
dict[name.replace('Student','')] = link;
}

sheet.getRange('Q1:Q').clearContent();
for (var i = 1; i<links.length; i++){
    sortedLinks.push([dict[i]]);
};

sheet.getRange('Q2:Q'+links.length).setValues(sortedLinks);
sheet.getRange('Q2:Q').setBackground('#efefef');
};
