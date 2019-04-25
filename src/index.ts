
class Cat {
    constructor(
        public name: string
    ){}
}

let main = async () => {
    let cat = new Cat("miky");
    console.log(`hello, ${cat.name}`);
}

main();


