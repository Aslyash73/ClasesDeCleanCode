(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit(fruit: string): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
      }
      

    // Simplificar esta función
    // switch? Object literal? validar posibles colores

        type FruitColor = 'red'| 'yellow'|'purple';

    function getFruitsByColor( color: FruitColor ): string[] {
       
        const FruitsByColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['uvas', 'moras'],
        };

        if (!Object.keys(FruitsByColor).includes(color)){
            throw Error('the color must be: red, yellow, purple');
        }

        return FruitsByColor[color];
    }

    //  switch(color){
    //     case 'red':
    //         return ['manzana', 'cereza'];
    //     case 'yellow':
    //          return ['piña', 'banana'];
    //    case 'purple':
    //          return ['moras', 'uvas'];
    //     default:
    //         throw Error('the color must be: red, yellow, purple');
    //  }
    // }
    // function getFruitsByColor( color: string ): string[] {

    //     if ( color === 'red' ) {
    //         return ['manzana','fresa'];
    //     } else if ( color === 'yellow') {
    //         return ['piña','banana'];
    //     } else if ( color === 'purple') {
    //         return ['moras','uvas']
    //     } else {
    //         throw Error('the color must be: red, yellow, purple');
    //     }
    // }


    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;


    function workingSteps(){
        
        if(!isFirstStepWorking) return 'First step broken';

        if(!isSecondStepWorking) return 'Second step broken';

        if(isThirdStepWorking) return 'Third step broken';

        if(isFourthStepWorking) return 'Fourth step broken';

        return 'no working property'


    }

   


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();

