class Domain {
  #field;

  constructor(field) {
    this.#field = field;
  }

  getField() {
    return this.#field;
  }
}

export default Domain;
