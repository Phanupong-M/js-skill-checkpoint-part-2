async function getUsers(){
    try{
        const userPost = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await userPost.json()
        const result = data.map(getName => getName.name).filter(checkName => checkName.length > 17)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

getUsers()




