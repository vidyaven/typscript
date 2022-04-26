var area = /** @class */ (function () {
    function area() {
        this.radius = 10;
        this.width = 5;
        this.height = 3;
        this.areacircle = 3.14 * this.radius * this.radius;
        this.rectangular = this.height * this.width;
    }
    return area;
}());
var circle = new area();
console.log(circle.areacircle);
console.log(circle.rectangular);
