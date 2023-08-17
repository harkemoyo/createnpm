    // Select all elements with the class '.shadowpad'
    function creatNpm(options) {

    let images = document.querySelectorAll('.shadowpad');

    images.forEach(image => {
        // Check if the shadow type is 'hard'
        if (options.shadowType === 'hard') {
            image.style.boxShadow = 'none'; // Remove shadow
        } else {
            image.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0, 0, 0, 0.2)`; // Apply shadow
        }

        // Apply padding if the 'padding' option is true
        if (options.padding) {
            image.style.padding = '1rem';
        }
    });
}

module.exports.creatNpm = creatNpm