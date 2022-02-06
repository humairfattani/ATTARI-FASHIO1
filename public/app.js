var hidesale = document.getElementById("hidesale")
var im1 = document.getElementById("im1")
var im2 = document.getElementById("im2")
var im3 = document.getElementById("im3")
var im4 = document.getElementById("im4")
var im5 = document.getElementById("im5")
var im6 = document.getElementById("im6")
var im7 = document.getElementById("im7")
var im8 = document.getElementById("im8")
var im9 = document.getElementById("im9")
var im10 = document.getElementById("im10")
var im11 = document.getElementById("im11")
var im12 = document.getElementById("im12")
var im13 = document.getElementById("im13")
var im14 = document.getElementById("im14")
var im15 = document.getElementById("im15")
var im16 = document.getElementById("im16")
var im17 = document.getElementById("im17")
var im18 = document.getElementById("im18")
var im19 = document.getElementById("im19")
var im20 = document.getElementById("im20")
var im21 = document.getElementById("im21")
var im22 = document.getElementById("im22")
var im23 = document.getElementById("im23")
var im24 = document.getElementById("im24")

function ho(){
im1.style.display = "none"
im2.style.display = "block"
}
function hi(){
    im1.style.display = "block"
    im2.style.display = "none"
}
function ho1(){
    im3.style.display = "none"
    im4.style.display = "block"
    }
    function hi1(){
        im3.style.display = "block"
        im4.style.display = "none"
    }
    
function ho2(){
    im5.style.display = "none"
    im6.style.display = "block"
    }
    function hi2(){
        im5.style.display = "block"
        im6.style.display = "none"
    }
       
function ho3(){
    im7.style.display = "none"
    im8.style.display = "block"
    }
    function hi3(){
        im7.style.display = "block"
        im8.style.display = "none"
    }
    function ho4(){
        im9.style.display = "none"
        im10.style.display = "block"
        }
        function hi4(){
            im9.style.display = "block"
            im10.style.display = "none"
        }
        function ho5(){
            im11.style.display = "none"
            im12.style.display = "block"
            }
            function hi5(){
                im11.style.display = "block"
                im12.style.display = "none"
            }
            
function ho6(){
    im13.style.display = "none"
    im14.style.display = "block"
    }
    function hi6(){
        im13.style.display = "block"
        im14.style.display = "none"
    }
            
    function ho7(){
        im15.style.display = "none"
        im16.style.display = "block"
        }
        function hi7(){
            im15.style.display = "block"
            im16.style.display = "none"
        }
        function ho8(){
            im17.style.display = "none"
            im18.style.display = "block"
            }
            function hi8(){
                im17.style.display = "block"
                im18.style.display = "none"
            }
            function ho9(){
                im19.style.display = "none"
                im20.style.display = "block"
                }
                function hi9(){
                    im19.style.display = "block"
                    im20.style.display = "none"
                }
                function ho10(){
                    im21.style.display = "none"
                    im22.style.display = "block"
                    }
                    function hi10(){
                        im21.style.display = "block"
                        im22.style.display = "none"
                    }
                    function ho11(){
                        im23.style.display = "none"
                        im24.style.display = "block"
                        }
                        function hi11(){
                            im23.style.display = "block"
                            im24.style.display = "none"
                        }
                                                       
var eventDate = new Date("Mar 2, 2022") .getTime();
var x =  setInterval(function(){
var currentdate = new Date().getTime( );
var difference = eventDate - currentdate
var s = Math.floor(difference / 1000)
var m = Math.floor(s / 60)
var h = Math.floor(m / 60)
var d = Math.floor(h /24)
var w = Math.floor(d /7)


s %= 60
m %= 60
h %= 60
s = (s < 10) ? "0" + s : s;
m = (m < 10) ? "0" + m : m;
h = (h < 10) ? "0" + h : h;
d = (d < 10) ? "0" + d : d;
w = (w < 10) ? "0" + w : w;

document.getElementById("weeks").innerHTML = w;
document.getElementById("days").innerHTML = d;
document.getElementById("hours").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;

if(w == 00 && d == 00 && h == 23 && m == 32 && s == 00){
    hidesale.style.display="none"
    clearInterval(x, );
}


},1000)













