$(document).ready(function(){
    $("p").click(function(){
        $(this).slideToggle("slow");
    });
    
    $("button").mouseenter(function(){
        $(this).removeClass("make-red").addClass("make-blue");
    });
    
    $("button").mouseleave(function(){
        $(this).addClass("make-red").removeClass("make-blue");
    });

    // $(".box").click(function() {
    // 	/**
    // 	 * When we click on an element that has
    // 	 * a 'box' class, this event will be fired.
    //      * Gets the second class name, gets elements with same class name
    //      * adds change of background-color
    // 	 */
    // 	let classNames = $(this).attr("class").split(" ");
    //     $("." + classNames[1]).css("background-color", "red");
    // });

    // $(".box").click(function() {
    // 	/**
    // 	 * When we click on an element that has
    // 	 * a 'box' class, this event will be fired.
    //      * Gets the second class name, gets elements with same class name
    //      * adds change of background-color
    // 	 */
    // 	let classNames = $(this).attr("class").split(" ");
    //     $("." + classNames[1]).addClass("make-red");
    // });

    $(".box").click(function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
         * Gets the second class name, gets elements with same class name
         * adds change of background-color
    	 */
    	let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            // If this object is already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });

});

