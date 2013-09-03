var MultifamilyView = Backbone.View.extend({

  render: function() {
    // this function needs to append something to the page with jQuery
    //$('#container').html('hey');
    this.$el.html("This is first view");
      // this is supposed to come from a model

    return this;
  }

});
