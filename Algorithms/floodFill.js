// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
//(fill in all values up, down, left and right starting at current: image[sr][sc] with color (which should be new color/value) if that val is === current)


var floodFill = function(image, sr, sc, color) {

    //The input to be replaced
    const current = image[sr][sc]
    // If current color and new color are the same, return
    if (current === color) {
        return image
    }

    fill(image, sr, sc, color, current)
    return image;
}


const fill = (image, sr, sc, color, current) => {
    if (sr < 0) return;

    if (sc < 0) return;
    //if row is greater than image length
    if (sr > image.length - 1) return;
    //if col is greater than image length
    if (sc > image[sr].length - 1) return;

    //If the value in any direction does not equal current, skip it*
    if (image[sr][sc] !== current) {
        return
    }
    // else update val with new color
    image[sr][sc] = color;

    //fill in all four directions, call fill recursively
    //prev row
    fill(image, sr - 1, sc, color, current)
    //next row
    fill(image, sr + 1, sc, color, current)
    //prev Col
    fill(image, sr, sc - 1, color, current);
    //next Col
    fill(image, sr, sc + 1, color, current)

}

