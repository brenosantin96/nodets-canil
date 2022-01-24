type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

//criamos uma funcao que tem como parametro o activeMenu que é typado com o MenuOptions que criei acima.
export const createMenuObject = (activeMenu :MenuOptions)  => { 
     let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}