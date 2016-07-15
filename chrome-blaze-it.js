function htmlreplace(a, b, element) {
    if (!element) element = document.body;
        var nodes = element.childNodes;

    for (var n = 0; n < nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            var r = new RegExp(a, 'gi');
            nodes[n].textContent = nodes[n].textContent.replace(r, b);
        } else {
            htmlreplace(a, b, nodes[n]);
        }
    }
}

htmlreplace('4:20', '4:20 BLAZE IT');
