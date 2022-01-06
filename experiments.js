const fn3 = () => {
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