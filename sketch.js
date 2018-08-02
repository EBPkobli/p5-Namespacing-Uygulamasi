var sketch = function(p)
{
    p.x = 100;
    p.y = 100;

    p.kirmizi = 255;
    p.yesil = 255;
    p.mavi = 0;

    p.setup = function() {
        p.createCanvas(400,400);
        p.background(30);

    }
    
    p.draw =function() {
        p.fill(p.kirmizi,p.yesil,p.mavi,50);
        p.noStroke();
        p.ellipse(p.x,p.y,48,48);

        p.x = p.x + p.random(-10,10);
        p.y = p.y + p.random(-10,10);

    }
}




var myp5_1 = new p5(sketch);
var myp5_2 = new p5(sketch);

function resetCanvas()
{
    myp5_1.x = myp5_1.width/2;
    myp5_1.y = myp5_1.height/2;

    myp5_1.kirmizi = myp5_1.random(255);
    myp5_1.yesil = myp5_1.random(255);
    myp5_1.mavi = myp5_1.random(255);
    myp5_1.background(30);

    myp5_2.x = myp5_2.width/2;
    myp5_2.y = myp5_2.height/2;

    myp5_2.kirmizi = myp5_2.random(255);
    myp5_2.yesil = myp5_2.random(255);
    myp5_2.mavi = myp5_2.random(255);
    myp5_2.background(30);
}

setInterval(resetCanvas,3000);


