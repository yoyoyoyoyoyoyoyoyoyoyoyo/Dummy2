function setup() {
 createCanvas(640, 480);
}

function draw() {
    background('#000000');
    var x = mouseX;
    var y = mouseY;
    
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
