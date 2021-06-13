const {parentPort, isMainThread, workerData} = require("worker_threads");
//Calculation will be done here.
function getTripCharges (){
    console.log("calling salitha");
    const Array = workerData;
    console.log(Array);
    Array.data.finalValue = Array.data.finalValue + Array.data.duration * Array.data.chargePerRate*Array.data.vehicleCount;
    console.log(Array.data.finalValue);
    return Array.data.finalValue;
}
parentPort.on('message', (data)=> {
    const total = getTripCharges();
    //parentPort.postMessage(workerData.data +" Updated");

    parentPort.postMessage(total);
});