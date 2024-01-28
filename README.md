# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


import { useEffect, useState } from "react"

export function DataAjax(){

    const[info,setInfo]= useState({id:0, 
    title: "",
    price: 0,
    description: " ",
    category: " ",
    image: " ",
    rating: {rate: 0,
        count: 0}
        });

    useEffect(()=>{
        var http = new XMLHttpRequest();
        http.open("GET","https://fakestoreapi.com/products/9",true);
        http.send();
        http.onreadystatechange = function(){
            if(http.readyState==4){
                setInfo(JSON.parse(http.responseText));
            }
        }
       

    },[])
   


    return(
        <div className="container-fluid">
            <h1>Hello</h1>
          <p>{info.id}</p> 
          
          <p>{info.price}</p>
          <p>{info.category}</p>
          <div ><img width="400px" height="200px" src={info.image}/></div>
          
          <p>{info.category}</p>
          <p>{info.category}</p>
          <p>{info.category}</p>
          
        </div>
    )
}





 
            <marquee className="d-flex mt-4">
          
          
          <img onMouseOver={ImgChange} className="border border-2 border-black me-4" src="s1.png" width="80" height="80"/>
            
            
          <img onMouseOver={ImgChange} className="border border-2 border-black" src="s2.png" width="80" height="80"/>
            
           
          <img onMouseOver={ImgChange} className="border border-2 border-black" src="s5.png" width="80" height="80"/>
     
          <img onMouseOver={ImgChange} className="border border-2 border-black" src="s7.jpg" width="80" height="80"/>
            
            </marquee>
          
          
          <main className=" mt-4 ">
                <img src={imgg} width="350" height="380"/>
            </main>

             const [imgg,setImgg]= useState('s1.png');

     function ImgChange(e){
        setImgg(e.target.src); 
    
    }
#   M E R N - A p p  
 #   M E R N - A p p  
 