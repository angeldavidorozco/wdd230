const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")

button.addEventListener('click', () => {

    if (input.value != '')
    {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.ariaLabel = "Delete " + input.value;
        deleteButton.title = "Delete " + input.value;
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function(){

            list.removeChild(li);
            input.focus();
        
        });
    }
    else
    {
        console.log("Provide an input")
    }

    

    input.focus();

    input.value = "";

});

