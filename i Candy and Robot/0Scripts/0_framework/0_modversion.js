const iCandyModVersion = "2.3.4.2"
const iCandyStartConfig = {

}

setup.iCandyMod = "start"

//-------------------------------------------------------------
//
// namespace
//
//-------------------------------------------------------------

Object.defineProperties(window, {
    Macro : { get:()=> {
        return Macro
    }},
    Story : { get:()=> {
        return Story
    }},
    R : { get:()=> {
        return State.variables.iCandyRobot
    }},
})
