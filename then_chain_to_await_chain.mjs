import fetch from 'node-fetch';

const fetchPokemon = async(id) => {

    console.log("Before await");
    //这3条语句中间不能有中断？
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
    //
    console.log("After await");
};

fetchPokemon(2);