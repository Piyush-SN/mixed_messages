let message = ' '
genRandNum = () =>{
    return message = Math.floor(Math.random() * 5) 
}

genarateMessage = () =>{
    let randomNum = genRandNum()
    switch(randomNum){
        case 1:
        return 'Now or Never';
        break;
        case 2:
        return 'Its my life';
        break;
        case 3:
        return 'Just Do It';
        break;
        case 4:
        return 'Nothing is Impossible';
        break;
        default:
        return 'Try again'
    }
}

console.log(genarateMessage())