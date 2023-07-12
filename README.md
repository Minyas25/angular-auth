# AngularAuth

Projet angular avec de l'authentification JWT. Nécessite le projet symfony-auth-rest qui tourne pour fonctionner.


## Exercices
### Créer le front et le formulaire d'inscription
1. Générer un projet `angular-auth` avec routing
2. Générer un HomeComponent et lui assigner la route '/'
3. Rajouter le HttpClientModule et le FormsModule dans l'application
4. Générer un RegisterComponent et le lier à la route '/register'
5. Créer un fichier entities.ts et dedans faire une interface User qui va reprendre les propriétés de l'entité PHP
6. Générer un AuthService et dedans faire une méthode addUser(user:User) qui va faire un post sur la route /api/user du serveur
7. Dans le RegisterComponent faire un formulaire avec email et mot de passe et faire qu'au submit ça fasse un addUser

### Formulaire de login/register
1. Dans le RegisterComponent, rajouter une propriété isLogin initialisée à false
2. Dans le template, en se basant uniquement sur cette propriété isLogin, faire en sorte de modifier l'affichage pour faire que dans le cas où isLogin alors on affiche le titre "Login", on affiche pas le champ repeatPassword et on fait que le bouton register passe isLogin à false. Dans le cas où isLogin est false, on affiche le title Register, le champ repeatPassword et on fait que au click sur login ça passe isLogin à true
3. On rajoute dans notre AuthService une méthode login qui va être (pour l'instant) un copié-collé de la méthode register, mais pas sur la même route
4. Dans le RegisterComponent, dans le onSubmit, on fait en sorte d'appeler un login ou un register selon la valeur de isLogin