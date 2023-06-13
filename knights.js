class Graph {
    constructor() {
        this.chessBoard = new Map();
    }
    
    addVertices(size = 8) { //Size of chessboard is 8x8 as standard
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                this.chessBoard.set(`${[i, j]}`, [])
            }
        }
    }

    addEdges(board = this.chessBoard) {
        for (let [pos] of board) {
            const positionArray = pos.split(',');
            const x = parseInt(positionArray[0]);
            const y = parseInt(positionArray[1]);

            const knightOffsets = {
                1: [ x + 1, y + 2 ],
                2: [ x + 2, y + 1 ],
                4: [ x + 2, y - 1 ],
                5: [ x + 1, y - 2 ],
                7: [ x - 1, y - 2 ],
                8: [ x - 2, y - 1 ],
                10: [ x - 2, y + 1 ],
                11: [ x - 1, y + 2 ]
            }

            for (let direction in knightOffsets) {
                const move = knightOffsets[direction].toString();
                if (board.has(move) && !board.get(pos).includes(move)) this.chessBoard.get(pos).push(move) 
            }
        }
    }

    knightMoves(startSq, endSq) {
        const paths = []
        const visitedSquares = new Set();
        const queue = [];
        queue.push([startSq, [startSq]]);
        while (queue.length > 0) {
            let [current, path] = queue.shift();
            visitedSquares.add(current)
            if (current === endSq) {
                paths.push(path)
            }
            const neighbours = this.chessBoard.get(current);
            for (let pos of neighbours) {
                if (!visitedSquares.has(pos)) queue.push([pos, [...path, pos]]);
            }
        }
        console.log(`Fastest route from ${startSq} to ${endSq} is:`)
        paths.forEach(tile => console.log(tile))
    }
}

const board = new Graph();
board.addVertices()
board.addEdges()
board.knightMoves('0,0', '1,2');
board.knightMoves('3,1', '2,2');
