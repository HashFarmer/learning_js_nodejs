import fetch from 'node-fetch';

const fetchPokemon = async() => {

    console.log("Before await in async ");

    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await res.json();
    console.log(data);
    
    //只有以上三句执行完后才执行这句
    console.log("After await in async");
};

fetchPokemon();
