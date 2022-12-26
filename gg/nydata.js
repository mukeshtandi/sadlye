function getQueryParam(e){var a=window.location.search.match(new RegExp("(\\?|&)"+e+"(\\[\\])?=([^&]*)"));return!!a&&a[3]};
const name=decodeURIComponent(getQueryParam("n").replace(/-|@|%40|\+|%20/g," "));
const blankname = 'Dein Name';
const marquee = [
'<img src="../2023/CH1.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH2.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH3.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH4.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH5.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH6.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH7.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH8.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH9.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="../2023/CH10.png" style="height:30px; width:30px;" /><br /><br />'
];
const picwtsp = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/wtsp.png';
const fbpic = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/fb.png';
const messengerpic = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/messenger.png';
const sharewpmobi = 'hast du das gesehen??%0Aich bin *'+name+'*. Öffne dies einmal%0A👇👇 %0A sadlye.com/gg/?n=';
const sharefbmobi = 'https%3A%2F%2Fstatusspeak.com/gg/?n=';
const fbID = '413498309346615';
const wpbtnName = 'Share on Whatsapp';
const FbLinkBlockExtraText = '';

$('#wish1').attr('src','wish1.png');
$('#main1').attr('src','CH2022X.png');
$('#ny1').attr('src','../2023/2023a.gif');

$('#wish2').attr('src','wish2.png');
$('#main2').attr('src','CH2022Z.png');
$('#ny2').attr('src','../2023/2023b.gif');
