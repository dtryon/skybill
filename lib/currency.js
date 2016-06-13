export const format = (number) => {

    const result = (!!number && (typeof number === 'number')) ? number : 0;
    return '£' + result.toFixed(2);
}

export default {
    format
}
