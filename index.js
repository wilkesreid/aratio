function affect(el) {
    var aspect_ratio_parts = el.attributes.getNamedItem('aspect-ratio').value.split('x').map(function(i) {
        return parseFloat(i)
    });

    var newParent = document.createElement('div');
    newParent.classList = 'aratio-container';
    newParent.style.position = 'relative';
    newParent.style.height = '0';
    newParent.style.paddingBottom = (aspect_ratio_parts[1] / aspect_ratio_parts[0] * 100) + '%';

    el.style.position = 'absolute';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.objectFit = 'cover';
    
    el.parentNode.replaceChild(newParent, el);
    newParent.appendChild(el);
}

module.exports = function aratio(el) {

    // Handle calling with no argument
    if (el === undefined) {
        var els = document.querySelectorAll('[aspect-ratio]');
        for (i=0;i<els.length;i++) {
            affect(els[i]);
        }
    }

    // Handle NodeList collections, as in results from querySelectorAll
    else if (el.constructor == NodeList) {
        for (i=0;i<el.length;i++) {
            affect(el[i]);
        }
    } 

    // Handle single HTML elements
    else if (el instanceof Element) {
        affect(el);
    }
}
