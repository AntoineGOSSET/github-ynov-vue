#Github Ynov Vue

##Fonctionnalités :
Après avoir sélectionner :
  -un nom de projet
  -une période
  -une liste d'utilisateur github

Une section affiche pour chaque utilisateur :
  -la liste des commits sur la période
  -lien vers le repot github
  -lien vers le readme
  
##Technologies utilisées :
  -Boostrap
  -VueJS
  
##Remarque sur le développement :

J'ai commencé par réaliser une première interface simple, puis j'ai ajouté l'appel à l'API, j'ai ensuite remis une couche sur l'interface.
J'ai rencontré quelques difficultés, notamment pour gérer le cas où la personne n'a effectuée aucun commit sur la période sélectionnée. Pour le moment si la requête retourne une liste vide aucun éléments n'est affiché pour cet utilisateur.

##Impression d'écran :

### Version PC
![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/pc.png)

###Version Tablette

![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/tab.png)

###Version Smartphone

![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/smart.png)
