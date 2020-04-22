function changeColor(pressed) 
{   
    switch (pressed) 
    {
        case 'saveBackground':
            color_choice_background = document.querySelector('#Choice').value;
            break;
        case 'saveHeader':
            color_choice_header = document.querySelector('#Choice').value;
            break;
        case 'execute':
            document.querySelector('main').style.backgroundColor = color_choice_background;
            document.querySelector('h1').style.color = color_choice_header;
            break;
    }
}