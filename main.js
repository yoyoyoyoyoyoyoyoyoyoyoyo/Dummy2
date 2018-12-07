var hu;
var feed = []; // an empty array
var numFood = 10;

var a = [1,2,3];

function setup() {
    createCanvas(740, 480);
    hu = new Human();

    // initializing 10 pieces of food
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function Food(x, y) {
    // keyword this
    // makes variables public on the object
    
    // public instance variables
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize);
    }
}

function Human() {
    // private instance variables
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;

    this.getDistance = function(other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };
    
    this.eat = function() {
        for(var i = 0; i < feed.length ; i++) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
                }
        };   
    
    this.display = function() {   
        x = mouseX;
        y = mouseY;
         //leftEar;
        fill('#FAEBD7');
        push();
        translate(x-100, y-80);
        rotate(Math.PI / 4);
        ellipse(0,0, 92, 52);
        pop();

        //rightEar;
        fill('#FAEBD7');
        push();
        translate(x+100, y-80);
        rotate(Math.PI / 4);
        ellipse(0,0, 52, 92);
        pop();

         //leftEarIn;
        fill('#DEB887');
        push();
        translate(x-100, y-80);
        rotate(Math.PI / 4);
        ellipse(0,0, 62, 22);
        pop();

        //rightEarIn;
        fill('#DEB887');
        push();
        translate(x+100, y-80);
        rotate(Math.PI / 4);
        ellipse(0,0, 22, 62);
        pop();

        noStroke();
        fill('#FAEBD7');
        ellipse(x ,y , 200, 300);

        //nose;
        fill('#EFB8D2');
        ellipse(x, y+30, 74, 64);

        //pupilLeft;
        fill('#FFFFFF');
        ellipse(x+42, y-26 , 40, 40);

        //eyeLeft;
        fill('#FFFFFF');
        ellipse(x+42, y-26 , 80, 40);

        //pupilLeft;
        fill('#00FFFF');
        ellipse(x+42, y-26 , 40, 40);

        //pupilRight
        fill('#FFFFFF');
        ellipse(x-42, y-26, 80, 40);

        //eyeRight
        fill('#00FFFF');
        ellipse(x-42, y-26, 40, 40);

        //tounge;
        fill('#EE3E36');
        arc(x-20 ,y+80 ,40 ,70 ,0 ,PI+QUARTER_PI, CHORD);
    }
}
