function printSomething() {
    delete arguments[0]
    arguments["hello"] = "this is another argument now"
    console.log(arguments);
}

printSomething('hi',"hello","I","can add","as many as I want");

// [Arguments] { '0': 'hi' }
