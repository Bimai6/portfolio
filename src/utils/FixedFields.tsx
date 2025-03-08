export function handleTitle(name: string) {
    return name === 'magnolia-hotels' ? 'MAGNOLIA HOTELS' : name === 'EyeOfTheDoom' ? 'EYE OF THE DOOM' : name === 'mugen-the-seinen-manga-gate' ? 'MUGEN' : name === 'theuss' ? 'THEUSS' : undefined;
}

export function handleDate(date: string) {
    const dateArray = date.split('T');
    const datePieces = dateArray[0].split('-');
    return datePieces[2] + '.' + datePieces[1] + '.' + datePieces[0].substring(2,4);
}