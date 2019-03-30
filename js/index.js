var is_out = 0;


function hamburger_expand() {
	if(is_out == 0) {
		expand_menu();
	} else {
		close_menu();
	}
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function expand_menu() {
    document.getElementById("navmobl-side").style.width = "200px";
    is_out = 1;
}


/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function close_menu() {
    document.getElementById("navmobl-side").style.width = "0";
    is_out = 0;
}