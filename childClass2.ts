import { WebComponent } from "./baseClass";

export class TextInput extends WebComponent
{
    public value:string=""

 public enterText(text: string)
 {
    this.value = text
    console.log(`Simulating text entry ${this.value} `);
 }

 }