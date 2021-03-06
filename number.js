class Number {
  async getFact(num, category) {
    const res = await fetch(`https://numbersapi.com/${num}/${category}`);
    const fact = await res.text();

    return {
      fact
    }
  }
}
