const nama = 'raiden';
const umur = 20;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;

//     // pakai reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo nama saya ${nama}, umur ${umur} tahun.`;
// console.log(str);

// highlight
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<b><u>${values[i] || ''}</u></b>`, '');
}

const str = highlight `Halo nama saya ${nama}, umur ${umur} tahun.`;
document.body.innerHTML = str;