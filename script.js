// Good Luck 💪🏾
function removeDuplicates() {
 
    names = [
        "hamda","aisha","salman","ubayb", "hamda"
       
    ];
 
    jsonObject = names.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    uniqueArray = Array.from(uniqueSet).map(JSON.parse);
 
    console.log(uniqueArray);
}
removeDuplicates();