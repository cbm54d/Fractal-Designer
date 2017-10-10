var depth = 5;
$( function() {
    $( "#depth_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 10,
        value: 5,
        slide: function( event, ui ) {
            $( "#depth" ).val( ui.value );
            depth = ui.value;
            create();
        }
    });
    $("#depth").val( $("#depth_slider").slider("value") );
} );

$( function() {
    $("#depth").keyup( function() {
        var input_r = $("#depth").val();
        console.log(input_r);
        if( $.isNumeric( input_r ) ){
            console.log("New value of depth: " + input_r);
            $("#depth_slider").slider( "option", { value: input_r });
            depth = parseInt(input_r);
            create;
        }
    });
});



var root_r = 180;
$( function() {
    $( "#root_r_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 400,
        value: 180,
        slide: function( event, ui ) {
            $( "#root_r" ).val( ui.value );
            root_r = ui.value;
            update();
        }
    });
    $("#root_r").val( $("#root_r_slider").slider("value") );
} );

$( function() {
    $("#root_r").keyup( function() {
        var input_r = $("#root_r").val();
        console.log(input_r);
        if( $.isNumeric( input_r ) ){
            console.log("New value of root_r: " + input_r);
            $("#root_r_slider").slider( "option", { value: input_r });
            root_r = parseInt(input_r);
            update();
        }
    });
});



var root_a = 90;
$( function() {
    $( "#root_a_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 360,
        value: 90,
        slide: function( event, ui ) {
            $( "#root_a" ).val( ui.value );
            root_a = ui.value;
            update();
        }
    });
    $("#root_a").val( $("#root_a_slider").slider("value") );
} );

$( function() {
    $("#root_a").keyup( function() {
        var input_root_a = $("#root_a").val();
        if( $.isNumeric( input_root_a ) ){
            console.log("New value of root_a: " + input_root_a);
            $("#root_a_slider").slider( "option", { value: input_root_a });
            root_a = parseInt(input_root_a);
            update();
        }
    });
});



var root_x = 980;
$( function() {
    $( "#root_x_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 1600,
        value: 980,
        slide: function( event, ui ) {
            $( "#root_x" ).val( ui.value );
            root_x = ui.value;
            update();
        }
    });
    $("#root_x").val( $("#root_x_slider").slider("value") );
} );

$( function() {
    $("#root_x").keyup( function() {
        var input_x = $("#root_x").val();
        if( $.isNumeric( input_x ) ){
            console.log("New value of root_x: " + input_x);
            $("#root_x_slider").slider( "option", { value: input_x });
            root_x = parseInt(input_x);
            update();
        }
    });
});



var root_y = 180;
$( function() {
    $( "#root_y_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 720,
        value: 180,
        slide: function( event, ui ) {
            $( "#root_y" ).val( ui.value );
            root_y = ui.value;
            update();
        }
    });
    $("#root_y").val( $("#root_y_slider").slider("value") );
});

$( function() {
    $("#root_y").keyup( function() {
        var input_y = $("#root_y").val();
        if( $.isNumeric( input_y ) ){
            console.log("New value of root_y: " + input_y);
            $("#root_y_slider").slider( "option", { value: input_y });
            root_y = parseFloat(input_y);
            update();
        }
    });
});



var rel1_s = 0.75;
$( function() {
    $( "#rel1_s_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 1.5,
        step: 0.01,
        value: 0.75,
        slide: function( event, ui ) {
            $( "#rel1_s" ).val( ui.value );
            rel1_s = ui.value;
            update();
        }
    });
    $("#rel1_s").val( $("#rel1_s_slider").slider("value") );
});

$( function() {
    $("#rel1_s").keyup( function() {
        var input_s = $("#rel1_s").val();
        if( $.isNumeric( input_s ) ){
            console.log("New value of rel1_s: " + input_s);
            $("#rel1_s_slider").slider( "option", { value: input_s });
            rel1_s = parseFloat(input_s);
            update();
        }
    });
});



var rel1_a = 45;
$( function() {
    $( "#rel1_a_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 360,
        value: 45,
        slide: function( event, ui ) {
            $( "#rel1_a" ).val( ui.value );
            rel1_a = ui.value;
            update();
        }
    });
    $("#rel1_a").val( $("#rel1_a_slider").slider("value") );
});

$( function() {
    $("#rel1_a").keyup( function() {
        var input_a = $("#rel1_a").val();
        if( $.isNumeric( input_a ) ){
            console.log("New value of rel1_a: " + input_a);
            $("#rel1_a_slider").slider( "option", { value: input_a });
            rel1_a = parseFloat(input_a);
            update();
        }
    });
});



