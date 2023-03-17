(() => {
    // llamar el nombre del actor por id   

    function MoviesById( movieToId: string ) {
        console.log({ movieToId });
    }

   // obtenr el nombre del actor por id
    function getInformationMovieActors( id: string ) {
        console.log({ id });
    }

    // busca el bio del actor por ID
    function BioActorById( BioActorId: string ) {
        console.log({ BioActorId });
    }
    
   //crear nuevo nombre de una pelicula
            interface Movie {
                    cast:   string[];
                    title: string;
                    description: string;
                    rating: number;
                   
            }
            function CreateMovie({title, description, rating, cast}:Movie){
                console.log({ title, description, rating, cast });
               
            }

            function chekFullName (fullName:string){
                console.log({fullName});
                return true;
            }


    function createNewActor( fullName: string, birthdateActor: Date ): boolean {
        
        
        if ( chekFullName(fullName) ) return false;

        console.log('Crear actor', birthdateActor);
        return true;        

    }


})();

const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number  => {

    if ( isDead )  return  1500;
  

    if (isSeparated) return 2500;
    
    return isRetired ? 3000: 4000;

    // if ( isRetired ) {
    //     return 3000;
    // } else {
    //     return  4000; 
    // }    
}
