# Github Ynov Vue 
![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/all.png)
</br>
## :star2: Fonctionnalités :
Après avoir sélectionner :
  - un nom de projet
  - une période
  - une liste d'utilisateur github

Une section affiche pour chaque utilisateur :
  - la liste des commits sur la période (le nom du commit est cliquable ainsi que la personne)
  - lien vers le repot github
  - un bouton permettant d'afficher le read me
  - un bouton permettant de télécharger le projet au format zip
  
## :pencil2: Technologies utilisées :
  - Boostrap
  - VueJS
  
## :mega: Remarque sur le développement :

J'ai commencé par réaliser une première interface simple, puis j'ai ajouté l'appel à l'API, j'ai ensuite remis une couche sur l'interface. </br>
J'ai rencontré quelques difficultés, notamment pour gérer le cas où la personne n'a effectuée aucun commit sur la période sélectionnée. Lorsque la requête pour récupérer les commits n'ai pas valide le nom de la personne est ajouté à un message d'alerte.</br>
Dans certains cas la requête ne retourne pas d'avatar pour la personne, une image par défaut est alors attribuée.

#### Les dernières modifications apportées ajoutent :
  - un bouton permettant de sélectionner tout les noms
  - la lecture du read me depuis la page et non plus un lien vers github
  - l'affichage d'une alerte pour les requêtes sans résultats
## :iphone: Impression d'écran :

<br/>
### Version PC
![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/pc.PNG)
<br/>
### Version Tablette

![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/tab.PNG)
<br/>
### Version Smartphone

![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/smart.PNG)
