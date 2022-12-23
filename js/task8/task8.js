// callback function

// function wakeUp(isWakeUp, cb) {
//     setTimeout(() => {
//         if (isWakeUp === true) {
//             cb(null, 'You wake up! Good morning');
//         } else {
//             cb('You sleep', null);
//         }
//     }, 300);
// }

// function goWC(goWC, cb) {
//     setTimeout(() => {
//         if (goWC === true) {
//             cb(null, 'You go to toilet');
//         } else {
//             cb('pi pi pi pi....', null);
//         }
//     }, 1000);
// }

// wakeUp(true, (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(data);
//     goWC(false, (err, data) => {
//         if (err) {
//             console.error(err);
//             return;
//         }

//         console.log(data);
//     });
// });


