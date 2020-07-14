(function () {

    const BOARD_HEIGHT = 50;
    const BOARD_WIDTH = 50;

    class Marker {
        constructor(readonly x: number, readonly y: number) {

        }

        toString = () => {
            return `x: ${this.x}, y: ${this.y}`;
        }

        getNeighbors(): Marker[] | undefined {
            let neighbors: Marker[] = [];

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
        }

    }

    class Queue<T> {
        _store: T[] = [];
        push(val: T) {
            this._store.push(val);
        }
        pop(): T | undefined {
            return this._store.shift();
        }
    }

    class Board {

        constructor(readonly height: number, readonly width: number) {
            this.height = height;
            this.width = width;
        }

        public toString = (): string => {
            row: String;
            for (let i = 0; i < this.height; i++) {
                for (let j = 0; j < this.width; j++) {
                    console.log()
                }
            }
            return "";
        }

        public bfs = (start: Marker): boolean => {

            let q = new Queue();
            q.push(start);

            // while items still in queue
            while (q) {
                alert(q);
                q.pop();
            }

            return false;
        }

    }


    function setup(board: Board): HTMLDivElement {
        var divBoard = document.createElement("div");
        divBoard.className = "board";

        for (let i = 0; i < board.height; i++) {
            var row = document.createElement("div");
            row.className = "row";
            for (let j = 0; j < board.width; j++) {
                var cell = document.createElement("span");
                cell.className = "square";
                row.appendChild(cell);
            }
            divBoard.appendChild(row);
        }

        return divBoard;
    }

    let board = new Board(BOARD_HEIGHT, BOARD_WIDTH);

    document.body.appendChild(setup(board));


    // board.bfs({x:0, y:0});
    console.log(new Marker(0,0).getNeighbors());
    console.log(new Marker(50,50).getNeighbors());
    console.log(new Marker(2,2).getNeighbors());


})();