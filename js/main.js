let icon = document.getElementsByClassName('links')[0];

document.body.children.onclick = function ()
{
    icon,this.lastElementChild.classList.remove('click');
}

icon.addEventListener('click',function ()
{
    icon.lastElementChild.classList.toggle('click');
});

let btnUp = document.querySelector('button.up');


window.onscroll = function ()
{
    if (window.scrollY >= 800)
    {
        btnUp.style.display = 'block'
    }
    else
    {
        btnUp.style.display = 'none'
    }
};

btnUp.onclick =function ()
{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}