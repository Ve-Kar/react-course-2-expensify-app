import React from 'react';
import ReactDOM from 'react-dom';

 const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p> 
  </div>
 );

 const withAdminWarning = (WrappedComponent) => {
     return (props) => (
         <div>
           {props.isAdmin && <p>This is private info.Please don't share!</p>}
           <WrappedComponent {...props} />
           </div>
     );
 };

const AdminInfo = withAdminWarning(Info); 


const requireAuthentification = (WrappedComponent) => {
    return  (props) => (
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p>Please log in to see the details!</p>
            )}
        </div>
      ); 
};

const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info ="There are details"/>, document.getElementById('app'));