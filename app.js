class Piece {
  constructor(matrix) {

  }
}

//map is 10x x 20y pixels (11 x 21)
var app = {
  DB_PIECES: {
    I: {
      fillColor: 'red',
      matrix: [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
      ]
    },
    J: {
      fillColor: 'yellow',
      matrix: [
        [0,0,0],
        [1,1,1],
        [0,0,1]
      ]
    },
    O: {
      fillColor: 'blue',
      matrix: [
        [1,1],
        [1,1]
      ]
    },
    L: {
      fillColor: 'green',
      matrix: [
        [0,0,0],
        [1,1,1],
        [1,0,0]
      ]
    },
    S: {
      fillColor: 'purple',
      matrix: [
        [0,0,0],
        [0,1,1],
        [1,1,0]
      ]
    },
    Z: {
      fillColor: 'orange',
      matrix: [
        [0,0,0],
        [1,1,0],
        [0,1,1]
      ]
    },
    T: {
      fillColor: 'brown',
      matrix: [
        [0,0,0],
        [1,1,1],
        [0,1,0]
      ]
    }
  },

  $CANVAS: document.getElementById('canvas'),
  CONTEXT: null,
  MAX_PIECE_COUNT: 10,
  activePieces: 0,
  DEFAULT_STARTING_COORDS: {
    x: 5,
    y: -1
  },


  init() {
    this.CONTEXT = this.$CANVAS.getContext('2d');
    this.CONTEXT.scale(20, 20);
    this.CONTEXT.fillStyle = '#000';
    this.CONTEXT.fillRect(0, 0, this.$CANVAS.width, this.$CANVAS.height);

    this.buildPiece('Z');
  },

  buildPiece(ID) {
    let fillColor = this.DB_PIECES[ID].fillColor;
    let x = this.DEFAULT_STARTING_COORDS.x;
    let y = this.DEFAULT_STARTING_COORDS.y;

    this.CONTEXT.fillStyle = fillColor;

    this.DB_PIECES[ID].matrix.forEach(i => {
      y++;
      x = this.DEFAULT_STARTING_COORDS.x;
      i.forEach(ii => {
        if(ii) {
          this.CONTEXT.fillRect(x, y, 1, 1);
        }
        x++;
      });
    });
  },

  clearCanvas(x=0, y=0, width=this.canvas.width, height=this.canvas.height) {
		this.canvas.clearRect(x, y, width, height);
	},

  update() {
		window.requestAnimationFrame(this.update.bind(this));
    if(this.activePieces <= this.MAX_PIECE_COUNT) {
      this.buildPiece('I');
      this.activePieces++;
    }
		// this.clearCanvas();
	}
};

app.init();
