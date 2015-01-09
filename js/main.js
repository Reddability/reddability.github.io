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

$(document).ready(function() {
	$('.edit-btn').click(function() {
		var before = $(this).attr('before') ? $(this).attr('before') : $(this).attr('wrap');
		before = before ? before : "";
		var after = $(this).attr('after') ? $(this).attr('after') : $(this).attr('wrap');
		after = after ? after : ""

		if($(this).attr('multiline') !== undefined) {
			var selection = $(TEXTAREA).selection('get');
			var lines = selection.split('\n');

			for(var i = 0; i < lines.length; i++)
				lines[i] = before.replace('%n', i + 1) + lines[i] + after.replace('%n', i + 1);

			$(TEXTAREA).selection('replace', {
				text: lines.join('\n'),
				caret: 'after'
			});
		} else {
			$(TEXTAREA).selection('insert', {
				text: before,
				mode: 'before'
			});

			$(TEXTAREA).selection('insert', {
				text: after,
				mode: 'after'
			});
		}

		updatePreview();
	});
});
