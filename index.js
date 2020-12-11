let section = document.querySelector('.section'); 
let nav = document.querySelector('.nav');
let btn = document.querySelector('.btn'); 
let X = null;
let M = 0;



section.addEventListener("mousedown", function(el)
{
    X = el.clientX;


    addEventListener("mousemove", MouseMove);

    function MouseMove(el)
    {
        M = el.clientX - X;
        if(M > 0 && M < 200)
        {
            nav.style.left = -100 + el.clientX / 5+ "px";
        }else if(M < 0)
        {
            console.log(-1);
        }

        addEventListener("mouseup", MouseUp); 
    }

    function MouseUp(el)
    {
        if(M > 100){
            nav.style.left = 0 + "px" 
        }else
        {
            nav.style.left = -100 + "px" 
        }
        X = null;

        removeEventListener("mousemove", MouseMove);
    }
})