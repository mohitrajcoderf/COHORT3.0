 function arrayToHex(bytesArray){
    let hexString = "";
    for(let i = 0; i < bytesArray.length; i++){
        hexString += bytesArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
 };
 const str = "hello mohit";
 const bytes = new TextEncoder().encode(str);
 const bytesArray = new Uint8Array([104,101,108,108,111]);
  const hexString = arrayToHex(bytesArray);

  console.log(bytes) 
  console.log(hexString)
  console.log(bytesArray)
