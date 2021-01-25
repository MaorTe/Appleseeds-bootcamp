
for (let index = 1; index <= 100; index++) {
    if (index % 7 === 0 || index%10===7 || Math.floor((index / 10) % 10)===7)
        console.log('BOOM');
    else 
        console.log(index);
}