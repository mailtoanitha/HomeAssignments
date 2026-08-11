export class WebComponent{

    public selector:string

    constructor(selector:string)
    {
        this.selector = selector;
    }

    public click()
    {
        console.log(`Simulating a click ${this.selector}`);
        
    }

    public focus()
    {
        console.log(`Simulating focusing on the component ${this.selector}`);
        
    }
}