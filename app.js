
function type(d){
	d.sepal_length = +d.sepal_length;
	d.petal_length = +d.petal_length;
	d.sepal_width = +d.sepal_width;
	d.petal_width = +d.petal_width;
}
d3.csv("iris.csv",type,function (array) {
	// body...
})