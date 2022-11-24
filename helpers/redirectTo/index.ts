const redirectTo = (newURL: string, isNewTab: boolean) => {
    if(!isNewTab)
        window.location.assign(newURL);
    else
        window.open(newURL);
}; 

export default redirectTo;