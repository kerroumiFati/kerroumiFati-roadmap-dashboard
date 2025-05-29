# 📍 Roadmap Dashboard (Prototype)

This is a functional prototype for a roadmap dashboard tool built with **React.js** (frontend) and **Django** (backend). It visualizes project milestones dynamically and interactively.


## ⚙️ Backend Setup (Django)
cd backend
python -m venv venv

# Windows:
.\venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate

### Create superUser for Admin Access so you can log in to the admin panel 
### to create, edit, and delete  roadmap items dynamically
python manage.py createsuperuser 

Access the admin panel:
👉 http://localhost:8000/admin

### run the server:
python manage.py runserver

###  the frontend/:

cd .\frontend\roadmap-ui\
npm install
npm start


 ### API Endpoint
http://localhost:8000/api/roadmap/
