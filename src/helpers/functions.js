const shorten = (title) => {
    const splitedtitle = title.split(" ")
    const realtitle = splitedtitle[0] + splitedtitle [1];
    return realtitle;
}
export {shorten}