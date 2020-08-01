// create the image arrays
if(document.images)
{
    mirapractAd = new Array("pictures/themes/summer/mira7.jpg", "pictures/themes/summer/mira1.jpg", "pictures/themes/summer/mira2.jpg", "pictures/themes/summer/mira3.jpg","pictures/themes/summer/mira4.jpg","pictures/themes/summer/mira5.jpg","pictures/themes/summer/mira6.jpg")
    imagesCache = new Array()

    for (i=0;i<mirapractAd.length;i++)
    {
        imagesCache[i] = new Image
        imagesCache[i].src = mirapractAd[i]
    }
theCount = 0
}

function turnPage()
{
if (theCount == imagesCache.length-1)
   {theCount = 0} 
else 
   {theCount++}
// (display a frame of the animation)
document.Flipper.src = imagesCache[theCount].src
var x = document.getElementsByTagName('html')[0];
//change text underneath the picture
switch((mirapractAd[theCount]))
{
    case "pictures/themes/summer/mira1.jpg":
        if(x.lang=="en") document.getElementById("picText").innerHTML="20 minutes of static observation ties-in an instrument to GPS base which can be used as a backsight";
        if(x.lang=="uk") document.getElementById("picText").innerHTML="20 &#1093;&#1074;&#1080;&#1083;&#1080;&#1085; &#1089;&#1090;&#1072;&#1090;&#1080;&#1095;&#1085;&#1080;&#1093; &#1089;&#1087;&#1086;&#1089;&#1090;&#1077;&#1088;&#1077;&#1078;&#1077;&#1085;&#1100; &#1087;&#1088;&#1080;&#1074;'&#1103;&#1078;&#1077; &#1110;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090; &#1076;&#1086; GPS &#1073;&#1072;&#1079;&#1080;, &#1103;&#1082;&#1072; &#1084;&#1086;&#1078;&#1077; &#1073;&#1091;&#1090;&#1080; &#1074;&#1080;&#1082;&#1086;&#1088;&#1080;&#1089;&#1090;&#1072;&#1085;&#1072; &#1103;&#1082;&nbsp;&#1079;&#1072;&#1076;&#1085;&#1103; &#1090;&#1086;&#1095;&#1082;&#1072;";
        break;
    case "pictures/themes/summer/mira2.jpg":
        if(x.lang=="en") document.getElementById("picText").innerHTML="topo features are picked up during gps static session";
        if(x.lang=="uk") document.getElementById("picText").innerHTML="&#1079;&#1081;&#1086;&#1084;&#1082;&#1072; &#1074;&#1080;&#1082;&#1086;&#1085;&#1091;&#1108;&#1090;&#1100;&#1089;&#1103; &#1087;&#1110;&#1076; &#1095;&#1072;&#1089; &#1089;&#1090;&#1072;&#1090;&#1080;&#1095;&#1085;&#1086;&#1111; &#1087;&#1088;&#1080;&#1074;'&#1103;&#1079;&#1082;&#1080;";
        break;
    case "pictures/themes/summer/mira3.jpg":
        if(x.lang=="en") document.getElementById("picText").innerHTML="with appropriate instrument height a surveyor does not block the gps signal";
        if(x.lang=="uk") document.getElementById("picText").innerHTML="&#1087;&#1088;&#1080; &#1074;&#1110;&#1076;&#1087;&#1086;&#1074;&#1110;&#1076;&#1085;&#1110;&#1081; &#1074;&#1080;&#1089;&#1086;&#1090;&#1110; &#1110;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090;&#1091; &#1075;&#1077;&#1086;&#1076;&#1077;&#1079;&#1080;&#1089;&#1090; &#1085;&#1077; &#1073;&#1083;&#1086;&#1082;&#1091;&#1108; gps &#1089;&#1080;&#1075;&#1085;&#1072;&#1083;";
        break;
    case "pictures/themes/summer/mira4.jpg":
        if(x.lang=="en") document.getElementById("picText").innerHTML="I designed and built a special adapter for holding the receiver on different instrument handles";
        if(x.lang=="uk") document.getElementById("picText").innerHTML="&#1079;&#1087;&#1088;&#1086;&#1077;&#1082;&#1090;&#1091;&#1074;&#1072;&#1074; &#1090;&#1072; &#1074;&#1080;&#1075;&#1086;&#1090;&#1086;&#1074;&#1080;&#1074; &#1089;&#1087;&#1077;&#1094;&#1110;&#1072;&#1083;&#1100;&#1085;&#1080;&#1081; &#1072;&#1076;&#1072;&#1087;&#1090;&#1077;&#1088; &#1076;&#1083;&#1103; &#1079;&#1072;&#1082;&#1088;&#1110;&#1087;&#1083;&#1077;&#1085;&#1085;&#1103; &#1087;&#1088;&#1080;&#1081;&#1084;&#1072;&#1095;&#1072; &#1085;&#1072; &#1088;&#1110;&#1079;&#1085;&#1080;&#1093; &#1088;&#1091;&#1095;&#1082;&#1072;&#1093; &#1110;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090;&#1110;&#1074;";
        break;
    case "pictures/themes/summer/mira5.jpg":
        if(x.lang=="en")document.getElementById("picText").innerHTML="the adapter does not interfere with carrying the total station";
        if(x.lang=="uk")document.getElementById("picText").innerHTML="&#1072;&#1076;&#1072;&#1087;&#1090;&#1077;&#1088; &#1085;&#1077; &#1079;&#1072;&#1074;&#1072;&#1078;&#1072;&#1108; &#1087;&#1110;&#1076; &#1095;&#1072;&#1089; &#1087;&#1077;&#1088;&#1077;&#1085;&#1077;&#1089;&#1077;&#1085;&#1085;&#1103; &#1110;&#1085;&#1089;&#1090;&#1088;&#1091;&#1084;&#1077;&#1085;&#1090;&#1091;";
        break;
    case "pictures/themes/summer/mira6.jpg":
        if(x.lang=="en") document.getElementById("picText").innerHTML="batteries and memory card compartment";
        if(x.lang=="uk") document.getElementById("picText").innerHTML="&#1074;&#1110;&#1076;&#1089;&#1110;&#1082; &#1076;&#1083;&#1103; &#1073;&#1072;&#1090;&#1072;&#1088;&#1077;&#1081;&#1086;&#1082; &#1095;&#1080; &#1072;&#1082;&#1091;&#1084;&#1091;&#1083;&#1103;&#1090;&#1086;&#1088;&#1110;&#1074; &#1090;&#1072; &#1082;&#1072;&#1088;&#1090;&#1082;&#1080; &#1087;&#1072;&#1084;'&#1103;&#1090;&#1110;";
        break;
    case "pictures/themes/summer/mira7.jpg":
        if(x.lang=="en") document.getElementById("picText").innerHTML="transportation case";
        if(x.lang=="uk") document.getElementById("picText").innerHTML="&#1095;&#1077;&#1084;&#1086;&#1076;&#1072;&#1085; &#1076;&#1083;&#1103; &#1087;&#1077;&#1088;&#1077;&#1074;&#1077;&#1079;&#1077;&#1085;&#1085;&#1103;";
        break;

    default:
        document.getElementById("picText").innerHTML="";
        document.getElementById("picText").innerHTML="";
        break;
}

setTimeout("turnPage()", 8000)
}