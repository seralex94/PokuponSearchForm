

function validate(form) {
	var elems = form.elements;
	if (elems[0].value) {
        if (elems[1].value) {
        		document.location.href=document.getElementById("searcher").options[document.getElementById("searcher").selectedIndex].value+elems[0].value;
    	} else {
    		alert('Укажите поисковую систему.');
        	var element = document.getElementById("searcher");
        	element.classList.add("error");
    	}
    } else {
    	alert('Введите текст для поиска.');
        var element = document.getElementById("search-text");
        element.classList.add("error");
    }
}




