import inquirer from "inquirer";
let todos = ["usman", "mustafa"];
async function createTodo(todos) {
    do {
        let user = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select the Item",
            choices: ["add", "update", "view", "delete"]
        });
        if (user.select == "add") {
            let adding = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add Item"
            });
            todos.push(adding.todo);
            console.log(todos);
        }
        if (user.select == "update") {
            let updating = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select Item for Update",
                choices: todos.map(item => item)
            });
            let adding = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add Item"
            });
            let newtodos = todos.filter(item => item !== updating.todo);
            todos = [...newtodos, adding.todo];
            console.log(todos);
        }
        if (user.select == "view") {
            console.log(todos);
        }
        if (user.select == "delete") {
            let deleting = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select Item for Delete",
                choices: todos.map(item => item)
            });
            let newtodos = todos.filter(item => item !== deleting.todo);
            todos = [...newtodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
