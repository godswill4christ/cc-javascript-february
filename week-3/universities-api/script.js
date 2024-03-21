(async () => {
    let url = "http://universities.hipolabs.com/search?country=Nigeria";

    let response = await fetch(url);
    let uniList = await response.json();

 // Test Api json output
    // console.log(uniList);
    // console.log(uniList[5].domains[0]);

       // Target corresponding HTML elements
    let cardBox = document.getElementById('card');
let schoolName = cardBox.children[0];
let officialSite = cardBox.children[1];

// add api information to HTML elements
let index = 7
schoolName.innerHTML += " " + uniList[index].name
let hyperlink = officialSite.children[0]
hyperlink.innerHTML += " " + uniList[index].domains[0]
hyperlink.setAttribute("href",`${"https://" + uniList[index].domains[0]}`)
hyperlink.innerHTML = uniList[7].domains[0];
console.log(`${"https://" + uniList[index].domains[0]}`);
// console.log(schoolName);
// console.log(officialSite);
})();

