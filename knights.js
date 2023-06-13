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
}


