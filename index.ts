class A {
    funcA() {
        return new Promise(resolve => {
            setTimeout(() => {
                return resolve("a");
            }, 2000);
        });
    }
    private funcB() { return 'b'}
}

let main = async () => {
    let a = new A();
    console.log("funcA called at time", Date.now().valueOf());
    let ret = await a.funcA();
    console.log('funA return at time: ', Date.now().valueOf(), ret);
}

main();


