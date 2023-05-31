// npm modules
const color = require('cli-color')

// IIFE = immediate invoke fun expression
// (function(name){
//     console.log(`Hello ${name}`);
// })('Jaydeep')

// console.log(color.yellow("Hello"))

// local module
// const auth = require('./auth')
// auth.login('Jard')


// core modules, no need to install it
const path = require('path')
// console.log(__filename)
// console.log(__dirname)
// console.log('folder name is:',path.dirname(__filename))
// console.log('file name is:',path.basename(__filename))
// console.log('ext name is:',path.extname(__filename))

// to get all info of file
// console.log('file name is:',path.parse(__filename))
// joining path
// console.log('new path: ',path.join(__dirname,'new_folder','new_file.js'))

const fs = require('fs')

// create directory
// fs.mkdir(path.join(__dirname,'test'), (err) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('folder created...')
// })

// create file
// fs.writeFile(path.join(__dirname,'test','test1.txt'), 'Hello C++\n', (err) => {
//     if(err){
//         throw err;
//     }
//     fs.appendFile(path.join(__dirname,'test','test1.txt'), 'New data', (err) => {
//         if(err){
//             throw err;
//         }
//         console.log('data added...')
//     })
//     console.log('file created...')
// })


// read file
// fs.readFile(path.join(__dirname,'test','test1.txt'), 'utf-8', (err, data) => {
//     if(err){
//         throw err;
//     }
//     // if you don't pass encoding in readFile()
//     // const content = Buffer.from(data)
//     // console.log(content.toString())
    
//     console.log(data) // pass encoding standard in readFile method
// })


// OS module
const os = require('os')
// console.log('os type: ',os.type())
// console.log('os platform: ',os.platform())

// console.log('CPU architecture: ',os.arch())
// console.log('CPU more details: ',os.cpus())

// console.log('free memory: ',os.freemem())
// console.log('total memory: ',os.totalmem())

// this module useful to build server monitoring tool
// console.log('# seconds you dont restart computer: ',os.uptime())


// events module
const Emitter = require('events')

// need to send verification mail to the user after registration
// store details in db
// add email into the mailing list

// const myEmitter = new Emitter();
// myEmitter.on('some_name', (data) => {
//     console.log(data);
// })

// myEmitter.emit('some_name', {
//     name: 'Jaydeep'
// })

class Auth extends Emitter {
    register(username){
        console.log('registered sucessfully...')
        this.emit('registered', username)
    }
}
const auth = new Auth()
// listen
// verify mail
auth.on('registered', (username) => {
    console.log(`sending email to ${username}`)
})
// welcome mail
auth.on('registered', (username) => {
    console.log(`sending welcome email to ${username}`)
})
auth.register('virat')