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

Django migrate, create admin user
```bash
./manage.py migrate
./manage.py createsuperuser
```

Run django server, serve API on localhost:8000
```bash
python leadmanager/manage.py runserver
```

Login to Django Admin
```bash
http://localhost:8000/control/
```

In other terminal, run webpack server
```bash
# Run webpack (from root)
npm run dev

# Build for production
npm run build
```