let marks = [50,60,70,80]

if(marks.includes(50)){
    console.log('found element in array')
}else{
    console.log('could not find element')
}

if(marks.includes(50,1)){ //search from index 1
    console.log('found element in array')
}else{
    console.log('could not find element')
}