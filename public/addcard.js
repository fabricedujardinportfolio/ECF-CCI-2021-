var clicks = 0;

function plus() {

    if (clicks < 20) {
        clicks += 1;
        document.getElementById("result").innerHTML = clicks;
    } else {
        clicks = 20;
    }
};

function moin() {
    if (clicks > 0) {
        clicks -= 1;
        document.getElementById("result").innerHTML = clicks;
    } else {
        clicks = 0;
    }
};