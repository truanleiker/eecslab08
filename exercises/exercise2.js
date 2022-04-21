var state = 1
let currentWindow = document.getElementById("hand");



function changeState()
{
    currentWindow.style.display = "none";

    switch (state)
    {        
        case 1:
            currentWindow = document.getElementById("hand");
            break;
        case 2:
            currentWindow = document.getElementById("batman");
            break;
        case 3:
            currentWindow = document.getElementById("dprk");
            break;
        case 4:
            currentWindow = document.getElementById("phonisandfib");
            break;
        case 5:
            currentWindow = document.getElementById("sponge");
            break;
    }

    currentWindow.style.display = "inline";
}

function next()
{
    if (state == 5)
    {
        state = 1;
    }
    else
    {
        state += 1;
    }

    changeState();
}

function previous()
{
    if (state == 1)
    {
        state = 5;
    }
    else
    {
        state -= 1;
    }

    changeState();
}