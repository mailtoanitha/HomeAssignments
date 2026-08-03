enum Environment{
    Local="LOCAL",
    Development = "DEVELOPMENT",
    Staging = "STAGING",
    Production ="PRODUCTION"
}

function runTests(envir:Environment):void
{
 console.log("The running test is ", `${envir}`); 
    
}
runTests(Environment.Development)
runTests(Environment.Local)