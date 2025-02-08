const {Theme}= require("../../db")

const getThemes= async ()=>{
    const Themes= Theme.findAll();
console.log(Themes);

    return Themes;
}

module.exports= getThemes;