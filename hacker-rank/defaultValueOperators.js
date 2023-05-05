function setDefaultValues() {
    let logicalOr = false || 89;
    let nullishCoalescing = false ?? 56;
    console.log('logicalOr =>', logicalOr);
    console.log('nullishCoalescing =>', nullishCoalescing);
}
setDefaultValues();