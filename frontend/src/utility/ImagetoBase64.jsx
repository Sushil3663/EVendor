const ImagetoBase64 = async(file) =>{
    let reader = new FileReader()
    reader.readAsDataURL(file)

  let data =  new Promise((resolve,reject)=>{
    reader.onload = () =>resolve(reader.result)
    reader.onerror = err => reject(err)
  })
  return data
    
    };
     



export {ImagetoBase64};