var dataset = [{ "_id" : "x"), "neighborhood" : "Greenpoint", "borough" : "Brooklyn", "zipcode" : 11222, "price" : 750000, "units" : 6, "priceperunit" : 125000, "sf" : 5000, "psf" : 150 },
{ "_id" : "x"), "neighborhood" : "Williamsburg", "borough" : "Brooklyn", "zipcode" : 11211, "price" : 1500000, "units" : 6, "priceperunit" : 250000, "sf" : 3000, "psf" : 500 },
{ "_id" : "x"), "neighborhood" : "Greenwich Village", "borough" : "Manhattan", "zipcode" : 10012, "price" : 5500000, "units" : 14, "priceperunit" : 392857, "sf" : 7000, "psf" : 786 },
{ "_id" : "x"), "neighborhood" : "Lower East Side", "borough" : "Manhattan", "zipcode" : 10002, "price" : 2500000, "units" : 24, "priceperunit" : 104167, "sf" : 10000, "psf" : 250 }];

      var canvass = d3.select("body")
                    .append("svg")
                    .attr("width", 500)
                    .attr("height", 500);

      var barchart = canvass.selectAll("rect")
                     .data(dataset)
                     .enter()
                        .append("rect")
                        .attr("width",function(d) {return d.price * 10})
                        .attr("height", 50)
                        .attr("y", function(d, i) {return i * 100});