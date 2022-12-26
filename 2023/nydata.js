function getQueryParam(e){var a=window.location.search.match(new RegExp("(\\?|&)"+e+"(\\[\\])?=([^&]*)"));return!!a&&a[3]};
const name=decodeURIComponent(getQueryParam("n").replace(/-|@|%40|\+|%20/g," "));
const blankname = 'Your Name';
const marquee = [
'<img src="CH1.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH2.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH3.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH4.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH5.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH6.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH7.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH8.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH9.png" style="height:30px; width:30px;" /><br /><br />',
'<img src="CH10.png" style="height:30px; width:30px;" /><br /><br />'
];
const picwtsp = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/wtsp.png';
const fbpic = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/fb.png';
const messengerpic = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/messenger.png';
const sharewpmobi = 'have you seen this???%0A *'+name+'* sent you speical surprise message%0A open this once👇👇 %0A sadlye.com/2023/?n=';
const sharefbmobi = 'https%3A%2F%2Fstatusspeak.com/wow/?n=';
const fbID = '413498309346615';
const wpbtnName = 'Share on Whatsapp';
const FbLinkBlockExtraText = '';

$('#wish1').attr('src','wish1.png');
$('#main1').attr('src','CH2022X.png');
$('#ny1').attr('src','2023a.gif');

$('#wish2').attr('src','wish2.png');
$('#main2').attr('src','CH2022Y.png');
$('#ny2').attr('src','2023b.gif');
