const fs = require("fs");
const data = require("./data.json")

console.log(data)
console.log(data[0].id, data[0].title)



const newDataContent = () => {
    let newContent = "";
    for (let i = 0; i < data.length; i++) {
        newContent += data[i].id + " \- " + data[i].title + "\n" + data[i].description + "\n\n";
    }
    console.log("newcontent from array ", newContent)

    fs.writeFile("./new.txt", newContent, () => {
        console.log("hats geklappt??")
    })

};

newDataContent();















