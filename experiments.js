const fn3 = () => {
    setTimeout(() => console.log("timeout") ,100)
    console.log("fn3")
}

const fn2 = () => {
    fn3()
}

const fn1 = () => {
    fn2()
}

const main = () => {
    fn1()
}

main()
console.log("end")