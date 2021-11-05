function sumAsync(x, y) {
    const promise  = new Promise((resolve, reject) => {
        resolve(x + y);
    });
    return promise;
}

sumAsync(8, 2).then((hmm) => {
    console.log(hmm);
});
