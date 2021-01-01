var clicks = 0;

        function plus() {
            clicks += 1;
            document.getElementById("result").innerHTML = clicks;
        };

        function moin() {
            if (clicks > 0) {
                clicks -= 1;
                document.getElementById("result").innerHTML = clicks;
            } else {
                clicks = 0;
            }
        };