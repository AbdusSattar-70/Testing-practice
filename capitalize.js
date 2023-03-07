const capitalize = (str)=>{
const strNew = str.split('')[0].toUpperCase() + str.slice(1);
return strNew;
}

module.exports = capitalize;