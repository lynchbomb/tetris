export class Piece {
  constructor(matrix = {}, fillColor = '') {
    this.fillColor = fillColor;
    this.matrix = matrix;
  }
  _rotateLeft() {
    //counter-clockwise
    let matrix = this.matrix;
    matrix = this._transpose(matrix);
    this.matrix = matrix;
  }

  _rotateRight() {
    //clockwise
    let matrix = this.matrix;
    matrix = this._transpose(matrix);
    matrix.forEach(row => {
      row.reverse();
    });
    this.matrix = matrix;
  }

  _transpose(matrix) {
    return matrix[0].map((x,i) => matrix.map(x => x[i]));
  }

  rotate(direction) {
    switch (direction) {
      case 'right':
        this._rotateRight()
        break;
      case 'left':
        this._rotateLeft();
        break;
    }
  }

  getFillColor() {
    return this.fillColor;
  }

  getMatrix() {
    return this.matrix;
  }
}
