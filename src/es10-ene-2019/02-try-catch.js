try {
    hello()
} catch (error) {
    console.log(error);
}

try {
    hello()
} catch {
    console.log('esto es un error');
}