const router = require("express").Router()
const { v4 } = require("uuid")

let todos = []

router.get("/", (req, res)=>{
    return res.json(todos)
})

router.get("/:id", (req, res) => {
     const { id } = req.params;
     const todo = todos.find(todo => todo.id === id);

     return res.json(todo)
})

router.post("/", ( req, res ) => {
    const {title} = req.body;

    const todo={
        id: v4(),
        title,
        completed: false,
    }
    todos.push(todo)

    return res.json(todo )
})

router.delete("/:id", (req, res)=>{
    const { id } = req.params;
    todos = todos.filter((todo) =>{
        return todo.id !== id
    })
    return res.json(todos)
})

router.put("/:id", ( req, res ) => {
    const { id } = req.params;
    const index = todos.findIndex((todo) => todo.id === id)

    todos[index].completed = !todos[index].completed;
    return res.json(todos[index])
})

module.exports = router;