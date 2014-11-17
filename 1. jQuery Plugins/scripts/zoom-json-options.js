(function ($) {
  $.fn.zoom = function (options) {
    var size = parseFloat(options.size || 2),
		$this = $(this);
    $this.on('mouseover', function () {
		var $this = $(this),
			oldWidth = parseFloat($this.css('width')),
			oldHeight = parseFloat($this.css('height'));
		$this.css('width', (oldWidth * size) + 'px');
		$this.css('height', (oldHeight * size) + 'px');
    });

    $this.on('mouseout', function () {
		var $this = $(this),
			oldWidth = parseFloat($this.css('width')),
			oldHeight = parseFloat($this.css('height'));
		$this.css('width', (oldWidth / size) + 'px');
		$this.css('height', (oldHeight / size) + 'px');
    });
    return this;
  };
}(jQuery));