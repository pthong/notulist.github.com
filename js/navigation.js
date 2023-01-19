        // navigation
        console.log("navigation script started");
        const pages = document.querySelectorAll("main>*");
        const navUl = document.querySelector(".nav ul");
        console.log(this);
        let currentpage = pages[0].id;
        
        
        const showNavigation = () =>{
            navUl.innerHTML = "";
            for(const page of pages){
                if(currentpage == page.id){
                    navUl.innerHTML += `<li linkto="${page.id}" class="${page.id}-link selected" >${page.querySelector("legend").textContent}</li>`;
                    document.querySelector(`#${page.id}`).style.display = "block";
                }else{
                    navUl.innerHTML += `<li  linkto="${page.id}" class="${page.id}-link">${page.querySelector("legend").textContent} </li>`; 
                    document.querySelector(`#${page.id}`).style.display = "none";
                }
            }
            for(const li of document.querySelectorAll(".nav li")){
                li.addEventListener("click", (e)=>{
                    currentpage = li.getAttribute("linkto");
                 showNavigation();
                 return;  
                });
            }
        }

        showNavigation();



//Field set had nothing to do with it;


//         <fieldset class="nav">
// <legend>Menu</legend>
//     <ul>
      
//     </ul>
// </fieldset>
// <main>
// <fieldset id="add-note-page">
//     <legend>Add Note</legend>
// </fieldset>
// <fieldset id="test-page">
//     <legend>test</legend>
// </fieldset>
// </main>