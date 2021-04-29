var arr = process.argv
var val="";
for(var i=2;i<arr.length;i++){
	for(var j=0;j<arr[i].length;j++){
		val=val+getString((arr[i])[j]);
	}
	val=val+",";
}
function getString(number) {
	var NumStr;
switch (number) {
  case "0":
    NumStr = "Zero";
    break;
  case "1":
    NumStr = "One";
    break;
  case "2":
    NumStr = "Two";
    break;
  case "3":
    NumStr = "Three";
    break;
  case "4":
    NumStr = "Four";
    break;
  case "5":
    NumStr = "Five";
    break;
  case "6":
    NumStr = "Six";
	break;
  case "7":
    NumStr = "Seven";
    break;
  case "8":
    NumStr = "Eight";
    break;
  case "9":
    NumStr = "Nine";
    break;
}
return NumStr;
}