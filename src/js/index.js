import { Level } from './level';
import { Piece } from './piece';

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
  DEFAULT_STARTING_COORDS: {
    x: 5,
    y: -1
  },
  activePieces: 0,
  activePiece: null,
  level: null,

  init() {
    this._initScene();
    this._eventController();
    this.renderPiece();

  },

  _eventController() {
    document.addEventListener('keydown', this._handleKeydown.bind(this));
  },

  _getRandomKey(obj) {
    let k = Object.keys(obj);
    return k[this._getRandomIntBetweenIncluding(0, k.length)];
  },

  _getRandomIntBetweenIncluding(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  },

  _initScene() {
    this.level = new Level();
    this.CONTEXT = this.$CANVAS.getContext('2d');
    this.CONTEXT.scale(20, 20);
    this.CONTEXT.fillStyle = '#000';
    this.CONTEXT.fillRect(0, 0, this.$CANVAS.width, this.$CANVAS.height);
  },

  _handleKeydown(e) {
    switch(e.keyCode) {
      //down
      case 40:
        //force piece down
        console.log('DOWN');
        this._handleDownArrowKey(e);
        break;
      //left
      case 37:
        //move left
        console.log('LEFT');
        this._handleLeftArrowKey(e);
        break;
      //right
      case 39:
        //move right
        console.log('RIGHT');
        this._handleRightArrowKey(e);
        break;
      //L
      case 76:
        //rotate left
        console.log('L');
        this._handleLKey(e);
        break;
      //R
      case 82:
        //rotate right
        console.log('R');
        this._handleRKey(e);
        break;
    }
  },

  _handleRKey(e) {},
  _handleLKey(e) {},
  _handleRightArrowKey(e) {},
  _handleLeftArrowKey(e) {},
  _handleDownArrowKey(e) {},

  _collisionDetection() {

  },

  renderPiece() {
    let x = this.DEFAULT_STARTING_COORDS.x;
    let y = this.DEFAULT_STARTING_COORDS.y;
    let id = this._getRandomKey(this.DB_PIECES);
    let piece = new Piece(this.DB_PIECES[id].matrix, this.DB_PIECES[id].fillColor);

    this.activePiece = piece;

    this.CONTEXT.fillStyle = piece.getFillColor();

    piece.getMatrix().forEach(row => {
      y++;
      x = this.DEFAULT_STARTING_COORDS.x;
      row.forEach(item => {
        if(item) {
          this.CONTEXT.fillRect(x, y, 1, 1);
        }
        x++;
      });
    });
  },

  renderLevel() {

  },

  clearCanvas(x = 0, y = 0, width = this.canvas.width, height = this.canvas.height) {
		this.canvas.clearRect(x, y, width, height);
	},

  update() {
    //review ALL code within this method for optimizations and caching possibilites
		window.requestAnimationFrame(this.update.bind(this));
    if(this.activePieces <= this.MAX_PIECE_COUNT) {
      this.renderPiece();
      this.activePieces++;
    }
		// this.clearCanvas();
	}
};

app.init();
