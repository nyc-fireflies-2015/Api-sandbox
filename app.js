$(document).ready(function() {
  $("button").on("click", function() {
    $.ajax("http://api.reddit.com").done(function(response) {
      var templateScript = $("#reddit-template").html();
      var theTemplate = Handlebars.compile(templateScript);
      debugger
      response.data.children.forEach(function(listing){
        console.log(listing.data.title)
        var context = {
          post: [
            { title: listing.data.title }
          ]
        };
      var theCompiledHtml = theTemplate(context);
      $(document.body).append(theCompiledHtml);
      })


      console.log(response);
    }).fail(function(response) {
      alert("Error");
      console.log(response);
    })
  })
})