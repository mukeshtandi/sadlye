function getQueryParam(e){var a=window.location.search.match(new RegExp("(\\?|&)"+e+"(\\[\\])?=([^&]*)"));return!!a&&a[3]};
const name=decodeURIComponent(getQueryParam("n").replace(/-|@|%40|\+|%20/g," "));
const blankname = 'Your Name';
const marquee = [
'<img src="https://my-msg.co/Xmas/side1.png" alt="Left Slide" style="height:250px; width:30px;" loading="lazy"/><br>',
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
const picwtsp = 'https://my-msg.co/wtsp.png';
const fbpic = 'https://my-msg.co/fb.png';
const messengerpic = 'https://my-msg.co/messenger.png';
const sharewpmobi = '🤗😇 Have you seen this??? %0A*'+name+'* sent you a surprise message %0A💁 *Open this*%0A👇👇🏻👇👇 %0A https://my-msg.co/?n=';
const sharefbmobi = 'https%3A%2F%2Fmy-msg.co/?n=';
const fbID = '413498309346615';
const wpbtnName = 'Share on Whatsapp';
const FbLinkBlockExtraText = '';

$('#wish1').attr('src','Xmas/xmaswishing1.gif');
$('#main1').attr('src','Xmas/ch2022c.png');
$('#under1').attr('src','Xmas/ch2022under1.gif');
$('#under2').attr('src','Xmas/ch2022under2.gif');

$('#wish2').attr('src','Xmas/2020wish1.png');
$('#main2').attr('src','Xmas/xmas2020main2.png');
$('#under3').attr('src','Xmas/ch2022under3.gif');
$('#under4').attr('src','Xmas/ch2022under4.gif');