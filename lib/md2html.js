var markdown = $('#markdown-content').html();
var html = md.render(markdown);
$('#output').html(html);