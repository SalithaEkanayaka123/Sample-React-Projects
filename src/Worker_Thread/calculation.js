const {parentPort, workerData} = require("worker_threads");
//Calculation will be done here.
function calculation (){
   console.log(workerData.data);
    console.log("calling salitha");
    let total = 0;

    const course = workerData.data;

    if (course.length > 0) {
        course.map((item) => {
            total += item.amount;
        })
    }
    console.log(total);
    return total;
}
parentPort.on('message', (data)=> {
    const result = calculation();
    //parentPort.postMessage(workerData.data +" Updated");

    parentPort.postMessage(result);
});