function sliding() {
    $(".slider #1").show("fade", 500);
    $(".slider #1").delay(3000).hide("fade", 400);

    var sc = $(".slider img").size();
    var count = 2;

    setInterval(function() {
        $(".slider #" + count).show("fade", 400);
        $(".slider #" + count).delay(3000).hide("fade", 400);

        if (count == sc) {
            count = 1;
        } else {
            count = count + 1;
        }
    }, 3000);
}

function sliding_testimonials() {
    $("#_1").show("slide", {
        direction: "right"
    }, 500);
    $("#_1").delay(3000).hide("slide", {
        direction: "left"
    }, 400);

    var sc = $(".test_size").size();
    var count = 2;

    setInterval(function() {
        $("#_" + count).show("slide", {
            direction: "right"
        }, 400);
        $("#_" + count).delay(3000).hide("slide", {
            direction: "left"
        }, 400);

        if (count == sc) {
            count = 1;
        } else {
            count = count + 1;
        }
    }, 3000);
}


function openTab(evt, dishName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("Tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(dishName).style.display = "block";
    evt.currentTarget.className += " active";
}


function test1() {
    var x = document.getElementById('reg').innerHTML;
    document.getElementById('p').innerHTML = x;
}

function test2() {
    var x = document.getElementById('lun').innerHTML;
    document.getElementById('p').innerHTML = x;
}

function test3() {
    var x = document.getElementById('sna').innerHTML;
    document.getElementById('p').innerHTML = x;
}

function test4() {
    var x = document.getElementById('des').innerHTML;
    document.getElementById('p').innerHTML = x;
}

function test5() {
    var x = document.getElementById('bev').innerHTML;
    document.getElementById('p').innerHTML = x;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}