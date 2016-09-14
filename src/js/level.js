export class Level {
  constructor(options = {}) {
    this.name = options.name || '';
    //single source of truth
    this.matrix = [];
    this.init();
  }
  init() {
    this._buildMatrix();
  }
  _buildMatrix() {
    this.matrix = new Array(20).fill(new Array(10).fill(0));
  }
}
