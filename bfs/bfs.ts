(function () {

    const BOARD_HEIGHT = 5;
    const BOARD_WIDTH = 5;
    const START = "0,0";
    const GOAL = "4,4";

    class Marker {
        constructor(readonly x: number, readonly y: number) {

        }

        toString = () => {
            return [this.x, this.y].toString();
        }

        getDOMElement = (): HTMLElement | null => {
            return document.getElementById(`marker-${this.x}-${this.y}`);
        }

        getNeighbors(): Marker[] | undefined {
            let neighbors: Marker[] = [];

            // check 12 o'clock
            if ((this.x - 1 >= 0 && this.x - 1 < BOARD_HEIGHT) &&
                (this.y - 1 >= 0 && this.y - 1 < BOARD_WIDTH)) {
                neighbors.push(new Marker(this.x - 1, this.y));
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

    class Queue<Marker> {
        _store: Marker[] = [];
        push(val: Marker) {
            this._store.push(val);
        }
        pop(): Marker | undefined {
            return this._store.shift();
        }
        length(): number {
            return this._store.length;
        }
    }
    
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
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


        public bfs = async (start: Marker) => {

            let q = new Queue();
            let seen = new Set();
            seen.add(start.toString());
            q.push(start);

            // while items still in queue
            while (q.length() > 0) {
                let current = q.pop();

                for (const n of current.getNeighbors()) {
                    if (n.toString() == GOAL) {
                        return true;
                    }

                    if (!seen.has(n.toString())) {
                        await sleep(1000);
                        console.log("Neighbor: " + n.toString());
                        seen.add(n.toString());
                        const el = document.getElementById(`marker-${n.x}-${n.y}`);
                        el.classList.add("seen");
                        q.push(n);
                    }
                }
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
                cell.id = `marker-${i}-${j}`;

                if ([i, j].toString() == START) {
                    cell.classList.add("start");
                }

                if ([i, j].toString() == GOAL) {
                    cell.classList.add("goal");
                }

                row.appendChild(cell);
            }
            divBoard.appendChild(row);
        }

        return divBoard;
    }

    let board = new Board(BOARD_HEIGHT, BOARD_WIDTH);
    document.body.appendChild(setup(board));
    console.log(board.bfs(new Marker(0, 0)));

    // tests
    console.log(new Marker(0, 0).getNeighbors());
    console.log(new Marker(2, 2).getNeighbors());

    
})();