function Line(x, y, r, a, d) {
    //'use strict';
    this.x = x; // starting x
    this.y = y; // starting y
    this.r = r; // length
    this.a = a; // angle
    this.d = d; // depth
}

function Relation(scale, rotate, translate_r, translate_a) {
    //'use strict';
    this.scale = scale;
    this.rotate = rotate;
    this.translate_r = translate_r;
    this.translate_a = translate_a;
}