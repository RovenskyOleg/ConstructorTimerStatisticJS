"use strict";

function Statistics(timer) {

    var form = 0, 
        short_form = 0,
        long_form = 0,
        date_form = 0,
        node,
        db = 0,
        data_flag = true,
        short_flag = true,
        long_flag = false,
        flag = true;

    this.timer = timer;

    function flDate(variable) {
        if(!data_flag) {
            variable++;
        }
    }

    var clickTimer = {
        doShort: function() {
            short_form++;//flDate(short_form);//short_form++;
            node = "Long";
        },

        doLong: function() {
            long_form++;//flDate(long_form);//long_form++;
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
        if(short_flag) {
            node = "Short";
            short_flag = !short_flag;
        } else {
            short_flag = !short_flag;
            node = "Long";
        }
        pushNode(node);        
    }

    function rightClick() {
        if(data_flag) {
            node = "Date";
            data_flag = !data_flag;
        } else {
            short_form;
            long_form;
            node = "Short";
            data_flag = !data_flag;

        }
        pushNode(node);
    }

    function handler() {
        short_form--;
        long_form--;
        db++;
        console.log("Short form = " + short_form);
        console.log("Long form = " + long_form);
        console.log("Date = " + date_form);
        console.log("dblclick = " + db);
    }
    
    timer.addEventListener("click", leftClick ,false);
    timer.addEventListener("contextmenu", rightClick ,false);
    timer.addEventListener("dblclick", handler, false);
    

    return this;
}
