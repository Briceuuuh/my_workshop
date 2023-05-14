const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Command test requete --> curl -i -H "Content-Type: application/json" -X POST -d '{"user":"bob", "password":"test"}' http://localhost:8080/auth/login

const usersFile = 'users.txt';
if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, '');
}

app.post('/auth/login', (req, res) => {
    const { user, password } = req.body;

    fs.readFile(usersFile, function (err, data) {
        if (err) throw err;
        const users = data.toString().split('\n');

        const foundUser = users.find((u) => {
            const [uName, uPassword] = u.split(':');
            return uName === user && uPassword === password;
        });

        if (foundUser) {
            console.log(`Utilisateur Trouvé.\n`);
            return res.status(200).json()
        } else {
            console.log(`Utilisateur Pas Trouvé.\n`);
            return res.status(401).json()
        }
    });
});

app.post('/auth/signup', (req, res) => {
    const { user, password } = req.body;
    fs.readFile(usersFile, function (err, data) {
        if (err) throw err;
        const users = data.toString().split('\n');
        const foundUser = users.find((u) => {
            const [uName] = u.split(':');
            return uName === user;
        });
        if (foundUser) {
            console.log(`Utilisateur Existant.\n`);
            return res.status(409).json()
        } else {
            fs.appendFile(usersFile, `${user}:${password}\n`, function (err) {
                if (err) throw err;
                console.log(`Utilisateur ${user} crée.\n`);
                return res.status(200).json()
            });
        }
    });
});

app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});
