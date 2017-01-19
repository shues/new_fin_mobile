// объект меню
var menu = new Object();

    menu.state = 'hide';

    menu.show = function(){
        menu.block.style.display = 'block';
        menu.state = 'show';
    }

    menu.hide = function(){
        menu.block.style.display = 'none';
        menu.state = 'hide';

    }

    menu.dir_button_action = function(){
        if (menu.state == 'hide') {
            menu.show();
            page_content.hide();
        }else{
            menu.hide();
            page_content.show();
        }
    }

    menu.elem_action = function(){
        menu.dir_button_action();
        var url = this.id + '.html';
        page_content.clear_cont();
        page_content.load_content(url);
    }

    menu.block = document.getElementById('menu_block');
    menu.dir_button = document.getElementById('menu_button');
    menu.elems = document.getElementsByTagName('p');

    menu.dir_button.onclick = menu.dir_button_action;

    for (var i = menu.elems.length - 1; i >= 0; i--) {
        menu.elems[i].onclick = menu.elem_action;
    }

// объект страницы контента 
var page_content = new Object();

    page_content.conteiner = document.getElementById('cont_cont');
    
    page_content.load_content = function(url){
        var res = ajax.getText(url, page_content.update_content);
    }

    page_content.update_content = function(res){
        page_content.conteiner.innerHTML = res;
    }

    page_content.clear_cont = function(){
        page_content.conteiner.removeChild(page_content.conteiner.children[0]);
    }

    page_content.hide = function(){
        page_content.conteiner.style.display = 'none';
    }

    page_content.show = function(){
        page_content.conteiner.style.display = 'inline-block';
    }
    
    page_content.load_content('put_cash.html');