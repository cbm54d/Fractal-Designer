// Tree configuration
var branches = [];

var depth = 5;

var seed = new Line(900, 60, 180, 90, 0);

var numRelations = 2;   // this will change in later versions

var relations = [];
var rel1 = new Relation(0.75, 45, 1, 0);
var rel2 = new Relation(0.75, 315, 1, 0);
relations[0] = rel1;
relations[1] = rel2;


function log_branch(b){
    console.log("b.x: " + b.x);
    console.log("b.y: " + b.y);
    console.log("b.r: " + b.r);
    console.log("b.a: " + b.a);
    console.log("b.d: " + b.d);
}

function log_relation(rel) {
    console.log("rel.scale: " + rel.scale);
    console.log("rel.rotate: " + rel.rotate);
    console.log("rel.translate_r: " + rel.translate_r);
    console.log("rel.translate_a: " + rel.translate_a);
}

function branch(b) {
    console.log("running branch");
    log_branch(b);
    
    // Add line defined in previous recursion
    branches.push(b);
    
    // base case for ending recursion
    if (b.d == depth-1)
		return;
    
    var end = endPt(b);
    var start;
    var newLine;
    
    start = newStart(b, relations[0]);
    newLine = new Line(
        start.x,
        start.y,
        b.r * relations[0].scale,
        (b.a + relations[0].rotate) % 360,
        b.d + 1
    );
    branch(newLine);    // first recursive call
    
    start = newStart(b, relations[1]);
    newLine = new Line(
        start.x,
        start.y,
        b.r * relations[1].scale,
        (b.a + relations[1].rotate) % 360,
        b.d + 1
    );
    branch(newLine);    // second recursive call
    
}

function newStart(b, rel) {
    console.log("running newStart");
    //log_relation(rel);
    // Return starting point of new branch
    var x = b.x + (b.r * rel.translate_r) * (Math.cos((b.a + rel.translate_a) * (Math.PI/180)));
    
    var y = b.y + (b.r * rel.translate_r) * (Math.sin((b.a + rel.translate_a) * (Math.PI/180)));
    
    return {x: x, y: y};
}

function endPt(b) {
	// Return endpoint of branch
	var x = b.x + b.r * Math.cos( b.a * (Math.PI/180) );
	var y = b.y + b.r * Math.sin( b.a * (Math.PI/180) );
	return {x: x, y: y};
}

// D3 functions
function x1(d) {return d.x;}
function y1(d) {return d.y;}
function x2(d) {return endPt(d).x;}
function y2(d) {return endPt(d).y;}

function create() {
    console.log("running create");
	branches = [];
	branch(seed);
	d3.select('svg')
		.remove();
		
	d3.select('div#chart')
		.append('svg');
	
	d3.select('svg')
		.selectAll('line')
		.data(branches)
		.enter()
		.append('line')
		.attr('x1', x1)
		.attr('y1', y1)
		.attr('x2', x2)
		.attr('y2', y2)
		.style('stroke-width', function(d) {return parseInt(depth - d.d) + 'px';})    //****
}

function update() {
    console.log("running update");
	branches = [];
	//seed = {i: 0, x: 420, y: 500, a: 0, l: treeLength, d:0}; // a = angle, l = length, d = depth
    
    // The root_ values are global variables from sliders.js
    var seed = new Line(root_x, root_y, root_r, root_a, 0);
    
    relations = [];
    var rel1 = new Relation(rel1_s, rel1_a, rel1_tr, rel1_ta);
    var rel2 = new Relation(rel2_s, rel2_a, rel2_tr, rel2_ta);
    relations[0] = rel1;
    relations[1] = rel2;
    log_relation(relations[0]);

	branch(seed);
	d3.select('svg')
		.selectAll('line')
		.data(branches)
		.transition()
		.attr('x1', x1)
		.attr('y1', y1)
		.attr('x2', x2)
		.attr('y2', y2);
}

create();