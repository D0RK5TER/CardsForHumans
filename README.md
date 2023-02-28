
[Cards For Humans](https://cardsforhumans.onrender.com/) is a spin on the website of the beloved game Cards against Humanity.

<br>

## Project Wiki
* [Database Schema](https://github.com/D0RK5TER/CardsForHumans/wiki/Schema)
* [Features List](https://github.com/D0RK5TER/CardsForHumans/wiki/Feature-List)
* [Redux Store Shape](https://github.com/D0RK5TER/Splashd/wiki/Redux-Store-Shape)
* [User Stories](https://github.com/D0RK5TER/CardsForHumans/wiki/User-Stories)


## Built Using
### Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Backend
![Python](https://img.shields.io/badge/python⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀-376c99?style=for-the-badge&logo=python&logoColor=f7d34b)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/sqlalchemy⠀⠀⠀⠀-424242?style=for-the-badge&logo=academia&logoColor=d71f00)

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
### Host
![Render](https://img.shields.io/badge/render-%4351e8.svg?style=for-the-badge&logo=sqlite&logoColor=white)










#Typical Use Case
##User Navigates to home page 
![Screenshot 2023-02-27 at 9 06 21 PM](https://user-images.githubusercontent.com/107891735/221760122-9013251f-7f2a-4345-a5f8-3e360495391e.png)
##User try to enter but is DENIED!
![Screenshot 2023-02-27 at 9 06 33 PM](https://user-images.githubusercontent.com/107891735/221760178-9f2628f0-9dc2-4c04-8539-5c14c756a8f3.png)
##User Creates Account/Logs In
![Screenshot 2023-02-27 at 9 06 47 PM](https://user-images.githubusercontent.com/107891735/221760237-761d6bbe-2730-4cc8-a32c-454acf26d738.png)
##User is redirected to their profile page upon sucess
![Screenshot 2023-02-27 at 9 07 11 PM](https://user-images.githubusercontent.com/107891735/221760340-ae1d27b4-496e-4e5b-9399-6d93374c7acb.png)
## From here a User might decide to make another deck
![Screenshot 2023-02-27 at 9 07 57 PM](https://user-images.githubusercontent.com/107891735/221760414-a309cb26-840d-4872-a8cc-4ab2d6a96cc0.png)
![Screenshot 2023-02-27 at 9 08 11 PM](https://user-images.githubusercontent.com/107891735/221760466-69b3eff9-aa95-4841-897a-6c77c1ed20f1.png)
##Adds cards to the freshly created deck
![Screenshot 2023-02-27 at 9 08 25 PM](https://user-images.githubusercontent.com/107891735/221760548-0332723c-e972-401e-a824-84a1df5abc8b.png)
##Then is navigated to the decks new page, where stats are viewable
![Screenshot 2023-02-27 at 9 07 39 PM](https://user-images.githubusercontent.com/107891735/221760590-6ba0fd89-accc-4d88-9d0d-86eb6a05f640.png)
##The user then wants to explore cards
![Screenshot 2023-02-27 at 9 09 42 PM](https://user-images.githubusercontent.com/107891735/221760675-38c22b10-9d03-4ded-83b8-020ef36a96aa.png)
##If they own the card, they see editor options
![Screenshot 2023-02-27 at 9 09 57 PM](https://user-images.githubusercontent.com/107891735/221760715-b816c838-83f0-46ef-9462-2c0eb699edb1.png)
##If they decide to print the pagers, the print page is populated

![Screenshot 2023-02-27 at 9 10 05 PM](https://user-images.githubusercontent.com/107891735/221760821-d434b485-933e-4891-aae7-209fec6b895d.png)
##They can now print the cards for use at home
![Screenshot 2023-02-27 at 9 10 14 PM](https://user-images.githubusercontent.com/107891735/221760856-4a861d56-0cd5-4c9f-889c-510a23f5f6c0.png)




# Getting It Started locally!
1. Clone the repo:
```
https://github.com/D0RK5TER/CardsForHumans
```

2. Install packages:
```
pipenv install -r requirements.txt
cd react-app
npm install
cd ..
```

3. Create .env 
```
touch .env
```
5. and add:
```
SECRET_KEY=<<Password of your choosing>>
DATABASE_URL=sqlite:///dev.db
```

4. Enter the shell, then Migrate and seed files:
```
pipenv shell
flask db init
flask db migrate
flask db upgrade
flask seed all
```

5. Run the server
```
flask run
cd react-app
npm start
```

6. Navigate to local site in browser
```
http://localhost:3000/
```
