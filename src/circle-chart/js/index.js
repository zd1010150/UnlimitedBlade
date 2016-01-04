window.onload = function() {
    var r = Raphael("holder", 600, 600),
        R = 200,
        init = true,
        backGroundParam = {
            "stroke": "#e8e8e8",
            "stroke-width": 20
        },
        param = {
            "stroke-width": 20
        };

    // Custom Attribute
    r.customAttributes.arc = function(value, total, R) {
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = 300 + R * Math.cos(a),
            y = 300 - R * Math.sin(a),
            color = "blue",
            path;
        if (total == value) {
            path = [
                ["M", 300, 300 - R],
                ["A", R, R, 0, 1, 1, 299.99, 300 - R]
            ];
        } else {
            path = [
                ["M", 300, 300 - R],
                ["A", R, R, 0, +(alpha > 180), 1, x, y]
            ];
        }
        return {
            path: path,
            stroke: color
        };
    };
    
    var backgroundCircle = r.circle(300, 300, R).attr(backGroundParam);
    var hor = r.path().attr(param).attr({
        arc: [0, 1000, R]
    });


    function updateVal(value, total, R, hand) {
        hand.animate({
            arc: [value, total, R]
        }, 4000, ">");

    }


    updateVal(500, 1000, R, hor);
};