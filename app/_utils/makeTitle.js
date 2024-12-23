function makeTitle(slug) {
    var words = slug.split('-');

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = (i === 0 ? word.charAt(0).toUpperCase() : word.charAt(0)) + word.slice(1);
    }

    return words.join(' ');
}

export default makeTitle