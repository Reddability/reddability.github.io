var TEXTAREA = '#markdown_textarea';

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

function updatePreview() {
	var preview = $('#markdown_preview'),
		previewContent = $('#markdown_preview_content'),
		previewTextarea = $('#markdown_textarea');

	if(previewTextarea.val().length) {
		previewContent.html(SnuOwnd.getParser().render(previewTextarea.val()));
		preview.show();
	} else {
		preview.hide();
	}
}

$(updatePreview);

$(TEXTAREA).bind('input propertychange', updatePreview);
