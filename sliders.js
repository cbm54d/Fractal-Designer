var root_r = 180;
$( function() {
    $( "#root_r_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 240,
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
        }
    });
});



var root_a = 90;
$( function() {
    $( "#root_a_slider" ).slider({
        orientation: "vertical",
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
        var input_a = $("#root_a").val();
        if( $.isNumeric( input_a ) ){
            console.log("New value of root_a: " + input_a);
            $("#root_a_slider").slider( "option", { value: input_a });
        }
    });
});



var root_x = 360;
$( function() {
    $( "#root_x_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 720,
        value: 360,
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
        }
    });
});



var root_y = 0;
$( function() {
    $( "#root_y_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 720,
        value: 0,
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
        }
    });
});



var rel1_s = 0;
$( function() {
    $( "#rel1_s_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 720,
        value: 0,
        slide: function( event, ui ) {
            $( "#rel1_s" ).val( ui.value );
            rel1_s = ui.value;
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
        }
    });
});



var rel1_a = 0;
$( function() {
    $( "#rel1_a_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 720,
        value: 0,
        slide: function( event, ui ) {
            $( "#rel1_a" ).val( ui.value );
            rel1_a = ui.value;
        }
    });
    $("#rel1_a").val( $("#rel1_a_slider").slider("value") );
});

$( function() {
    $("#rel1_a").keyup( function() {
        var input_s = $("#rel1_a").val();
        if( $.isNumeric( input_s ) ){
            console.log("New value of rel1_a: " + input_s);
            $("#rel1_a_slider").slider( "option", { value: input_s });
        }
    });
});



var rel1_tr = 0;
$( function() {
    $( "#rel1_tr_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 720,
        value: 0,
        slide: function( event, ui ) {
            $( "#rel1_tr" ).val( ui.value );
            rel1_tr = ui.value;
        }
    });
    $("#rel1_tr").val( $("#rel1_tr_slider").slider("value") );
});

$( function() {
    $("#rel1_tr").keyup( function() {
        var input_s = $("#rel1_tr").val();
        if( $.isNumeric( input_s ) ){
            console.log("New value of rel1_tr: " + input_s);
            $("#rel1_tr_slider").slider( "option", { value: input_s });
        }
    });
});



var rel1_ta = 0;
$( function() {
    $( "#rel1_ta_slider" ).slider({
        orientation: "vertical",
        range: "max",
        min: 0,
        max: 720,
        value: 0,
        slide: function( event, ui ) {
            $( "#rel1_ta" ).val( ui.value );
            rel1_ta = ui.value;
        }
    });
    $("#rel1_ta").val( $("#rel1_ta_slider").slider("value") );
});

$( function() {
    $("#rel1_ta").keyup( function() {
        var input_s = $("#rel1_ta").val();
        if( $.isNumeric( input_s ) ){
            console.log("New value of rel1_ta: " + input_s);
            $("#rel1_ta_slider").slider( "option", { value: input_s });
        }
    });
});