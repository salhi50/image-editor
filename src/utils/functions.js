/**
 * Save Image with filters
 * @param {String} imgSrc 
 * @param {String} filters All css filters
 */

function saveImageWithFilters(imgSrc, filters) {
    var img = new Image();
    img.src = imgSrc;

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.filter = filters;
    ctx.drawImage(img, 0,0);

    createFakeLink(canvas.toDataURL());
}

/**
 * Create a fake link to download image
 * @param {ImageURL} href used to download an image
 */

function createFakeLink(href) {
    var a = document.createElement('a');
    a.href = href;
    a.download = "saved-image.jpg";
    document.body.appendChild(a);

    a.click();
    document.body.removeChild(a);
}

export {
    saveImageWithFilters,
}