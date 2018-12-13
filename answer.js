// *** YOUR ANSWER BELOW ***

function thisOldMan(){
  // declaring the empty string for song
  let song = "";
  let num = "";
  let rhyme = "";
  for(let i = 1; i <= 10; i++){
    switch(i){
      case 1: rhyme = "thumb"; break;
      case 2: rhyme = "shoe"; break;
      case 3: rhyme = "knee"; break;
      case 4: rhyme = "door"; break;
      case 5: rhyme = "hive"; break;
      case 6: rhyme = "sticks"; break;
      case 7: rhyme = "heaven"; break;
      case 8: rhyme = "pate"; break;
      case 9: rhyme = "spine"; break;
      case 10: rhyme = "shin"; break;
      default: return "something is wrong!";
    }
    song += `This old man, he played ${i}. \n he played knick knack on my ${rhyme} with a knick knack, paddy-whack, give a dog a bone. \n This old man came rolling home. \n`;
  }
  return song;
}
