class LoginTest{

    public browserName:string = "Chrome"
    private password:string = "admin123"
    protected userName:string = "tester"

    public openApplication()
    {
     console.log("Launch the browser: ", this.browserName);
     
    }

    private login()
    {
    console.log("Login the application with ",this.userName, this.password);
    
    }
    
}

let app = new LoginTest()
app.openApplication()

 /* Private:
    --------
 * can be accessed only within the class, private - restricts the access from outside. 
 * can be accessed only through getters method.Setters method uses for modifying its value
   console.log(app.password);
   app.login()

   Protected:
   ---------
 * It is commonly used in Framework - Base Class, POM
 * can be accessed within the class and its subclass only, proctected - restricts the access from outside the class. 
 * can be accessed only through getters method.Setters method uses for modifying its value
   console.log(app.userName)

   Public:
   ------
 * can be accessed everywhere.
  */
