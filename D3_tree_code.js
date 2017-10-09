/* D3 Tree */
/* Copyright 2013 Peter Cook (@prcweb); Licensed MIT */
/*
// Tree configuration
var branches = [];
var seed = {i: 0, x: 360, y: 0, a: 0, l: 180, d:0}; // a = angle, l = length, d = depth
var scaleFactor = 0.75; // each branch in 20% smaller than its parent
var rAngle = Math.PI/4; // 45Ëš - angles are in radians - (180 deg = PI rad)
var lAngle = 0 - Math.PI/4; // -45Ëš
var maxDepth = 10; // number of trunk segments


// Tree creation functions
function branch(b) {
	var end = endPt(b);
	var newB;

	branches.push(b);

	if (b.d == maxDepth-1)
		return;

	// Left branch
	newB = {
		i: branches.length,
		x: end.x,
		y: end.y,
		a: b.a + lAngle,
		l: b.l * scaleFactor,
		d: b.d + 1,
		parent: b.i
	};
	branch(newB);

	// Right branch
	newB = {
		i: branches.length,
		x: end.x, 
		y: end.y, 
		a: b.a + rAngle, 
		l: b.l * scaleFactor, 
		d: b.d + 1,
		parent: b.i
	};
	branch(newB);
}

function endPt(b) {
	// Return endpoint of branch
	var x = b.x + b.l * Math.sin( b.a );
	var y = b.y - b.l * Math.cos( b.a );
	return {x: x, y: y};
}

// D3 functions
function x1(d) {return d.x;}
function y1(d) {return d.y;}
function x2(d) {return endPt(d).x;}
function y2(d) {return endPt(d).y;}

function create() {
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
		.style('stroke-width', function(d) {return parseInt(maxDepth - d.d) + 'px';})
		.attr('id', function(d) {return 'id-' + d.i;});
}

function update() {
	branches = [];
	seed = {i: 0, x: 420, y: 500, a: 0, l: treeLength, d:0}; // a = angle, l = length, d = depth
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

create();*/