var rel1_tr = 1;
$( function() {
    $( "#rel1_tr_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 2,
        value: 1,
        step: 0.01,
        slide: function( event, ui ) {
            $( "#rel1_tr" ).val( ui.value );
            rel1_tr = ui.value;
            update();
        }
    });
    $("#rel1_tr").val( $("#rel1_tr_slider").slider("value") );
});

$( function() {
    $("#rel1_tr").keyup( function() {
        var input_tr = $("#rel1_tr").val();
        if( $.isNumeric( input_tr ) ){
            console.log("New value of rel1_tr: " + input_tr);
            $("#rel1_tr_slider").slider( "option", { value: input_tr });
            rel1_tr = parseFloat(input_tr);
            update();
        }
    });
});



var rel1_ta = 0;
$( function() {
    $( "#rel1_ta_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 360,
        value: 0,
        slide: function( event, ui ) {
            $( "#rel1_ta" ).val( ui.value );
            rel1_ta = ui.value;
            update();
        }
    });
    $("#rel1_ta").val( $("#rel1_ta_slider").slider("value") );
});

$( function() {
    $("#rel1_ta").keyup( function() {
        var input_ta = $("#rel1_ta").val();
        if( $.isNumeric( input_ta ) ){
            console.log("New value of rel1_ta: " + input_ta);
            $("#rel1_ta_slider").slider( "option", { value: input_ta });
            rel1_ta = parseFloat(input_ta);
            update();
        }
    });
});




var rel2_s = 0.75;
$( function() {
    $( "#rel2_s_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 1.5,
        step: 0.01,
        value: 0.75,
        slide: function( event, ui ) {
            $( "#rel2_s" ).val( ui.value );
            rel2_s = ui.value;
            update();
        }
    });
    $("#rel2_s").val( $("#rel2_s_slider").slider("value") );
});

$( function() {
    $("#rel2_s").keyup( function() {
        var input_s = $("#rel2_s").val();
        if( $.isNumeric( input_s ) ){
            console.log("New value of rel2_s: " + input_s);
            $("#rel2_s_slider").slider( "option", { value: input_s });
            rel2_s = parseFloat(input_s);
            update();
        }
    });
});



var rel2_a = 315;
$( function() {
    $( "#rel2_a_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 360,
        value: 315,
        slide: function( event, ui ) {
            $( "#rel2_a" ).val( ui.value );
            rel2_a = ui.value;
            update();
        }
    });
    $("#rel2_a").val( $("#rel2_a_slider").slider("value") );
});

$( function() {
    $("#rel2_a").keyup( function() {
        var input_a = $("#rel2_a").val();
        if( $.isNumeric( input_a ) ){
            console.log("New value of rel2_a: " + input_a);
            $("#rel2_a_slider").slider( "option", { value: input_a });
            rel2_a = parseFloat(input_a);
            update();
        }
    });
});



var rel2_tr = 1;
$( function() {
    $( "#rel2_tr_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 2,
        value: 1,
        step: 0.01,
        slide: function( event, ui ) {
            $( "#rel2_tr" ).val( ui.value );
            rel2_tr = ui.value;
            update();
        }
    });
    $("#rel2_tr").val( $("#rel2_tr_slider").slider("value") );
});

$( function() {
    $("#rel2_tr").keyup( function() {
        var input_tr = $("#rel2_tr").val();
        if( $.isNumeric( input_tr ) ){
            console.log("New value of rel2_tr: " + input_tr);
            $("#rel2_tr_slider").slider( "option", { value: input_tr });
            rel2_tr = parseFloat(input_tr);
            update();
        }
    });
});



var rel2_ta = 0;
$( function() {
    $( "#rel2_ta_slider" ).slider({
        orientation: "horizontal",
        range: "max",
        min: 0,
        max: 360,
        value: 0,
        slide: function( event, ui ) {
            $( "#rel2_ta" ).val( ui.value );
            rel2_ta = ui.value;
            update();
        }
    });
    $("#rel2_ta").val( $("#rel2_ta_slider").slider("value") );
});

$( function() {
    $("#rel2_ta").keyup( function() {
        var input_ta = $("#rel2_ta").val();
        if( $.isNumeric( input_ta ) ){
            console.log("New value of rel2_ta: " + input_ta);
            $("#rel2_ta_slider").slider( "option", { value: input_ta });
            rel2_ta = parseFloat(input_ta);
            update();
        }
    });
});