let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log (styles);

const mid = Math.floor(styles.length / 2);
styles[mid] = "Classics";
console.log(styles);

let removeStyle = styles.shift();
console.log(styles, " Видалений стиль: ", removeStyle);

styles.unshift("Rap", "Reggae");
console.log(styles);