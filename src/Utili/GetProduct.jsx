const GetProduct = async() => {

     const res = await fetch('https://hahidportfolio.vercel.app/product', {
          cache: 'no-cache'
     });

      return  res.json();
 
};

export default GetProduct;