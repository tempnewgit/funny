var xPos = 300;
var yPos = 200;
var step = 1;
var delay = 30;
var height = 0;
var width = 0;
var Hoffset = 0;
var Woffset = 0;
var yon = 0;
var xon = 0;
var pause = true;
var interval;
img1.style.top = yPos;
function changePos()
{

	if(document.documentElement && document.documentElement.clientWidth){
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
	} else if(document.body && document.body.clientWidth){
		width = document.body.clientWidth;
		height = document.body.clientHeight;
	}
	Hoffset = img1.offsetHeight;
	Woffset = img1.offsetWidth;

	if(document.documentElement && document.documentElement.scrollTop){
		img1.style.left = xPos + document.documentElement.scrollLeft+"px";
		img1.style.top = yPos + document.documentElement.scrollTop+"px";
	} else if(document.body && document.body.clientWidth){
		img1.style.left = xPos + document.body.scrollLeft+"px";
		img1.style.top = yPos + document.body.scrollTop+"px";
	}

	if (yon)
		{yPos = yPos + step;}
	else
		{yPos = yPos - step;}
	if (yPos < 0)
		{yon = 1;yPos = 0;}
	if (yPos >= (height - Hoffset))
		{yon = 0;yPos = (height - Hoffset);}
	if (xon)
		{xPos = xPos + step;}
	else
		{xPos = xPos - step;}
	if (xPos < 0)
		{xon = 1;xPos = 0;}
	if (xPos >= (width - Woffset))
		{xon = 0;xPos = (width - Woffset);   }
	}

	function start()
	 {
	 	//img1.visibility = "visible";
		interval = setInterval('changePos()', delay);
	}
	function pause_resume()
	{
		if(pause)
		{
			clearInterval(interval);
			pause = false;}
		else
		{
			interval = setInterval('changePos()',delay);
			pause = true;
			}
		}
	start();




