"use strict";

function Statistics(timer) {

    var form = 0, 
        short_form = 0,
        long_form = 0,
        date_form = 0,
        sum_double_click = 0,
        node,
        data_flag = true,
        short_flag = true;
   
    this.timer = timer;

    var clickTimer = {
        doShort: function() {
            short_form++;
            node = "Long";
        },

        doLong: function() {
            long_form++;
            node = "Short";
        },
        
        doDate: function() {
            date_form++;
            node = "Short";
        }
    };

    function pushNode(node) {
        return clickTimer["do" + node]();
    }

    function leftClick() {
        if(short_flag && data_flag) {
            node = "Short";
            pushNode(node); 
            short_flag = !short_flag;
        } else if(!short_flag && data_flag) {
            short_flag = !short_flag;
            pushNode(node); 
            node = "Long";
        }                
    }

    function rightClick() {
        if(data_flag) {
            node = "Date";
            data_flag = !data_flag;
        } else {
            node = "Short";
            data_flag = !data_flag;
        }
        pushNode(node);
    }

    function handler() {
        if (data_flag) {
            short_form--;
            long_form--;
        }

        sum_double_click++;

        console.log("Short form = " + short_form);
        console.log("Long form = " + long_form);
        console.log("Date = " + date_form);
        console.log("dblclick = " + sum_double_click);
    }

    timer.addEventListener("click", leftClick, false);

    timer.addEventListener("contextmenu", rightClick, false);

    timer.addEventListener("dblclick", handler, false);
    
    return this;
}