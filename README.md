# Pizza Biola

- [Pizza Biola](#pizza-biola)
  - [Live demo](#live-demo)
  - [⭐ Features](#-features)
  - [🔧  How to setup and run](#--how-to-setup-and-run)
  - [🏞 Images from the website](#-images-from-the-website)
    - [Homepage most wanted section](#homepage-most-wanted-section)
    - [Entire homepage](#entire-homepage)
    - [Menu page](#menu-page)
    - [Dish details page](#dish-details-page)
    - [About us](#about-us)
    - [Login Page](#login-page)
    - [Admin page](#admin-page)
    - [Add New Dish page](#add-new-dish-page)
    - [Edit Dish page](#edit-dish-page)
  - [Resources used in this project](#resources-used-in-this-project)

## Live demo 

<a href="https://pizza-biola.herokuapp.com/" target="_blank">Pizza Biola</a>

*Since I am using the free version , please give a couple of minutes to start*

## ⭐ Features

- Admins can add dishes to the menu
  
- Admin can update and delete dishes
  
- Admins can make dish appear for the users

- Users can view to most liked dishes
  
- Users can vote for favorite dish
  
- See the ingredients of certain dish
  
- See allergens of certain dish
  
## 🔧  How to setup and run

first you need to make sure you have node install
in your terminal type

```
  node --version
```

Install the dependencies

```
  npm install
```

start the application

```
  npm start
```

## 🏞 Images from the website

### Homepage most wanted section

  ![Homepage, most wanted section - carousel](/showcase/homepage-1.png)

### Entire homepage

The homepage is the place where we show our most wanted dishes which are essentially the top 3 most liked (voted) dishes. And all of our public dishes.

![Entire homepage](/showcase/homepage-full.png)

### Menu page

In the menu page we can see each dish withing their category in a nice way. With the price and ingredients if any.

![Menu Page](/showcase/menu-full.png)

### Dish details page

The details page presents more information such as allergies that the dish may contain and the total votes it has. This is the page where the user can vote for a dish as well. We also have the ingredients and the description.

![Dish Details Page](/showcase/detail-page-full.png)

### About us

The about us page is a just simple page with placeholder information. About what we provide and who we are.

![About us page](/showcase/about-us.png)

### Login Page

The login page consist of warning message saying that this page is for staff only and if you are staff , but do not have account you should just contact the manager.The part of the page is the form basic email field and password field with login button.

![Login page](/showcase/login.png)

### Admin page

The admin page is a simple dashboard having the title category description price and whether is public or not for each dish. As well as edit and delete button. And of course button to add new dish.

![Admin page](/showcase/admin.png)

### Add New Dish page

This page have centered form with all the fields needed in order to create new dish. The most interesting part is how we handle adding ingredients and allergies. I wanted to make it easier for everything trying to add new dish so every ingredient is separated by **", "** *(comma and whitespace*.

![Add new dish page](/showcase/add-page.png)

### Edit Dish page

The for is exactly the same with the only difference  being that every field is pre-populated with the information from the existing model.

![Edit dish page](/showcase/edit-page.png)

## Resources used in this project

<table>
  <thead>
    <th>Name</th>
    <th>Usage</th>
    <th>Link</th>
  </thead>
  <tbody>
    <tr>
      <td>Tailwind css</td>
      <td>Styling - CSS framework</td>
      <td><a href="https://tailwindcss.com" target="_blank">Tailwind</a>
      </td>
    </tr>
    <tr>
     <td>Google fonts</td>
      <td>Fast font provider</td>
      <td><a href="https://fonts.google.com/" target="_blank">Google fonts</a>
      </td>
    </tr>
     <tr>
        <td>Hero icons</td>
        <td>Svg icons</td>
        <td><a href="https://heroicons.com/" target="_blank">Hero icons</a>
        </td>
    </tr>
    <tr>
        <td>Unsplash</td>
        <td>Stock images</td>
        <td><a href="https://unsplash.com/" target="_blank">Unsplash</a>
        </td>
    </tr>
  </tbody>
</table>
