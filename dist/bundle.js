(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.phaserGame = new Phaser.Game(800, 600, Phaser.AUTO, "game", {
            preload: function () { return _this.preload(); },
            create: function () { return _this.create(); }
        });
    }
    Game.prototype.preload = function () {
    };
    Game.prototype.create = function () {
    };
    return Game;
}());
exports.Game = Game;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./game/Game");
window.onload = function () {
    var g = new Game_1.Game();
};

},{"./game/Game":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ2FtZS9HYW1lLnRzIiwic3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBO0lBSUc7UUFBQSxpQkFRQztRQVBFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUM5QixHQUFHLEVBQUUsR0FBRyxFQUNSLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxFQUFFO1lBQ0wsT0FBTyxFQUFFLGNBQU8sT0FBQSxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQWQsQ0FBYztZQUM5QixNQUFNLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhO1NBQzdCLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTyxzQkFBTyxHQUFmO0lBRUEsQ0FBQztJQUVPLHFCQUFNLEdBQWQ7SUFFQSxDQUFDO0lBQ0osV0FBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksb0JBQUk7Ozs7O0FDRGpCLG9DQUFpQztBQUVqQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2IsSUFBSSxDQUFDLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztBQUM1QixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG5leHBvcnQgY2xhc3MgR2FtZSB7XG5cbiAgIHB1YmxpYyBwaGFzZXJHYW1lOiBQaGFzZXIuR2FtZTtcblxuICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnBoYXNlckdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXG4gICAgICAgICA4MDAsIDYwMCxcbiAgICAgICAgIFBoYXNlci5BVVRPLFxuICAgICAgICAgXCJnYW1lXCIsIHtcbiAgICAgICAgICAgIHByZWxvYWQ6ICgpID0+ICB0aGlzLnByZWxvYWQoKSxcbiAgICAgICAgICAgIGNyZWF0ZTogKCkgPT4gdGhpcy5jcmVhdGUoKVxuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIHByaXZhdGUgcHJlbG9hZCgpIDogdm9pZCB7XG5cbiAgIH1cblxuICAgcHJpdmF0ZSBjcmVhdGUoKTogdm9pZCB7XG5cbiAgIH1cbn0iLCJpbXBvcnQge0dhbWV9IGZyb20gXCIuL2dhbWUvR2FtZVwiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgdmFyIGc6IEdhbWUgPSBuZXcgR2FtZSgpO1xufTtcbiJdfQ==
