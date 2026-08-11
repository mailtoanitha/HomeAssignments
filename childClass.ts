import { WebComponent } from "./baseClass";
export class Button extends WebComponent
{
    constructor(selector:string)
    {
        super(selector)
    }
  public click() {
      console.log(`Triggering specific to buttons. : ${this.selector}`);
      
  }
  
}