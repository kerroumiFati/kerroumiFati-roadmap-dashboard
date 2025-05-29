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


### Creating Milestones via Django Admin or Shell
### In Django Admin or Shell:
# Open your terminal and run:

python manage.py shell

# Paste the following code to create example milestones:

from roadmap.models import Milestone

Milestone.objects.create(title="Project Kickoff", description="Initial meeting", date="2024-06-01", order=1, status="done")
Milestone.objects.create(title="Requirement Gathering", description="Gathering business needs", date="2024-06-07", order=2, status="done")
Milestone.objects.create(title="Design Phase", description="UI/UX wireframes", date="2024-06-15", order=3, status="current")
Milestone.objects.create(title="Development Start", description="Backend and frontend setup", date="2024-07-01", order=4, status="upcoming")
Milestone.objects.create(title="Testing & QA", description="Bugs & Improvements", date="TBA", order=5, status="tba")


Milestone.objects.create(title="API Integration", description="Integrate 3rd-party APIs", date="2024-07-10", order=6, status="upcoming")
Milestone.objects.create(title="Beta Launch", description="Internal testing release", date="2024-07-20", order=7, status="tba")
Milestone.objects.create(title="Client Feedback", description="Gather feedback from stakeholders", date="2024-07-25", order=8, status="tba")
Milestone.objects.create(title="Polish and Final Fixes", description="UI/UX polishing", date="2024-08-01", order=9, status="upcoming")
Milestone.objects.create(title="Final Launch", description="Go live for public", date="2024-08-10", order=10, status="tba")
Milestone.objects.create(title="Post-Launch Support", description="Fix issues post-launch", date="2024-08-15", order=11, status="tba")
Milestone.objects.create(title="Performance Review", description="Evaluate success metrics", date="2024-08-20", order=12, status="tba")

### run the server:
python manage.py runserver

###  the frontend/:

cd .\frontend\roadmapUi\
npm install

### run frontned:
npm start


 ### API Endpoint
http://localhost:8000/api/roadmap/
