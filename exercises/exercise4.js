function update()
{
    let namingIsHard = document.getElementById("namingIsHard");
    let rBorder = document.getElementById("rBorder").value;
    let gBorder = document.getElementById("gBorder").value;
    let bBorder = document.getElementById("bBorder").value;
    let widthBorder = document.getElementById("widthBorder").value;
    let rBackground = document.getElementById("rBackground").value;
    let gBackground = document.getElementById("gBackground").value;
    let bBackground = document.getElementById("bBackground").value;

    namingIsHard.style.border = "solid";
    namingIsHard.style.borderWidth = `${widthBorder}px`;
    namingIsHard.style.borderColor = "rgb(" + rBorder + ", " + gBorder + ", " + bBorder + ")";
    namingIsHard.style.backgroundColor = "rgb(" + rBackground + ", " + gBackground + ", " + bBackground + ")";
}