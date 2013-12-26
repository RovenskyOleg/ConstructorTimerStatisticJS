"use strict";

function DisplayingTime(value) {

    var flag = true,
        date = false,
        time = null,
        hours = null,
        minutes = null,
        seconds = null,
        month = null,
        day = null,
        year = null;

    function timeline() {
        time = new Date();
        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();
        month = time.getMonth() + 1;
        day = time.getDate();
        year = time.getFullYear();
    }
    
    //this.formFormatTime = function() {
    function formFormatTime() {
        seconds = ((seconds < 10) ? "0" : "") + seconds;
        minutes = ((minutes < 10) ? "0" : "") + minutes;
        hours = (hours < 24) ? hours : hours-24;
        hours = (hours === 0) ? 0 : hours;
    }

    function handler(f, obj) {
        return function() {
            f.call(obj);
        } ;
    }

    function getTimeShort() {
        timeline();
        //handler(this);
        formFormatTime();

        return hours + ":" + minutes + ":" + seconds;
    }

    function getTimeFull() {
        timeline();
       // handler(this);
       formFormatTime();

        return hours + ":" + minutes;
    }

    function getDateShort() {
        timeline();
        return month + ":" + day + ":" + year;
    }

    function changeTimer() {
        var callback = getDateShort;
        
        if(!date) {
            callback = flag ? getTimeFull : getTimeShort;
        }
        
        value.innerHTML = callback();   
    }

    function startTimer() {
        this.pointer = value;
        changeTimer();
    }

    function leftClick() {
        changeTimer();
        flag = !flag; 
    }

    function rightClick(e) {
        flag = true;
        date = !date;
        changeTimer();
        e.preventDefault(); 
    }

    value.addEventListener ("click", leftClick, false);
    value.addEventListener ("contextmenu", rightClick, false);
    
    setInterval(startTimer,200);
    
    return this;
}