MyRouter = Backbone.Router.extend({
  routes: {
    ".*" : "index"
  },
index: function(){
  var collection = new Multifamilies();
  collection.fetch({
    success : function(data,response){
      console.log(response);
      for(var i = 0;i < response.length ; i++){
        console.log(response[i].price)

        var tr = "<tr><td>"+response[i].neighborhood+"</td>" +
         "<td>"+response[i].borough+"</td>" +
         "<td>"+response[i].zipcode+"</td>" +
         "<td>"+response[i].price+"</td>" +
         "<td>"+response[i].unit+"</td>" +
         "<td>"+response[i].priceperunit+"</td>" +
         "<td>"+response[i].sf+"</td>" +
         "<td>"+response[i].psf+"</td></tr>"
        $("#table_body").append(tr);
      }
    }
  });
  //alert("I am called");
  //var view = new MultifamilyView();
  //$("#container").html(view.render().el);
}
});