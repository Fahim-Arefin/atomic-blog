import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App-memo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  
                        ## 1. Passing elements as children or regular prop
                       -------------------------------------------------------

  # see test.js file
  # cant demostrate bcz it will need context version of the app

                              ## 2. The memoize a component
                        ----------------------------------------
  ## problem: 
      when Archribe is open when we type something on searchbar (state lives in parent) will re-render all children 
      bcz Archribe is a children of App and it receives a prop called show. So each time it's get re-render.And its render time is 
      long bcz of its take long time to mapp over a huge array

  ## solution:
      so we memoize the Archribe component using memo function so that this show prop will not change 
      every render. and therefore Archribe component will not re-render when parent state updated
      <Archive show={false} />

      ## issue:
          But issue with memo that when pass a function or object as a prop even its not changing 
          every re-render each function and objects gets created in memory newly.
          So in this case memoizing a componet will not work bcz prop changed.

          <Archive
            archiveOption={archiveOption} //obj as a prop
            onAddPost={handleAddPost}     //func as a prop
            setIsFakeDark={setIsFakeDark} // no need to memozize setter function bcz react already memozize it behind the sciene
          />
      ## solution:
            We need to memoize the functions using useCallback() and 
            memoize the objects using useMemo() hooks
  

                            ## 3. The memoize a value
                        ----------------------------------------
    ## use --> useMemo() hook 
    ## useMemo(callback,dependancy array)
		## useMemo(()->{},[]) 

	  ## archiveOption = {
      			show: false,
      			title: `post archive added to main ${posts.length} post`,
    		       };  --> normal obj

	  ##  const archiveOption = useMemo(() => {
    		return {
      			show: false,
      			title: `post archive added to main ${posts.length} post`,
    		       };
 	       }, [posts.length]);

	  ## useMemo(callback,dependancy array)
    ## here now we passed archiveOption to Archribe compopnet as a prop will still be same as the obbject
       itself is memoized

                             ## 3. The memoize a func
                        ----------------------------------------

    ## use --> useCallback() hook 
    ## useCallbak(func,dependancy array)
		## useCallbak(()->{},[]) 


    // normal func
     const handleAddPost = (post) => {
      setPosts((posts) => [post, ...posts]);
     }

    // memoizing a function
    const handleAddPost = useCallback((post) => {
      setPosts((posts) => [post, ...posts]);
    }, []);
*/
