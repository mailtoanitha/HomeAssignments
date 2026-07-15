let browser = "chrome"
function checkBrowserVersion(callback)
{
    setTimeout(() => {
        callback(browser)      
    }, 2000);
    
}
 function browserVersion(browserName)
 {
    console.log("Version of the", browserName, "is 150.0.7871.124");
    
 }
 checkBrowserVersion(browserVersion)