window.onload = function(){
    var oTop = document.getElementsByClassName('backToTop');
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        if(osTop >= clientHeight){
            oTop[0].style.display = 'block';
        }else{
            oTop[0].style.display = 'none';
        }

        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    }

    oTop[0].onclick = function(){
        timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop = true;
            if(osTop == 0){
                clearInterval(timer);
            }
        },20);
    }
}