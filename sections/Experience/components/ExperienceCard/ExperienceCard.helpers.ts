export const convertToCamelCase = (input: string) => {
    const tokens = input.split(" ");

    let newString = tokens[0].toLocaleLowerCase();

    for(let i = 1; i < tokens.length; i++){
        newString += (tokens[i][0].toUpperCase() + tokens[i].substring(1));
    }
    return newString;
};