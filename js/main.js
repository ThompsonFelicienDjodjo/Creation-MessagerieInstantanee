const socket = io("ws://10.9.73.20:8080")
const button = document.querySelector("button")

socket.on('message', (message) =>{
    console.log(message)
    const li = document.createElement("li")
         li.innerHTML = message.author + " a écrit:" + message.content

         document.querySelector('ul').appendChild(li)
})

button.addEventListener('click',() =>{
    const tosend =document.querySelector("input").value
    socket.emit('message', {
        content: tosend,
    })
})