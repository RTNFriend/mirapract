function openWin(pictFile)
{
myWindow=window.open('','','width=713,height=540,top=50,left=220,location=0,menubar=0,status=0,titlebar=0,toolbar=0');
myWindow.document.write('<img style="width: 697px; height: 523px;" alt="picture42" src="'+pictFile+'">');
myWindow.focus();
}