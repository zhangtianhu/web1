window.onload=function(){
	picScroll=document.getElementById("picScroll");
	picScroll1=document.getElementById("picScroll1");
	var ID=setInterval(changeToLeft,10);
	picScroll.onmouseover=function(){
		clearInterval(ID);
	}
	picScroll.onmouseout=function(){
		ID=setInterval(changeToLeft,10);
	}
	function changeToLeft(){
		if(picScroll.scrollLeft>=(picScroll1.offsetWidth)){
			picScroll.scrollLeft=0;
		}
		else{
			picScroll.scrollLeft+=1;
		}
	}
}