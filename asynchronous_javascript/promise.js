const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke!');
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hiii')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    
  })

promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2);
  })
  .catch(() => console.log(''))