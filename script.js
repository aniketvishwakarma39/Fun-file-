const project = document.querySelector('#project');
const head = document.querySelector('#head');
const yesBtn = document.querySelector('#yes-btn');
const noBtn = document.querySelector('#no-btn');

//const projectRect = project.getBoundingClientRect();
//const noBtnRect = noBtn.getBoundingClientRect();


yesBtn.addEventListener('click', () => { 
     head.innerHTML= 'I Love You Too :)';
});

noBtn.addEventListener('click', () => { 
head.innerHTML= 'lakho honge nigah me kabhi mujhe bhi pick karo, mere pyar ke yes button pr kabhi to click karo';
});


/*noBtn.addEventListener("mouseover",moveHover)

function moveHover(){
    const i = Math.floor(Math.random()*500)+1;
        const j = Math.floor(Math.random()*500)+1;

            noBtn.style.left = i + 'px';
            noBtn.style.top = j + 'px';

};*/


 