const iCandyModVersion = "2.3.7"
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
