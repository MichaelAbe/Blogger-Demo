/*
    Events make up of:

    Cause / Effect
    How to interact / What you expect to happen

    Cause: click the header H1 tag
    Effect: Changte the H1 heater tag to blue 
*/

// document.addEventListener('DOMContentLoaded', function() {
//     let header = document.getElementById('header');

//     header.addEventListener("click", function (e) {
//         e.target.style.color = "blue"
//     });
// });

// document.getElementById('header')

/* 
    Native:
    1. Integer
    2. String
    3. Float
    5. Boolean
    6. Undefined
    7. Null
    8. Functions

    Not Native
    1. Arrays

*/

// function addTwoNumbs(num1, num2) {
//     return num1 + num2;
// }

// console.log(addTwoNumbs(1, 3));

// function doMath(num1, num2, callback) {
//     return callback(num1, num2);
// }

// doMath(1, 3, addTwoNumbs);

const blogs = [
// {title: "Blog Title 1",content: "Blog Content 1"},
// {title: "Blog Title 2",content: "Blog Content 2"},
// {title: "Blog Title 3",content: "Blog Content 3"},
// {title: "Blog Title 4",content: "Blog Content 4"},
]

function main() {
    return document.getElementById("main");
  }
  
  function titleInput() {
    return document.getElementById("title");
  }
  
  function contentInput() {
    return document.getElementById("content");
  }
  
  function form() {
    return document.getElementById("form");
  }
  
  function formLink() {
    return document.getElementById("form-link");
  }
  
  function blogsLink() {
    return document.getElementById("blogs-link");
  }
  
  function resetFormInputs() {
    titleInput().value = "";
    contentInput().value = "";
  }
  
  function resetMain() {
    main().innerHTML = "";
  }
  
  function formTemplate() {
    return `
    <h3>Create Blog</h3>
    <form id="form">
      <div class="input-field">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div class="input-field">
        <label for="content">Content</label><br />
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
      </div>
      <input type="submit" value="Create Blog" />
    </form>
    `;
  }
  
  function blogsTemplate() {
    return `
    <h3>List Of Blogs</h3>
    <div id="blogs"></div>
    `;
  }
  
  function renderBlog(blog) {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let blogsDiv = document.getElementById("blogs");
  
    h4.innerText = blog.title;
    p.innerText = blog.content;
  
    div.appendChild(h4);
    div.appendChild(p);
  
    blogsDiv.appendChild(div);
  }
  
  function renderForm() {
    resetMain();
    main().innerHTML = formTemplate();
    form().addEventListener("submit", submitForm);
  }
  
  function renderBlogs() {
    resetMain();
    main().innerHTML = blogsTemplate();
  
    blogs.forEach(function (blog) {
      renderBlog(blog);
    });
  }
  
  function submitForm(e) {
    e.preventDefault();
  
    blogs.push({
      title: titleInput().value,
      content: contentInput().value,
    });
  
    renderBlogs();
  }
  
  function formLinkEvent() {
    formLink().addEventListener("click", function (e) {
      e.preventDefault();
  
      renderForm();
    });
  }
  
  function blogsLinkEvent() {
    blogsLink().addEventListener("click", function (e) {
      e.preventDefault();
  
      renderBlogs();
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    renderForm();
    formLinkEvent();
    blogsLinkEvent();
  });