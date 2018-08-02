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




var myp5 = new p5(sketch);

function resetCanvas()
{
    myp5.x = myp5.width/2;
    myp5.y = myp5.height/2;

    myp5.kirmizi = myp5.random(255);
    myp5.yesil = myp5.random(255);
    myp5.mavi = myp5.random(255);
    myp5.background(30);
}

setInterval(resetCanvas,3000);


