let text = document.getElementById("text")
        let type = document.getElementById("type")
        let error = document.getElementById("error")
        let gButton = document.getElementById("gButton")
        let n = 0;
        let r = Math.ceil(Math.random()*20)
        console.log(r);
        


        text.addEventListener("input" ,()=>{
            if (isNaN(text.value)) {
                error.textContent="You can only enter numbers here"
            }
            else{
                error.textContent=""
            }
        })

        window.addEventListener("keydown" ,(e)=>{
            if (e.code==="Enter"){
                type.textContent= checkNumber(text.value)
            } 
        })

        gButton.onclick = ()=> {
            type.textContent= checkNumber(text.value)
            n=1;

        }

        function checkNumber(n) {
            if (n==r){
                return "You have guessed correct 🎉"
            }
            else if (n<r) {
                return "Guess higher"
            }
            else if (n>r) {
                return "Guess lower"
            }
            return "error accured"
        }

        function appendValue(value){
            if (n==1){
                text.value="";
                n=0;
            }
            if(text.value.length<2 && value!="del"){
                text.value+=value
            }
            else if (value=="del"){
                text.value=text.value.slice(0,-1)
            }

            if (isNaN(text.value)) {
                error.textContent="You can only enter numbers here"
            }
            else{
                error.textContent=""
            }
        }
    