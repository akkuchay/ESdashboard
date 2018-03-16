$("#loadIndicesButton").click(function(){
 //To display all the indices in cluster
var indicesList = [];
client.indices.getMapping({/*index:"bank", type:"account"*/}, function(err,resp,status){
	for(x in resp){
	console.log(x);
	indicesList.push(x);
	
}
	$('#indicesList').empty();
	$('#indicesList').append($('<option value="" selected disabled hidden>'+"Choose Index"+'</option>'));


$.each(indicesList, function(i, p) {
    $('#indicesList').append($('<option></option>').val(p).html(p));
});//console.log(resp);
});



// var docName = "account";
//  var indexName = "bank";
//To display all the properties in document and their types


        // $.get("http://localhost:9200", function(data, status, err){
        // 	//console.log(typeof(data));
        //     alert("Data: " + data + "Status:" + status + err );
        // });
    });

//On changing the index name from drop down list, loads all documents in another dropdown list

$('#indicesList').change(function(){
  s = $(this);
  indexName = s.val();

  var documentsList = [];

client.indices.getMapping({index: indexName}, function(err,resp,status){
	for(x in resp[indexName].mappings){
	console.log(x);
	documentsList.push(x);
}
$('#documentsList').empty();
$('#documentsList').append($('<option value="" selected disabled hidden>'+"Choose Document"+'</option>'));
$.each(documentsList, function(i, p) {
    $('#documentsList').append($('<option></option>').val(p).html(p));

	//console.log(resp);
});

});

});

//Load all the fields in another dropdown list and a bunch of other lists for various operations

$('#documentsList').change(function(){
	s = $(this);
  var documentName = s.val();



client.indices.getMapping({index: indexName}, function(err,resp,status){
	for(x in resp[indexName].mappings[documentName].properties){
	console.log(x+" - "+resp[indexName].mappings[documentName].properties[x].type);
	fieldsList.push(x);
	//console.log(fieldsList);
}
	//console.log(fieldsList);//console.log(resp);
	$('#QueryfieldsList1').empty();
	$('#QueryfieldsList1').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#QueryfieldsList1').append($('<option></option>').val(p).html(p));

    $('#QueryfieldsList2').empty();
	$('#QueryfieldsList2').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#QueryfieldsList2').append($('<option></option>').val(p).html(p))
 		});

    $('#QueryfieldsList3').empty();
	$('#QueryfieldsList3').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#QueryfieldsList3').append($('<option></option>').val(p).html(p))
});

	 $('#QueryfieldsList4').empty();
	$('#QueryfieldsList4').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#QueryfieldsList4').append($('<option></option>').val(p).html(p))
});
	 $('#QueryfieldsList5').empty();
	$('#QueryfieldsList5').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#QueryfieldsList5').append($('<option></option>').val(p).html(p))
});
		$('#FilterfieldsList1').empty();
	$('#FilterfieldsList1').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#FilterfieldsList1').append($('<option></option>').val(p).html(p));

    $('#FilterfieldsList2').empty();
	$('#FilterfieldsList2').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#FilterfieldsList2').append($('<option></option>').val(p).html(p))
 		});

    $('#FilterfieldsList3').empty();
	$('#FilterfieldsList3').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#FilterfieldsList3').append($('<option></option>').val(p).html(p))
});

	$('#AggregationFieldsList1').empty();
	$('#AggregationFieldsList1').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#AggregationFieldsList1').append($('<option></option>').val(p).html(p))
});

	$('#AggregationFieldsList2').empty();
	$('#AggregationFieldsList2').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#AggregationFieldsList2').append($('<option></option>').val(p).html(p))
});

	$('#AggregationFieldsList3').empty();
	$('#AggregationFieldsList3').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#AggregationFieldsList3').append($('<option></option>').val(p).html(p))
});

	$('#SortfieldsList1').empty();
	$('#SortfieldsList1').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#SortfieldsList1').append($('<option></option>').val(p).html(p))
});

	$('#SortfieldsList2').empty();
	$('#SortfieldsList2').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#SortfieldsList2').append($('<option></option>').val(p).html(p))
});

	$('#SortfieldsList3').empty();
	$('#SortfieldsList3').append($('<option value="" selected disabled hidden>'+"Choose Field"+'</option>'));

	$.each(fieldsList, function(i, p) {
    $('#SortfieldsList3').append($('<option></option>').val(p).html(p))
});
 
});
});


});

// $('#QueryfieldsList1').change(function(){

// 	s = $(this);
// 	var fieldname = s.val();
// var matchvalue = 30;

// // var body = bodybuilder().query('match', fieldname, matchvalue).build();

// // console.log(body);

// // client.search({
// //   index: 'bank',
// //   body: body
  
// // }, function (error, response) {
// //   // ...
// //   //console.log(error);
// //   console.log(response);
// // });

 });