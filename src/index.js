//Uso de jsx

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    name: 'Jhonatan',
    lastName: 'Moreno',
    gender: 'male',
    avatar: 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/533088_1140x516.jpg'
}

function getName(user){
    return `${user.name} ${user.lastName}`
}

function getGreeting(user){
    if(user)
        return <h1>Hello {user.gender === 'male' ? 'Mr.' : 'Ms.'} {getName(user)}</h1>
    else
        return <h1>Hello Stranger</h1>
}

const element = (
    <div>
        {getGreeting(user)}
        <img src={user.avatar}/>
    </div>
)

const container = document.getElementById('root')

ReactDOM.render(element,container)
// //ReactDOM.render(__QUE__,__DONDE__);