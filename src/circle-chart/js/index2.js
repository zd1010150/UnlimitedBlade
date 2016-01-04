var strokeWidth=20;
                var r = Raphael("holder2", 200, 200),
                    R = 50,
                    color="blue",
                    init = true,
                    backGroundParam = {"stroke": "#e8e8e8", "stroke-width": strokeWidth},
                    param={"stroke-width": strokeWidth};
               
                var svgOriginX=100,svgOriginY=100;
                 var originX=svgOriginX;
                var originY=svgOriginY+R;
                //directionFlag如果是左侧就传入1，如果是右侧就传入0
                r.customAttributes.arc=function(value, total,directionFlag){
                    var alpha=180/total*value,
                        a=(90-alpha)* Math.PI / 180,
                        y=originY-(R-R*Math.sin(a)),
                        x=R*Math.cos(a);
                       directionFlag==0?x=originX+x:x=originX-x;

                    if(total==value){
                        path=[["M",originX,originY],["A",R,R,0,0,directionFlag,originX,originY-2*R]];
                        
                    }else{
                        path=[["M",originX,originY],["A",R,R,0,0,directionFlag,x,y]];
                     
                    }
                     
                    return {path: path, stroke: color};
                };
                var backgroundCircle=r.circle(svgOriginX,svgOriginY,R).attr(backGroundParam);
                function updateVal(value, total, direction, hand) {
                    hand.animate({arc: [value, total, direction]}, 2000, ">");
                    
                }
                (function(){
                    var hor = r.path().attr(param).attr({arc: [0, 1000, 0]});
                    updateVal(600,1000,0,hor);

                  var hor2 = r.path().attr(param).attr({arc: [0, 1000, 1]});
                   updateVal(600,1000,1,hor2);

                })();