$('#screenshots').magnificPopup({
	gallery: {
		enabled: true,
		preload: [0, 2],
		navigateByImgClick: true,

		arrowMarkup: '',
		tCounter: 'Screenshot %curr% out of %total%',
	},
	midClick: true,

	showCloseBtn: false,
	removalDelay: 200,

	type: 'image',
	items: [
		{
			src: '../img/screenshots/1.png'
		},
		{
			src: '../img/screenshots/2.png'
		},
		{
			src: '../img/screenshots/3.png'
		},
		{
			src: '../img/screenshots/4.png'
		},
	]
});

$('#markdown_textarea').bind('input propertychange', function() {

	var preview = $('#markdown_preview'),
		previewContent = $('#markdown_preview_content');

	if(this.value.length) {
		previewContent.html(markdown.toHTML(this.value));
		preview.show();
	} else {
		preview.hide();
	}
});
