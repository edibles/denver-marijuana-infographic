$( document ).ready(function() {
  var id = "facilities-licenses";
  populateBigNumber(id + "-big");
  populatePieGraph(id + "-pie-graph");
  populateVenn("facilities-locations-venn-graph");
});