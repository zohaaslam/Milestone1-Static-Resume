const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click',()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
        toggleButton.innerText='Hide Skills'
    }else{
        skills.style.display = 'none'
        toggleButton.innerText = 'Show Skills'
    }

})