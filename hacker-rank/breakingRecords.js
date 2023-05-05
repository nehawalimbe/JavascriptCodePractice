function breakingRecords(scores) {
    // Write your code here
    let records = {
        lowest: scores[0],
        highest: scores[0]
    };
    let lowestScoreCnt = 0;
    let highestScoreCnt = 0;
    for (let i = 1; i < scores.length; i++) {
        console.log('scores[i] ->', scores[i]);
        console.log(records);
        if (scores[i] > records.highest) {
            highestScoreCnt++;
            records.highest = scores[i];
            console.log('highest ->', scores[i]);
        }
        if (scores[i] < records.lowest) {
            lowestScoreCnt++;
            records.lowest = scores[i];
            console.log('lowest ->', scores[i]);
        }
    }
    console.log('lowestScoreCnt->', lowestScoreCnt);
    console.log('highestScoreCnt->', highestScoreCnt);
    return [highestScoreCnt, lowestScoreCnt];
}
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);