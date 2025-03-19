const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let peliculas = [
  { id: 1, nombre: "JOKER", descripcion: "es una película de drama y thriller psicológico dirigida por Todd Phillips y protagonizada por Joaquin Phoenix en el papel de Arthur Fleck, un hombre con problemas mentales que sueña con ser comediante en la ciudad de Gotham. La historia sigue su progresiva transformación en el infame villano Joker, explorando temas como la alienación social, la salud mental y la violencia.", imagen: "pelicula3.jpg" },
  { id: 2, nombre: "JOHN WICK", descripcion: "John Wick es una saga de películas de acción protagonizada por Keanu Reeves. La historia sigue a John Wick, un exasesino legendario que regresa al mundo del crimen en busca de venganza después de que unos criminales matan a su perro, el último regalo de su difunta esposa.", imagen: "pelicula4.jpg" },
];

app.get('/', (req, res) => {
  res.render('index', { peliculas });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;

  if (usuario === 'admin' && contrasena === 'admin') {
    res.redirect('/admin');
  } else {
    console.error('Error: Usuario o contraseña incorrectos');
    res.render('login', { error: 'Usuario o contraseña incorrectos' }); 
  }
});

app.get('/admin', (req, res) => {
  res.render('admin', { peliculas });
});

app.post('/addPelicula', (req, res) => {
  const { nombre, descripcion, imagen } = req.body;
  const newPelicula = {
    id: peliculas.length + 1,
    nombre,
    descripcion,
    imagen
  };
  peliculas.push(newPelicula);
  res.redirect('/admin');
});


app.post('/editPelicula', (req, res) => {
  const { id, nombre, descripcion, imagen } = req.body;
  let Pelicula = peliculas.find(pelicula => pelicula.id == id);
  if (Pelicula) {
    Pelicula.nombre = nombre;
    Pelicula.descripcion = descripcion;
    Pelicula.imagen = imagen;
  }
  res.redirect('/admin');
});


app.post('/deletePelicula', (req, res) => {
  const { id } = req.body;
  peliculas = peliculas.filter(pelicula => pelicula.id != id);
  res.redirect('/admin');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});



    