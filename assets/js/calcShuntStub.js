function stubTuneMain() {


    //function to calculate the d and ls, lo values according to formula from Pozar book
    function calcShuntStub(z0, rl, xl, fullsolution = 0) {
        var B1, B2, beta_d1, beta_d2, d, d1, d2, lo, lo1, lo2, ls, ls1, ls2, rl, solution, t1, t2, w, xl;

        solution = [];

        if ((rl == z0)) {
            t1 = ((- xl) / (2 * z0));
            t2 = t1;
        } else {
            t1 = ((xl + Math.sqrt(((rl * (Math.pow((z0 - rl), 2) + Math.pow(xl, 2))) / z0))) / (rl - z0));
            t2 = ((xl - Math.sqrt(((rl * (Math.pow((z0 - rl), 2) + Math.pow(xl, 2))) / z0))) / (rl - z0));
        }
        beta_d1 = Math.atan(t1);
        beta_d2 = Math.atan(t2);
        if ((beta_d1 >= 0)) {
            d1 = (beta_d1 / (2 * Math.PI));
        } else {
            d1 = ((beta_d1 / (2 * Math.PI)) + (1 / 2));
        }
        if ((beta_d2 >= 0)) {
            d2 = (beta_d2 / (2 * Math.PI));
        } else {
            d2 = ((beta_d2 / (2 * Math.PI)) + (1 / 2));
        }
        B1 = (((Math.pow(rl, 2) * t1) - ((z0 - (xl * t1)) * (xl + (z0 * t1)))) / (z0 * (Math.pow(rl, 2) + Math.pow((xl + (z0 * t1)), 2))));
        B2 = (((Math.pow(rl, 2) * t2) - ((z0 - (xl * t2)) * (xl + (z0 * t2)))) / (z0 * (Math.pow(rl, 2) + Math.pow((xl + (z0 * t2)), 2))));
        lo1 = ((- Math.atan((z0 * B1))) / (2 * Math.PI));
        lo2 = ((- Math.atan((z0 * B2))) / (2 * Math.PI));
        ls1 = (Math.atan((1 / (z0 * B1))) / (2 * Math.PI));
        ls2 = (Math.atan((1 / (z0 * B2))) / (2 * Math.PI));
        if ((lo1 < 0)) {
            lo1 += (0.5);
        }
        if ((lo2 < 0)) {
            lo2 += (0.5);
        }
        if ((ls1 < 0)) {
            ls1 += (0.5);
        }
        if ((ls2 < 0)) {
            ls2 += (0.5);
        }
        if (fullsolution) {
            solution = {"d1": d1, "d2": d2, "lo1": lo1, "lo2": lo2, "ls1": ls1, "ls2": ls2};
        } else {
            if ((d1 < d2)) {
                d = d1;
            } else {
                d = d2;
            }
            if ((lo1 < lo2)) {
                lo = lo1;
            } else {
                lo = lo2;
            }
            if ((ls1 < ls2)) {
                ls = ls1;
            } else {
                ls = ls2;
            }
            solution = {"d": d, "lo": lo, "ls": ls};
        }
        return solution;
    }


    //get values from input fields
    var z0 = document.getElementById("charImp");
    var rl = document.getElementById("loadRes");
    var xl = document.getElementById("loadReact");

    //calculate the values of d,ls,lo and assign the dictionary that calcShuntStub returns to var
    var fullSolution = document.getElementById("fullSol");
    var result = calcShuntStub(parseInt(z0.value), parseInt(rl.value), parseInt(xl.value), parseInt(fullSolution.value));

    document.getElementById("solutionHeader").innerHTML = "Solution:";
    var text = "";
    for (var [key, value] of Object.entries(result)) {
        text += key + " = " + value + " \u03BB <br>";
      } 
    document.getElementById("result").innerHTML = text;
  }


