(function ($) {
  $.fn.zoom = function () {
    var $this;
    $this = $(this);
    $this.on('mouseover', function () {
      $this = $(this);
      var oldWidth = parseInt($this.css('width'));
      var oldHeight = parseInt($this.css('height'));
      $this.css('width', (oldWidth * 2) + 'px');
      $this.css('height', (oldHeight * 2) + 'px');
    });

    $this.on('mouseout', function () {
      $this = $(this);
      var oldWidth = parseInt($this.css('width'));
      var oldHeight = parseInt($this.css('height'));
      $this.css('width', (oldWidth / 2) + 'px');
      $this.css('height', (oldHeight / 2) + 'px');
    });
    return this;
  };
}(jQuery));