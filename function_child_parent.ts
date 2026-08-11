import {Button} from "./childClass"
import {TextInput} from "./childClass2"

function testComponents()
{
    const a = new Button("Clicking button")
    const b = new TextInput("Passing value")

    a.click()
    b.enterText("TestLeaf")
}
testComponents()