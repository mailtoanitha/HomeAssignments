function launchBrowser(browserName)
{
 if (browserName == "chrome") {
    
    console.log("The browser name is ", browserName);   
    
 } else {
    console.log("Wrong browser name");
    
 }
}
function runTests(testType)
{  
   switch (testType) {
    case 'smoke':
        console.log("The test type is ", testType);        
        break;
    case 'sanity':
        console.log("The test type is ", testType);        
        break;
    case 'regression':
        console.log("The test type is ", testType);        
        break;
   
    default:
        console.log("Invalid test type. Defaulting to smoke");        
        break;
   }
}
launchBrowser("chrome")
runTests("sanity")
