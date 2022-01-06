const awaitFor = (time) => {
    const future = Date.now() + time
    while(Date.now() < future) {}
}

awaitFor(5000)
console.log("end")