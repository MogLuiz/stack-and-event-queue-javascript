const fn5 = () => {
    console.log("timeout")
}

const fn4 = () => {
    fn5()
}

const fn3 = () => {
    setTimeout(() => fn4(),3000)
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