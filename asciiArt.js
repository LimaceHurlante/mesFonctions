/*
exemple d'entrée : 

4
5 
E
 #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### 
# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # 
### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## 
# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       
# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  



*/

const L = parseInt(readline());
const H = parseInt(readline());
let T = readline();
T = T.toUpperCase();

var ligne = [];

var chaine  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
var lettre =[chaine.length];

for (let i = 0; i < H; i++) {
   
    const ROW = readline();
    ligne.push(ROW);
}
for(let j = 0;j<chaine.length;j++){
    lettre[j] = [];
    for(let k = 0;k<ligne.length;k++){
        lettre[j][k] = ""
        for(var l = 0;l<L;l++){
            lettre[j][k] = lettre[j][k] + ligne[k][j*L+l];
        }
        
    }
}
var resultat = [H];
for(var h=0;h<H;h++){
    resultat[h] = "";
    for(t=0;t<T.length;t++){
        IndexLettre = chaine.indexOf(T[t]);
        if(IndexLettre == -1){
            IndexLettre = chaine.indexOf("?");
            //console.error(IndexLettre);

        }
        resultat[h] = resultat[h] + lettre[IndexLettre][h];
    }
    console.log(resultat[h]);
    
}
