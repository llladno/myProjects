const EventEmitter = require("events")

// const emitter = new EventEmitter()

// emitter.on("any", data =>{
//     console.log("ON: any",data)
// })

// emitter.emit("any",{a:1})

// setTimeout(()=>{
//     emitter.emit("any",{c:3})
// },2000)

class Dispatcher extends EventEmitter {
    subscribe (eventName,cb){
        console.log("[Subcribe...]")
        this.on(eventName,cb)
    }
    dispatch(eventName,data){
        console.log("[Dispatching]")
        this.emit(eventName,data)
    }
}

const dispatch = new Dispatcher

dis.subscribe("aa",data =>{
    console.log("ON:aa",data)
})

dis.dispatch("aa",{aa:22})