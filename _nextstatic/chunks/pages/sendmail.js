// let data = {

//     "email": "psingh5025615@gmail.com",
//     "subject": "Chatbot message",
//     "message": JSON.stringify(messages)
// }
// if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
//     document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(o)
// } else {
//     document.querySelector('#mes1').value = JSON.stringify(o)
// }
// if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
//     document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(data)
// } else {
//     document.querySelector('#mes1').value = JSON.stringify(data)
// }
// fetch('https://chatbot-ai.in/api/sendmail', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then((response) => {
//     return response.json()
// }).then((data) => {
//     if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
//         document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(data)
//     } else {
//         document.querySelector('#mes1').value = JSON.stringify(data)
//     }
// })

// C([...j, o]), w(4);

// // Path: _nextstatic\chunks\pages\sendmail.js
//Language: javascript
//th: _nextstatic\chunks\pages\sendmail.js
let data = {

    "email": {admin.email},
    "subject": "Chatbot message",
    "message": JSON.stringify(messages)
}
if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
    document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(o)
}
else {
    document.querySelector('#mes1').value = JSON.stringify(o)
}
if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
    document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(data)
}
else {
    document.querySelector('#mes1').value = JSON.stringify(data)
}
fetch('https://chatbot-ai.in/api/sendmail', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}).then((response) => {
    return response.json()
}
).then((data) => {
    if (document.querySelector('#mes1').value || document.querySelector('#mes1').value.length > 0) {
        document.querySelector('#mes1').value = document.querySelector('#mes1').value + ',' + JSON.stringify(data)
    }
    else {
        document.querySelector('#mes1').value = JSON.stringify(data)
    }
}
)

