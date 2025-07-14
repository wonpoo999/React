    let x = 20
    let result = (x > 10) && console.log('AND 단축평가 확인!')

    x = 10
    result = (x > 10) && console.log('AND 단축평가 확인(2)!')

    x=20
    result = (x > 10) || console.log('OR 단축평가 확인!')
    
    x = 10
    result = (x > 10) || console.log('OR 단축평가 확인(2)')