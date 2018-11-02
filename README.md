# Github Ynov Vue 

## Fonctionnalités :star2: :
Après avoir sélectionner :
  - un nom de projet
  - une période
  - une liste d'utilisateur github

Une section affiche pour chaque utilisateur :
  - la liste des commits sur la période (le nom du commit est cliquable ainsi que la personne)
  - lien vers le repot github
  - lien vers le readme
  
## Technologies utilisées :pencil2: :
  - Boostrap
  - VueJS
  
## Remarque sur le développement :mega: :

J'ai commencé par réaliser une première interface simple, puis j'ai ajouté l'appel à l'API, j'ai ensuite remis une couche sur l'interface.<br/>
J'ai rencontré quelques difficultés, notamment pour gérer le cas où la personne n'a effectuée aucun commit sur la période sélectionnée. Pour le moment si la requête retourne une liste vide aucun éléments n'est affiché pour cet utilisateur.<br/>
Dans certains cas la requête ne retourne pas d'avatar pour la personne, cela provoque alors une erreur. :weary:

## Impression d'écran :iphone: :
![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/all.png)
<br/>
<br/>
### Version PC
![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/pc.PNG)
<br/>
### Version Tablette

![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/tab.PNG)
<br/>
### Version Smartphone

![alt text](https://raw.githubusercontent.com/AntoineGOSSET/github-ynov-vue/master/screenshot/smart.PNG)
