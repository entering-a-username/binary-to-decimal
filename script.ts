(function() {

    document.getElementsByTagName("input")[0].addEventListener("keydown", function(e: KeyboardEvent) {
        if (e.key === "Enter") {
            const input = document.getElementsByTagName("input")[0] as HTMLInputElement;
            let error = document.getElementById("errorID") as HTMLDivElement;
            error.innerText = "";
            inputValidation(input);
            input.value = "";
        }
    })

    function inputValidation(input: HTMLInputElement): void {
        // should only consist of 0s and 1s
        // if length = 0 or whitespaces, return nothing
        let validated: boolean = true;
        let error = document.getElementById("errorID") as HTMLDivElement;
        const numbers: string = "23456789";

        if (isNaN(input.value)) {
            error.innerText = "Letters are not allowed";
            error.style.display = "block";
            validated = false; 
        }
        if (input.value.length === 0 || input.value.includes(' ')) {
            error.innerText = "Please enter valid binary number";
            error.style.display = "block";
            validated = false;
        } 
        numbers.split("").forEach(number => {
            if (input.value.includes(number)) {
                error.innerText = "Please enter valid binary number";
                error.style.display = "block";
                validated = false;
            }
        })

        

        if (validated) {
            conversion(); // should be inside this function
        }
       
        function conversion() {
            const output = document.getElementById("outputID") as HTMLSpanElement;
            let input = document.getElementsByTagName("input")[0] as HTMLInputElement;
            
            // take the input, make an array of 2**, reverse the input and make an array?
            // iterate through it and for each digit multiply it by 2**

            input = input.value.split("").reverse().join("");
            let powerOfTwos: number[] = [1, 2, 4, 8, 16, 32, 64, 128];
            let arrayOfNums: string[] = Array.from(input);

            let sum: number = 0;
            arrayOfNums.forEach((num: string, index: number): void => {
                sum += num * powerOfTwos[index];
            })
            
            output.innerText = "Decimal: " + sum;
        }
    }
})();
// or just use parseInt(binary, 2).....