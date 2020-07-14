"use strict";
(function () {
    var BOARD_HEIGHT = 50;
    var BOARD_WIDTH = 50;
    var Marker = /** @class */ (function () {
        function Marker(x, y) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.toString = function () {
                return "x: " + _this.x + ", y: " + _this.y;
            };
        }
        Marker.prototype.getNeighbors = function () {
            var neighbors = [];
            // check 12 o'clock
            if ((this.x - 1 >= 0 && this.x - 1 < BOARD_HEIGHT) &&
                (this.y - 1 >= 0 && this.y - 1 < BOARD_WIDTH)) {
                neighbors.push(new Marker(this.x - 1, this.y - 1));
            }
            // 3 o'clock
            if ((this.x >= 0 && this.x < BOARD_HEIGHT) &&
                (this.y + 1 >= 0 && this.y + 1 < BOARD_WIDTH)) {
                neighbors.push(new Marker(this.x, this.y + 1));
            }
            // 6 o'clock
            if ((this.x + 1 >= 0 && this.x + 1 < BOARD_HEIGHT) &&
                (this.y >= 0 && this.y < BOARD_WIDTH)) {
                neighbors.push(new Marker(this.x + 1, this.y));
            }
            // 9 o'clock
            if ((this.x >= 0 && this.x < BOARD_HEIGHT) &&
                (this.y - 1 >= 0 && this.y - 1 < BOARD_WIDTH)) {
                neighbors.push(new Marker(this.x, this.y - 1));
            }
            return neighbors;
        };
        return Marker;
    }());
    var Queue = /** @class */ (function () {
        function Queue() {
            this._store = [];
        }
        Queue.prototype.push = function (val) {
            this._store.push(val);
        };
        Queue.prototype.pop = function () {
            return this._store.shift();
        };
        return Queue;
    }());
    var Board = /** @class */ (function () {
        function Board(height, width) {
            var _this = this;
            this.height = height;
            this.width = width;
            this.toString = function () {
                row: String;
                for (var i = 0; i < _this.height; i++) {
                    for (var j = 0; j < _this.width; j++) {
                        console.log();
                    }
                }
                return "";
            };
            this.bfs = function (start) {
                var q = new Queue();
                q.push(start);
                // while items still in queue
                while (q) {
                    alert(q);
                    q.pop();
                }
                return false;
            };
            this.height = height;
            this.width = width;
        }
        return Board;
    }());
    function setup(board) {
        var divBoard = document.createElement("div");
        divBoard.className = "board";
        for (var i = 0; i < board.height; i++) {
            var row = document.createElement("div");
            row.className = "row";
            for (var j = 0; j < board.width; j++) {
                var cell = document.createElement("span");
                cell.className = "square";
                row.appendChild(cell);
            }
            divBoard.appendChild(row);
        }
        return divBoard;
    }
    var board = new Board(BOARD_HEIGHT, BOARD_WIDTH);
    document.body.appendChild(setup(board));
    // board.bfs({x:0, y:0});
    console.log(new Marker(0, 0).getNeighbors());
    console.log(new Marker(50, 50).getNeighbors());
    console.log(new Marker(2, 2).getNeighbors());
})();
