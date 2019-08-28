Single page application on Django with React and Rest Framework
--------------------------------------------- 
Full stack Django/React/Redux app that uses token based authentication with Knox.

## Usage on Django, React Js & Rest API

Setup virtualenv (not required)
```bash
mkvirtualenv myenv
```


Install dependencies
```bash
pip install -r requirements.txt
npm install
```


Set up PostgreSQL and add configurations into a hidden file .env
DATABASE_URL=postgres://NAME:PASS@localhost:/DBNAME


Django migrate, create admin user
```bash
python manage.py migrate
python manage.py createsuperuser
```


Run django server, serve API on 127.0.0.1:8000
```bash
python manage.py runserver
```


Login to Django Admin
```bash
http://127.0.0.1:8000/control/
```


Build frontend and collect static files
```bash
npm run build
python manage.py collectstatic
```


Or run webpack server in dev mode
```bash
# Run webpack (from root)
npm run dev
```


Open the site
```bash
http://127.0.0.1:8000/
```
