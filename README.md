# API Documentation
The API is available at /api endpoint. All requests and responses should be in JSON format.

## Ping

````
GET /api/ping
Returns a simple message indicating that the server is running.
````
Response
Content-Type: application/json
````
{
"message": "pong"
}
````
## Blogs
Get All Blogs

````
GET /api/blogs
````

Returns a list of all blogs.


Content-Type: application/json

````
{
"id": 1,
"title": "My First Blog",
"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"createdAt": "2022-04-07T18:35:23.000Z",
"updatedAt": "2022-04-07T18:35:23.000Z"
},
{
"id": 2,
"title": "My Second Blog",
"content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"createdAt": "2022-04-08T12:45:13.000Z",
"updatedAt": "2022-04-08T12:45:13.000Z"
},
...
````
Get a Single Blog

Copy code
GET /api/blogs/:id
Returns a single blog with the given ID.

Response
css
Copy code
HTTP/1.1 200 OK
Content-Type: application/json
```
 {
    "name": "How to learn JS efficient",
    "id": "js-learn",
    "style": "text-white",
    "description": "lorem ipsum something something something something",
    "type": "blog",
    "cover": "https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/622a0b4bcb413cfc53a4a0c2_____1_-__2.jpg",
    "embedVideo": "https://www.youtube.com/embed/1_vDikyLYVE",
    "carousel": [
      "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1676128700626-bcd51a362e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80",
      "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1676128700626-bcd51a362e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80"
    ],
    "projectTeam": [
      {
        "name": "Manager",
        "members": [
          "Ivan Melnyk",
          "Ivan Melnyk"
        ]
      }

    ],
    "body": "html here..."
    "created": "2023-01-10T13:43:40.824Z"
  }
```

## Projects
Get All Projects

Copy code
````
GET /api/projects
````
Returns a list of all projects.

Response
Content-Type: application/json


```
 {
    "name": "How to learn JS efficient",
    "id": "js-learn",
    "style": "text-black",
    "description": "lorem ipsum something something something something",
    "type": "project",
    "cover": "https://uploads-ssl.webflow.com/6229ff28081a13ed8a447ccc/622a0b4bcb413cfc53a4a0c2_____1_-__2.jpg",
    "embedVideo": "https://www.youtube.com/embed/1_vDikyLYVE",
    "carousel": [
      "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1676128700626-bcd51a362e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80",
      "https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1676128700626-bcd51a362e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80"
    ],
    "projectTeam": [
      {
        "name": "Manager",
        "members": [
          "Ivan Melnyk",
          "Ivan Melnyk"
        ]
      }

    ],
    "body": "html here..."
    "created": "2023-01-10T13:43:40.824Z"
  }
```
