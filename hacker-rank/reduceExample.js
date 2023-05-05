function testReduce () {
    const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

    const countedNames = names.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    console.log('allNames ->', allNames);
    return {
        ...allNames,
        [name]: currCount + 1,
    };
    }, {});
    console.log('countedNames =>', countedNames);
}
testReduce();