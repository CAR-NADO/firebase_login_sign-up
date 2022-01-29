import React,{useEffect} from 'react';
import auth from './firebase';
import {Redirect} from 'react-router-dom';

const Welcome = () => {
  
    const logoutHandler = () => {
        auth.signOut();
        return <Redirect to="/register" />
    }
  return <div>
      <h1>Welcome</h1>
      <button type="button" className="btn btn-outline-danger" onClick={()=>logoutHandler()}>Logout</button>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error mollitia similique eos aliquid doloribus laudantium libero facilis minus soluta. Numquam praesentium vel alias nihil doloribus aliquam est quam. Quisquam unde sapiente incidunt fugit rem accusantium atque? Dolore, autem ipsa ducimus maiores numquam similique eligendi fuga voluptates sunt quos. Sunt provident magnam ipsam nisi aliquid voluptatum sed error, nam reiciendis perspiciatis necessitatibus amet aspernatur optio voluptate ea enim quaerat ipsum sit quam culpa! Vitae fuga nemo, nulla illum asperiores doloremque! Asperiores numquam ducimus at temporibus accusamus explicabo id suscipit fugiat esse, magnam possimus excepturi fugit voluptates, praesentium optio omnis soluta.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error mollitia similique eos aliquid doloribus laudantium libero facilis minus soluta. Numquam praesentium vel alias nihil doloribus aliquam est quam. Quisquam unde sapiente incidunt fugit rem accusantium atque? Dolore, autem ipsa ducimus maiores numquam similique eligendi fuga voluptates sunt quos. Sunt provident magnam ipsam nisi aliquid voluptatum sed error, nam reiciendis perspiciatis necessitatibus amet aspernatur optio voluptate ea enim quaerat ipsum sit quam culpa! Vitae fuga nemo, nulla illum asperiores doloremque! Asperiores numquam ducimus at temporibus accusamus explicabo id suscipit fugiat esse, magnam possimus excepturi fugit voluptates, praesentium optio omnis soluta.</p>

  </div>;
};

export default Welcome;
