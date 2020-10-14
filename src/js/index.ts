let inputField = document.getElementById("stringInput");
let resultsTable: HTMLTableElement = <HTMLTableElement> document.getElementById("resultTable");
let idCount: number = 0;

document.getElementById("newStringBtn").addEventListener("click", addString);

function addString(){
    let newRow: HTMLTableRowElement = <HTMLTableRowElement> resultsTable.insertRow(-1);
    let id: HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(0);
    let originalString: HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(1);
    let newString: HTMLTableCellElement = <HTMLTableCellElement> newRow.insertCell(2);
    let inputText = (<HTMLInputElement>inputField).value;

    let selector: HTMLSelectElement = <HTMLSelectElement> document.getElementById("stringManipulation");
    let option: HTMLOptionElement = selector.options[selector.selectedIndex];

    id.setAttribute("id", "id: " + idCount.toString());
    originalString.setAttribute("id", "os: " + idCount.toString());
    newString.setAttribute("id", "ns: " + idCount.toString());
    
    id.innerHTML = idCount.toString();
    originalString.innerHTML = inputText;

    if (option.getAttribute("id") == "toUpperCase"){
        newString.innerHTML = ConvertToUpper(inputText);
    }
    if (option.getAttribute("id") == "toLowerCase"){
        newString.innerHTML = ConvertToLower(inputText);
    }    
    if (option.getAttribute("id") == "toPigLatin"){
        newString.innerHTML = ConvertToPigLatin(inputText);
    }
    
    idCount++;
}

function ConvertToUpper(stringToConvert: string): string{
    stringToConvert = stringToConvert.toUpperCase();
    return stringToConvert;
}

function ConvertToLower(stringToConvert: string): string{
    stringToConvert = stringToConvert.toLowerCase();
    return stringToConvert;
}

function ConvertToPigLatin(s: string): string{
    let resultString: string = "";
    let temp: string = "";
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] 
    let consonantStart: boolean  = false;;

    for (let index = 0; index < s.length; index++) {
        let findChar = vowel.some(c => c == s[index]);
        if (findChar){
            break;
        }
        else {
            consonantStart = true;
            temp += s[index];
            resultString = s.substring(index + 1, s.length);
        }
    }
    if (consonantStart){
        resultString += temp + "ay";
    }
    else {
        resultString += s + "yay";
    }

    return resultString;
}