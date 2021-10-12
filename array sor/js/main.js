

function sortingArrayElements(){

for (let i = 0; i < arr.length; i++) {
    min=i;
for (let j= i+1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {

       min=j;
    }
}
[arr[i], arr[min]] = [arr[min], arr[i]];
}
     return arr;
}
console.log(sortingArrayElements(arr=[4,6,2,1,8,7]));


const Melek = {
    name: "Melek",
    point: 91,
}
const Cəlil = {
    name: "Cəlil",
    point: 87,
}
const Mustafa = {
    name: "Mustafa",
    point: 77,
}
const Yusif = {
    name: "Yusif",
    point: 66,
}
const Aynur = {
    name: "Aynur",
    point: 51,
}
arr = [Melek, Mustafa, Yusif, Aynur];
// function checkDiplomDegree(point) {
//     switch (point) {
//         case (point <= 100 && point > 90):
//             for (let i = 0; i < arr.length; i++) {
//                 if ((arr[i].point <= 100) && (arr[i].point > 90)) {
//                     console.log(arr[i].name, " -Yüksək Şərəf Diplomu");
//                 }
//             }
//             break;
//         case (point <= 90 && point > 80):
//             for (let i = 0; i < arr.length; i++) {
//                 if ((arr[i].point <= 90) && (arr[i].point > 80)) {
//                     console.log(arr[i].name, " -Şərəf Diplomu");
//                 }
//             }
//             break;
//         case (point <= 80 && point > 70):
//             for (let i = 0; i < arr.length; i++) {
//                 if ((arr[i].point <= 80) && (arr[i].point > 70)) {
//                     console.log(arr[i].name, " -Şərəf Diplomu");
//                 }
//             }
//             break;
//         case (point <= 70 && point > 60):
//             for (let i = 0; i < arr.length; i++) {
//                 if ((arr[i].point <= 70) && (arr[i].point > 60)) {
//                     console.log(arr[i].name, " -Adi Diplom");
//                 }
//             }
//             break;
//         case (point <= 60 && point > 50):
//             for (let i = 0; i < arr.length; i++) {
//                 if ((arr[i].point <= 60) && (arr[i].point > 50)) {
//                     console.log(arr[i].name, " -Adi Diplom");
//                 }
//             }
//             break;
//         case (point <=50 && point >=0):
//             for (let i = 0; i < arr.length; i++) {
//                 if ((arr[i].point <= 0) && (arr[i].point > 50)) {
//                     console.log(arr[i].name, " -Adi Diplom");
//                 }
//             }
//             break;
//         default:
//     }



function checkDiplomDegree(point){
    if ((point<=100)&&(point>90)) {
        for (let i = 0; i < arr.length; i++) {
            if ((arr[i].point<=100)&&(arr[i].point>90)) {
               console.log(arr[i].name ," -Yüksək Şərəf Diplomu"); 
            }
        }
    }
    else if ((point<=90)&&(point>80)) {
        for (let i= 0; i < arr.length; i++) {
            if ((arr[i].point<=90)&&(arr[i].point>80)) {
               console.log(arr[i].name ," - Şərəf Diplomu"); 
            }
        }
    }
        if ((point<=80)&&(point>70)) {
            for (let i= 0; i < arr.length; i++) {
                if ((arr[i].point<=80)&&(arr[i].point>70)) {
                            console.log(arr[i].name ," - Şərəf Diplomu"); 
                }
            }}
             if ((point<=70)&&(point>60)) {
                for (let i= 0; i < arr.length; i++) {
                    if ((arr[i].point<=70)&&(arr[i].point>60)) {
                       console.log(arr[i].name ," - Adi Diplom"); 
                    }
                }}
                if ((point<=60)&&(point>50)) {
                    for (let i= 0; i < arr.length; i++) {
                        if ((arr[i].point<=70)&&(arr[i].point>60)) {
                           console.log(arr[i].name ," - Adi Diplom"); 
                        }
                    }}
                    if ((point<=50)&&(point>=0)) {
                        for (let i= 0; i < arr.length; i++) {
                            if ((arr[i].point<=70)&&(arr[i].point>60)) {
                               console.log(arr[i].name ," - Adi Diplom"); 
                            }
                        }
                    }
                }
checkDiplomDegree(92);
checkDiplomDegree(52);

