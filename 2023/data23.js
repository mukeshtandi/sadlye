function getQueryParam(e){var a=window.location.search.match(new RegExp("(\\?|&)"+e+"(\\[\\])?=([^&]*)"));return!!a&&a[3]};
const name=decodeURIComponent(getQueryParam("n").replace(/-|@|%40|\+|%20/g," "));
const blankname = 'Your Name';
const marquee = [
'<img src="https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/side1.png" style="height:250px; width:30px;" /><br />',
'',
'',
'',
'',
'',
'',
'',
'',
''
];
const picwtsp = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/wtsp.png';
const fbpic = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/fb.png';
const messengerpic = 'https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/messenger.png';
const sharewpmobi = '🤗😇 Have you seen this??? %0A*'+name+'* sent you a surprise message %0A💁 *Open this*%0A👇👇🏻👇👇 %0A https://sadlye.com/2023/?n=';
const sharefbmobi = 'https%3A%2F%2Fstatusspeak.com/wow/?n=';
const fbID = '413498309346615';
const wpbtnName = 'Share on Whatsapp';
const FbLinkBlockExtraText = '';

$('#wish1').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/xmaswishing1.gif');
$('#main1').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/ch2022c.png');
$('#under1').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/ch2022under1.gif');
$('#under2').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/ch2022under2.gif');

$('#wish2').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/2020wish1.png');
$('#main2').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/xmas2020main2.png');
$('#under3').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/ch2022under3.gif');
$('#under4').attr('src','https://cdn.jsdelivr.net/gh/mukeshtandi/sadlye/Xmas/ch2022under4.gif');
